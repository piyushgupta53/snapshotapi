"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-persian-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SnapshotPro</h1>
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="bg-white text-persian-blue-500 px-4 py-2 rounded-lg hover:bg-persian-blue-100 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Capture Web Pages with Ease
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            High-quality screenshots for developers and professionals
          </p>
          <button
            className="bg-persian-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-persian-blue-600 transition duration-300"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Try It Now
          </button>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Powerful API for Developers
            </h3>
            <p className="text-gray-600 mb-4">
              Integrate our screenshot capture functionality directly into your
              applications with our easy-to-use API.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>RESTful API</li>
              <li>Multiple programming language support</li>
              <li>Comprehensive documentation</li>
            </ul>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            {/* Placeholder for API code snippet */}
            <pre className="text-sm overflow-x-auto">
              <code>
                {`
POST /api/capture
{
  "url": "https://example.com",
  "options": {
    "fullPage": true,
    "width": 1920,
    "height": 1080
  }
}
                `}
              </code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HD Quality",
                description:
                  "Capture crystal-clear screenshots in high definition",
              },
              {
                title: "Full Page Capture",
                description:
                  "Snap entire web pages, including content below the fold",
              },
              {
                title: "Continuous Scroll",
                description: "Seamlessly capture long-scrolling pages",
              },
              {
                title: "Custom Dimensions",
                description:
                  "Adjust width and height to your exact specifications",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-persian-blue-500 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Try Our Playground
          </h3>
          <p className="text-gray-600 mb-6">
            Experiment with our screenshot tool right in your browser
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            {/* Placeholder for interactive playground */}
            <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Interactive Playground</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Snapshot Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
