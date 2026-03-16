import Link from "next/link";

const categories = [
  { name: "LLM/Chat", icon: "💬", count: 20, slug: "llm-chat" },
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

const popularTools = [
  { name: "ChatGPT", url: "https://chat.openai.com", desc: "OpenAI's conversational AI", category: "LLM/Chat" },
  { name: "Claude", url: "https://claude.ai", desc: "Anthropic's AI assistant", category: "LLM/Chat" },
  { name: "Midjourney", url: "https://www.midjourney.com", desc: "AI image generation", category: "Image" },
  { name: "Suno", url: "https://suno.ai", desc: "AI music generation", category: "Music" },
  { name: "Kimi", url: "https://kimi.moonshot.cn", desc: "月之暗面 AI 助手", category: "LLM/Chat" },
  { name: "文心一言", url: "https://yiyan.baidu.com", desc: "百度 AI 對話助手", category: "LLM/Chat" },
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
          A curated collection of 110+ high-quality AI tools across 10 categories.
          Find the perfect AI solution for your needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/tools" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
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
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-500">{cat.count} tools</p>
          </Link>
        ))}
      </div>

      {/* Popular Tools Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Popular Tools 🔥
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map((tool, i) => (
            <a
              key={i}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{tool.desc}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tool.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Submit Your AI Tool
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Have an AI tool you'd like to share? Submit it to our directory and reach thousands of AI enthusiasts.
        </p>
        <Link 
          href="/submit" 
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Submit Now
        </Link>
      </div>
    </div>
  );
}
