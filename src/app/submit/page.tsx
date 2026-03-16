import Link from "next/link";

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Submit an AI Tool
      </h1>
      
      <div className="bg-white rounded-xl shadow-sm p-8">
        <p className="text-gray-600 mb-8 text-center">
          Want to add your AI tool to our directory? Here's how:
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Check if already exists</h3>
              <p className="text-gray-600 text-sm">Browse our directory to ensure your tool isn't already listed.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Prepare information</h3>
              <p className="text-gray-600 text-sm">You'll need: Tool name, URL, description, category, and pricing.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Contact us</h3>
              <p className="text-gray-600 text-sm">Reach out to us directly to submit your tool for review.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> We review all submissions to ensure quality and relevance.
            Tools must be legitimate AI services with working websites.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <a
            href="mailto:contact@example.com?subject=AI Tool Submission"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Contact to Submit
          </a>
        </div>
      </div>
    </div>
  );
}
