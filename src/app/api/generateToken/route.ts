import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST() {
  try {
    // Generate a random API key
    const apiKey = crypto.randomBytes(16).toString("hex");

    // TODO: Save the API key to the database associated with the user
    // This step would typically involve:
    // 1. Getting the user ID from the session
    // 2. Storing the API key in the database
    // 3. Associating it with the user

    // For now, we'll just return the generated API key
    return NextResponse.json({ apiKey }, { status: 201 });
  } catch (error) {
    console.error("Error generating API key:", error);
    return NextResponse.json(
      { error: "Failed to generate API key" },
      { status: 500 }
    );
  }
}
