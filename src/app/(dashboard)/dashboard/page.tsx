"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProgressCounter = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Total Requests</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {current} / {total} requests ({percentage}%)
      </p>
    </div>
  );
};

const data = [
  { day: "Mon", requests: 20 },
  { day: "Tue", requests: 100 },
  { day: "Wed", requests: 150 },
  { day: "Thu", requests: 80 },
  { day: "Fri", requests: 170 },
  { day: "Sat", requests: 50 },
  { day: "Sun", requests: 30 },
];

const DailyConsumptionChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip animationDuration={800} />
          <Bar dataKey="requests" fill="#4273ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default function Dashboard() {
  const totalRequests = 100; // Example total
  const currentRequests = 6;
  return (
    <>
      <div className="sm:pl-60 min-h-screen">
        <div className="px-8 py-20 w-full">
          <h1 className="text-lg font-semibold">Dashboard Page</h1>

          <div className="mt-8">
            <ProgressCounter current={currentRequests} total={totalRequests} />
          </div>

          <div className="mt-8 border p-4 rounded-lg">
            <DailyConsumptionChart />
          </div>
        </div>
      </div>
    </>
  );
}
