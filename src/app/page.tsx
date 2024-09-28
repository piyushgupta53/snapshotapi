"use client";

import { signIn } from "next-auth/react";
import { Play, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-persian-blue-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SnapshotPro API</h1>
          <nav>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
          </nav>
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

        <section className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-64 bg-gray-200 rounded">
              <Play size={48} className="text-persian-blue-500" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Social Proof
          </h3>
          <div className="flex justify-between">
            {["Supafast", "Supafast", "Supafast", "Supafast"].map(
              (company, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  {company}
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Old Way vs New Way
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-100 p-4 rounded">
              <h4 className="font-semibold mb-2">Old Way</h4>
              <ul className="list-disc list-inside">
                <li>Pain Point 1</li>
                <li>Pain Point 2</li>
                <li>Pain Point 3</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h4 className="font-semibold mb-2">New Way</h4>
              <ul className="list-disc list-inside">
                <li>Solution 1</li>
                <li>Solution 2</li>
                <li>Solution 3</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Benefit 1", "Benefit 2", "Benefit 3"].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-persian-blue-500 mb-2">
                  {benefit}
                </h4>
                <p className="text-gray-600">Subheading</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How it works?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Step 1", "Step 2", "Step 3"].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h4 className="text-xl font-semibold text-persian-blue-500 mb-2">
                  {step}
                </h4>
                <p className="text-gray-600">Subheading</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "$9",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              },
              {
                name: "Pro",
                price: "$29",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              },
              {
                name: "Enterprise",
                price: "$99",
                features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
              },
            ].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-persian-blue-500 mb-2">
                  {plan.name}
                </h4>
                <p className="text-3xl font-bold mb-4">
                  {plan.price}
                  <span className="text-sm font-normal">/mo</span>
                </p>
                <ul className="mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-persian-blue-500 text-white px-4 py-2 rounded-lg hover:bg-persian-blue-600 transition duration-300">
                  CTA
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Add FAQ content here */}
          </div>
        </section>

        <section className="text-center">
          <button
            className="bg-persian-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-persian-blue-600 transition duration-300"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Get Started
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 Snapshot Pro API. All rights reserved.</p>
          <nav>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
            <a href="#" className="text-white mx-2">
              Link
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
