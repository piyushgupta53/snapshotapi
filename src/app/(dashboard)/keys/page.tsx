import { Copy, Eye } from "lucide-react";

export default function Keys() {
  return (
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
                type="password"
                value="APIKeyHere" // ! change this
              />

              <button className="border border-slate-200 rounded-lg px-3 hover:bg-gray-100">
                <Eye />
              </button>

              <button className="border border-slate-200 rounded-lg px-3 hover:bg-gray-100">
                <Copy />
              </button>

              <button className="bg-red-400 px-2 py-2 rounded-lg">
                <p className="text-white font-medium">Regenerate</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
