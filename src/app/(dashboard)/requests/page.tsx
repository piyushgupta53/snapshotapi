import React from "react";

// Sample data for the table
const sampleRequests = [
  {
    status: "Completed",
    imageType: "Portrait",
    url: "https://example.com/image1.jpg",
    timestamp: "2023-04-15 14:30:22",
  },
  {
    status: "Processing",
    imageType: "Landscape",
    url: "https://example.com/image2.jpg",
    timestamp: "2023-04-15 15:45:10",
  },
  {
    status: "Failed",
    imageType: "Abstract",
    url: "https://example.com/image3.jpg",
    timestamp: "2023-04-14 09:12:55",
  },
  {
    status: "Completed",
    imageType: "Still Life",
    url: "https://example.com/image4.jpg",
    timestamp: "2023-04-13 18:20:33",
  },
];

export default function Requests() {
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
                  <th className="pb-2 font-semibold">Type</th>
                  <th className="pb-2 font-semibold">URL</th>
                  <th className="pb-2 font-semibold">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {sampleRequests.map((request, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${
                          request.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : request.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="py-3">{request.imageType}</td>
                    <td className="py-3">
                      <a
                        href={request.url}
                        className="text-blue-600 hover:underline inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        URL <span className="ml-1">&#8599;</span>
                      </a>
                    </td>
                    <td className="py-3 text-gray-600">{request.timestamp}</td>
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
