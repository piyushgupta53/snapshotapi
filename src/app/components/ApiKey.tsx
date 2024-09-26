"use client";

import prisma from "@/lib/prisma";
import { Copy, CopyCheck, Eye, EyeOff } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface KeysProps {
  apiKey: string | undefined;
}

export default function Keys({ apiKey: initialApiKey }: KeysProps) {
  const [apiKey, setApiKey] = useState(initialApiKey || "");
  const [isLoading, setIsLoading] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const { data: session } = useSession();

  const regenerateApiKey = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generateToken", {
        method: "POST",
      });
      if (response.ok) {
        const data = await response.json();
        setApiKey(data.apiKey);

        await prisma.apiKey.upsert({
          where: { userId: session?.user.id },
          update: {
            key: data.apiKey,
          },
          create: {
            userId: session?.user.id!,
            key: data.apiKey,
          },
        });
      } else {
        console.error("Failed to generate API key");
      }
    } catch (error) {
      console.error("Error generating API key:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleApiKeyVisibility = () => {
    setShowApiKey(!showApiKey);
  };

  const copyApiKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy API key: ", err);
    }
  };

  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="px-8 py-20 w-full">
        <h1 className="font-semibold text-lg">API Keys</h1>

        <div className="flex flex-col gap-6 mt-6">
          <div className="p-6 border flex-1 border-slate-200 rounded-lg shadow-sm max-w-4xl">
            <h2 className=" text-lg font-normal">Access Key</h2>

            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Use your API Key to generate screenshots
            </p>

            <div className="mt-4 flex w-full max-w-lg flex-col sm:flex-row space-y-2 sm:space-y-0 items-center space-x-2">
              <div className="flex gap-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  readOnly
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                />

                <button
                  className="border border-slate-200 rounded-lg px-3 hover:bg-gray-100"
                  onClick={toggleApiKeyVisibility}
                >
                  {showApiKey ? <EyeOff /> : <Eye />}
                </button>

                <button
                  className="border border-slate-200 rounded-lg px-3 hover:bg-gray-100"
                  onClick={copyApiKey}
                >
                  {copySuccess ? <CopyCheck /> : <Copy />}
                </button>

                <button
                  className="border-persian-blue-500 hover:bg-gray-100 border px-2 py-2 rounded-lg"
                  onClick={regenerateApiKey}
                  disabled={isLoading}
                >
                  <p className="text-persian-blue-500 font-medium">
                    {isLoading ? "Generating..." : "Generate"}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
