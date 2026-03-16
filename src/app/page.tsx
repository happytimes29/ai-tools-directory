import Link from "next/link";

const categories = [
  { name: "LLM/Chat", icon: "💬", count: 10, slug: "llm-chat" },
  { name: "Image Generation", icon: "🎨", count: 10, slug: "image-generation" },
  { name: "Video Generation", icon: "🎬", count: 10, slug: "video-generation" },
  { name: "AI Writing", icon: "✍️", count: 10, slug: "ai-writing" },
  { name: "Coding", icon: "💻", count: 10, slug: "coding" },
  { name: "Music/Audio", icon: "🎵", count: 10, slug: "music-audio" },
  { name: "Design", icon: "🎭", count: 10, slug: "design" },
  { name: "Search", icon: "🔍", count: 10, slug: "search" },
  { name: "Productivity", icon: "⚡", count: 10, slug: "productivity" },
  { name: "Learning", icon: "📚", count: 10, slug: "learning" },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Discover the Best <span className="text-primary">AI Tools</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A curated collection of 100+ high-quality AI tools across 10 categories.
          Find the perfect AI solution for your needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/tools" 
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Browse All Tools
          </Link>
          <Link 
            href="/submit" 
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Submit a Tool
          </Link>
        </div>
      </div>

      {/* Categories Grid */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center group"
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <h3 className="font-semibold text-gray-900 group-hover:text-primary">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-500">{cat.count} tools</p>
          </Link>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "ChatGPT", desc: "OpenAI's conversational AI", category: "LLM/Chat" },
            { name: "Midjourney", desc: "AI image generation", category: "Image" },
            { name: "Suno", desc: "AI music generation", category: "Music" },
            { name: "Claude", desc: "Anthropic's AI assistant", category: "LLM/Chat" },
            { name: "Runway", desc: "AI video creation", category: "Video" },
            { name: "Cursor", desc: "AI-powered code editor", category: "Coding" },
          ].map((tool, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{tool.desc}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
