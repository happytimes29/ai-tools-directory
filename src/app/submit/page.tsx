import Link from "next/link";

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Submit an AI Tool 📮
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm p-8">
        <p className="text-gray-600 mb-8 text-center">
          Want to add your AI tool to our directory? Here's how:
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check if already exists</h3>
              <p className="text-gray-600 text-sm">Browse our directory to ensure your tool isn't already listed.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Prepare information</h3>
              <p className="text-gray-600 text-sm">Tool name, URL, description, category, and pricing.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Send us email</h3>
              <p className="text-gray-600 text-sm">Email us with your tool information.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center">
          <h3 className="font-bold text-lg text-gray-900 mb-2">
            📧 Submit Your Tool
          </h3>
          <p className="text-gray-600 mb-4">
            Send us an email with your AI tool details
          </p>
          <a 
            href="mailto:nightdeale2025@gmail.com?subject=AI Tool Submission&body=Hi,%0A%0AI would like to submit my AI tool to your directory.%0A%0ATool Name:%0AURL:%0ADescription:%0ACategory:%0APricing:%0A%0AThank you!"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ✉️ Send Email
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Or email us directly: <span className="font-mono text-blue-600">nightdeale2025@gmail.com</span>
          </p>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>⏱️ Review Time:</strong> We review all submissions within 3-5 business days.
            Tools must be legitimate AI services with working websites.
          </p>
        </div>
      </div>
    </div>
  );
}
