import Link from "next/link";

const categories = [
  { name: "LLM/Chat", icon: "💬", slug: "llm-chat", count: 10, description: "Large Language Models and AI Chatbots" },
  { name: "Image Generation", icon: "🎨", slug: "image-generation", count: 10, description: "AI-powered image creation tools" },
  { name: "Video Generation", icon: "🎬", slug: "video-generation", count: 10, description: "AI video creation and editing" },
  { name: "AI Writing", icon: "✍️", slug: "ai-writing", count: 10, description: "AI copywriting and content generation" },
  { name: "Coding", icon: "💻", slug: "coding", count: 10, description: "AI-powered developer tools" },
  { name: "Music/Audio", icon: "🎵", slug: "music-audio", count: 10, description: "AI music and voice generation" },
  { name: "Design", icon: "🎭", slug: "design", count: 10, description: "AI design and creative tools" },
  { name: "Search", icon: "🔍", slug: "search", count: 10, description: "AI-powered search engines" },
  { name: "Productivity", icon: "⚡", slug: "productivity", count: 10, description: "AI productivity tools" },
  { name: "Learning", icon: "📚", slug: "learning", count: 10, description: "AI learning and education tools" },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        All Categories
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{cat.icon}</div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary">
                  {cat.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{cat.description}</p>
                <p className="text-gray-500 text-xs mt-2">{cat.count} tools</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
