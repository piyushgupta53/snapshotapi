import { Gamepad2, KeyRound, LayoutDashboard } from "lucide-react";

export default function SideNav() {
  return (
    <div className="w-60 h-screen bg-gray-100">
      <div className="flex flex-col p-4">
        <div className="mb-10">
          <h1 className=" text-xl font-semibold">Screenshot</h1>
        </div>

        <div className="space-y-2">
          <div className="bg-purple-100/80 p-2 rounded-md hover:cursor-pointer">
            <ul className="text-purple-600 font-medium flex gap-2 items-center">
              <LayoutDashboard />
              Dashboard
            </ul>
          </div>
          <div className="p-2 rounded-md hover:cursor-pointer">
            <ul className="text-gray-600 font-medium flex gap-2 items-center">
              <KeyRound />
              API Keys
            </ul>
          </div>
          <div className="p-2 rounded-md hover:cursor-pointer">
            <ul className="text-gray-600 font-medium flex gap-2 items-center">
              <Gamepad2 />
              Playground
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
