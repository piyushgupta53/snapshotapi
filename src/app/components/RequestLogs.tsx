import { extractDomain, formatDate } from "@/lib/utils";
import { Screenshot } from "@prisma/client";
import React from "react";

interface RequestLogsProps {
  requests: Screenshot[];
}

export default function RequestLogs({ requests }: RequestLogsProps) {
  return (
    <div className="sm:pl-60 min-h-screen">
      <div className="px-8 py-20 w-full">
        <h1 className="text-lg font-semibold mb-8">Requests</h1>
        <div className="border rounded-lg p-4 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-left">
                <tr className="border-b">
                  <th className="pb-2 font-semibold">Status</th>
                  <th className="pb-2 font-semibold">Host</th>
                  <th className="pb-2 font-semibold">URL</th>
                  <th className="pb-2 font-semibold">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${"bg-green-100 text-green-800"}`}
                      >
                        Completed
                      </span>
                    </td>

                    <td className="py-3">{extractDomain(request.url)}</td>
                    <td className="py-3">
                      <a
                        href={request.s3Url}
                        className="text-blue-600 hover:underline inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        URL <span className="ml-1">&#8599;</span>
                      </a>
                    </td>
                    <td className="py-3 text-gray-600">
                      {formatDate(request.createdAt.toLocaleString())}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
