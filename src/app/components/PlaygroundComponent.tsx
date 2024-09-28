"use client";

import { useToast } from "@/hooks/use-toast";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

interface PlaygroundComponentProps {
  apiKey: string;
}

export default function PlaygroundComponent({
  apiKey,
}: PlaygroundComponentProps) {
  const [url, setUrl] = useState("");
  const [fullPage, setFullPage] = useState(false);
  const [viewport, setViewport] = useState({ width: 1280, height: 720 });
  const [imageFormat, setImageFormat] = useState("png");
  const [delay, setDelay] = useState(0);
  const [timeout, setTimeout] = useState(30000);
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { toast } = useToast();

  const getApiUrl = useCallback(() => {
    return `/api/screenshot?url=${encodeURIComponent(
      url
    )}&fullPage=${fullPage}&width=${viewport.width}&height=${
      viewport.height
    }&format=${imageFormat}&delay=${delay}&timeout=${timeout}`;
  }, [url, fullPage, viewport, imageFormat, delay, timeout]);

  const debouncedHandleScreenshot = useCallback(
    debounce(async () => {
      setIsLoading(true);
      setError("");
      setScreenshotUrl("");

      try {
        const response = await fetch(getApiUrl(), {
          method: "POST",
          headers: {
            "x-api-key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        toast({
          title: "🎉 Screenshot Generated!",
        });

        const data = await response.json();
        setScreenshotUrl(data.screenshotUrl);
      } catch (err) {
        setError("Failed to generate screenshot. Please try again.");
        console.error("Screenshot error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [getApiUrl, apiKey, toast]
  );

  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="px-4 sm:px-8 py-20 w-full">
        <h1 className="font-bold text-lg mb-10">Playground</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-2">URL</label>
                <input
                  type="url"
                  placeholder="https://stripe.com"
                  className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={fullPage}
                    onChange={(e) => setFullPage(e.target.checked)}
                  />
                  Full Page
                </label>
              </div>

              <div>
                <label className="block mb-2">Viewport</label>
                <div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      placeholder="Width"
                      className="w-1/2 border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                      value={viewport.width}
                      onChange={(e) =>
                        setViewport({
                          ...viewport,
                          width: Math.max(1, parseInt(e.target.value) || 1),
                        })
                      }
                    />
                    <input
                      type="number"
                      min="1"
                      placeholder="Height"
                      className="w-1/2 border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                      value={viewport.height}
                      onChange={(e) =>
                        setViewport({
                          ...viewport,
                          height: Math.max(1, parseInt(e.target.value) || 1),
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">Image Format</label>
                <select
                  className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                  value={imageFormat}
                  onChange={(e) => setImageFormat(e.target.value)}
                >
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Delay (ms)</label>
                <input
                  type="number"
                  min="0"
                  className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                  value={delay}
                  onChange={(e) =>
                    setDelay(Math.max(0, parseInt(e.target.value) || 0))
                  }
                />
              </div>

              <div>
                <label className="block mb-2">Timeout (ms)</label>
                <input
                  type="number"
                  min="0"
                  className="w-full border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-persian-blue-500"
                  value={timeout}
                  onChange={(e) =>
                    setTimeout(Math.max(0, parseInt(e.target.value) || 0))
                  }
                />
              </div>

              <button
                className="bg-persian-blue-500 max-w-fit rounded-lg px-4 py-2 hover:bg-persian-blue-500/90 disabled:opacity-50"
                onClick={debouncedHandleScreenshot}
                disabled={isLoading || !url}
              >
                <p className="text-white flex gap-2 items-center">
                  <Fullscreen />
                  {isLoading ? "Generating..." : "Screenshot"}
                </p>
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="font-semibold mb-2">API URL</h2>
              <div className="bg-gray-800 p-4 rounded-lg overflow-hidden shadow-inner">
                <pre className="whitespace-pre-wrap break-all text-sm">
                  <code className="text-green-400 font-mono">
                    {getApiUrl().split("&").join("&\n ")}
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Screenshot Preview</h2>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-gray-200 p-2 flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="flex-grow text-center text-sm text-gray-600 truncate">
                    {url || "https://example.com"}
                  </div>
                </div>

                <div className="bg-white p-4">
                  <div className="aspect-video w-full flex items-center justify-center">
                    {isLoading ? (
                      <p className="text-slate-400">Generating screenshot...</p>
                    ) : error ? (
                      <p className="text-red-500">{error}</p>
                    ) : screenshotUrl ? (
                      <Image
                        src={screenshotUrl}
                        alt="Screenshot"
                        className="max-w-full max-h-full object-contain"
                        width={viewport.width}
                        height={viewport.height}
                      />
                    ) : (
                      <p className="text-slate-400">
                        Screenshot will appear here
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
