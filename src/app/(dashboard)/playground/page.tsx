import { Fullscreen } from "lucide-react";

export default function Playground() {
  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="px-8 py-20 w-full">
        <h1 className="font-bold text-lg">Playground</h1>

        <div className="mt-10">
          <div className="flex flex-col gap-2">
            <label>URL</label>
            <input
              type="url"
              placeholder="https://stripe.com"
              className="border max-w-4xl border-slate-200 rounded-lg p-2 focus:outline-none focus:border-purple-600"
            />
            <span className="text-sm text-slate-500">
              Any website that you want to take screenshot of.
            </span>

            <button className="bg-persian-blue-500 max-w-fit rounded-lg px-2 py-2 hover:bg-persian-blue-400">
              <p className="text-white flex gap-2">
                <Fullscreen />
                Screenshot
              </p>
            </button>

            <div className="mt-8 max-w-4xl">
              <h2 className="mb-2">Screenshot Preview</h2>
              <div className="border border-slate-200 rounded-lg p-4 bg-gray-50">
                <div className="aspect-video w-full bg-white flex items-center justify-center">
                  <p className="text-slate-400">Screenshot will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
