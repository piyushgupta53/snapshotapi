import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

// Configure AWS S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const RENDER_API_URL = process.env.RENDER_API_URL;

export async function POST(req: NextRequest) {
  try {
    // Extract API key from headers
    const apiKey = req.headers.get("x-api-key");
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is required" },
        { status: 401 }
      );
    }

    // Verify API key
    const user = await prisma.apiKey.findUnique({
      where: { key: apiKey },
      include: { user: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
    }

    // Extract query parameters
    const url = req.nextUrl.searchParams.get("url");
    const fullPage = req.nextUrl.searchParams.get("fullPage");
    const width = req.nextUrl.searchParams.get("width") || "1280";
    const height = req.nextUrl.searchParams.get("height") || "720";
    const imageFormat = req.nextUrl.searchParams.get("format") || "png";
    const delay = req.nextUrl.searchParams.get("delay") || "0";
    const timeout = req.nextUrl.searchParams.get("timeout") || "30000";

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Construct query string for Render API
    const queryParams = new URLSearchParams({
      url,
      ...(fullPage && { fullPage }),
      width,
      height,
      imageFormat,
      delay,
      timeout,
    });

    // Call Render API
    const renderResponse = await fetch(
      `${RENDER_API_URL}?${queryParams.toString()}`,
      {
        method: "POST",
      }
    );

    if (!renderResponse.ok) {
      throw new Error(
        `Render API responded with status: ${renderResponse.status}`
      );
    }

    const screenshot = await renderResponse.arrayBuffer();

    // Generate a unique filename for the screenshot
    const filename = `${uuidv4()}.${imageFormat}`;

    // Upload screenshot to S3
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: filename,
      Body: Buffer.from(screenshot),
      ContentType: `image/${imageFormat}`,
    };

    await s3Client.send(new PutObjectCommand(uploadParams));

    // Generate the S3 URL for the uploaded screenshot
    const s3Url = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;

    // Save screenshot info to database
    await prisma.screenshot.create({
      data: {
        url,
        userId: user.userId,
        s3Url,
      },
    });

    // Return S3 URL of the screenshot
    return NextResponse.json({ screenshotUrl: s3Url }, { status: 200 });
  } catch (error) {
    console.error("Screenshot error:", error);
    return NextResponse.json(
      { error: "Failed to generate and upload screenshot" },
      { status: 500 }
    );
  }
}
