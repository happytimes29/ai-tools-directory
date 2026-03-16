import Link from "next/link";

const allTools = [
  // LLM/Chat
  { name: "ChatGPT", url: "https://chat.openai.com", description: "OpenAI's conversational AI", category: "llm-chat", pricing: "Freemium" },
  { name: "Claude", url: "https://claude.ai", description: "Anthropic's AI assistant", category: "llm-chat", pricing: "Freemium" },
  { name: "Gemini", url: "https://gemini.google.com", description: "Google's AI assistant", category: "llm-chat", pricing: "Free" },
  { name: "Grok", url: "https://grok.x.com", description: "xAI's chatbot", category: "llm-chat", pricing: "Premium" },
  { name: "Mistral", url: "https://chat.mistral.ai", description: "Mistral AI assistant", category: "llm-chat", pricing: "Freemium" },
  { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI-powered search", category: "search", pricing: "Freemium" },
  { name: "Poe", url: "https://poe.com", description: "Multiple AI chatbots", category: "llm-chat", pricing: "Freemium" },
  { name: "YouChat", url: "https://you.com", description: "AI search assistant", category: "search", pricing: "Free" },
  { name: "Claude Pro", url: "https://claude.ai/pro", description: "Claude premium", category: "llm-chat", pricing: "$20/mo" },
  { name: "ChatGPT Plus", url: "https://chat.openai.com", description: "GPT-4 premium", category: "llm-chat", pricing: "$20/mo" },
  
  // Image Generation
  { name: "Midjourney", url: "https://www.midjourney.com", description: "AI image generation", category: "image-generation", pricing: "$10/mo" },
  { name: "DALL-E", url: "https://openai.com/dall-e", description: "OpenAI image generator", category: "image-generation", pricing: "Pay-as-you-go" },
  { name: "Stable Diffusion", url: "https://stability.ai", description: "Open source image AI", category: "image-generation", pricing: "Free" },
  { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe AI creative", category: "image-generation", pricing: "Freemium" },
  { name: "Leonardo AI", url: "https://leonardo.ai", description: "Free AI image generator", category: "image-generation", pricing: "Free" },
  { name: "Ideogram", url: "https://ideogram.ai", description: "Text-to-image AI", category: "image-generation", pricing: "Freemium" },
  { name: "Runway", url: "https://runwayml.com", description: "AI creative tools", category: "video-generation", pricing: "Freemium" },
  { name: "Pika", url: "https://pika.art", description: "AI video generation", category: "video-generation", pricing: "Freemium" },
  { name: "Luma AI", url: "https://lumalabs.ai", description: "AI 3D & video", category: "video-generation", pricing: "Freemium" },
  { name: "Sora", url: "https://openai.com/sora", description: "OpenAI video AI", category: "video-generation", pricing: "Waitlist" },
  
  // AI Writing
  { name: "Jasper", url: "https://jasper.ai", description: "AI copywriting", category: "ai-writing", pricing: "$40/mo" },
  { name: "Copy.ai", url: "https://copy.ai", description: "AI content generator", category: "ai-writing", pricing: "Freemium" },
  { name: "Writesonic", url: "https://writesonic.com", description: "AI writing assistant", category: "ai-writing", pricing: "Freemium" },
  { name: "Rytr", url: "https://rytr.me", description: "AI writing tool", category: "ai-writing", pricing: "Freemium" },
  { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing", category: "ai-writing", pricing: "Freemium" },
  { name: "Notion AI", url: "https://notion.so/product/ai", description: "Notion AI assistant", category: "ai-writing", pricing: "$10/mo" },
  { name: "Grammarly", url: "https://grammarly.com", description: "AI grammar checker", category: "ai-writing", pricing: "Freemium" },
  { name: "Wordtune", url: "https://wordtune.com", description: "AI sentence rewriter", category: "ai-writing", pricing: "Freemium" },
  { name: "Sudowrite", url: "https://sudowrite.com", description: "AI fiction writer", category: "ai-writing", pricing: "$19/mo" },
  { name: "Compose.ai", url: "https://compose.ai", description: "AI writing assistant", category: "ai-writing", pricing: "Free" },
  
  // Coding
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI code completion", category: "coding", pricing: "$10/mo" },
  { name: "Cursor", url: "https://cursor.sh", description: "AI-first IDE", category: "coding", pricing: "Freemium" },
  { name: "CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", description: "AWS AI code", category: "coding", pricing: "Free" },
  { name: "Tabnine", url: "https://tabnine.com", description: "AI code completion", category: "coding", pricing: "Freemium" },
  { name: "Replit AI", url: "https://replit.com", description: "AI coding platform", category: "coding", pricing: "Freemium" },
  { name: "Mintlify", url: "https://mintlify.com", description: "AI documentation", category: "coding", pricing: "Freemium" },
  { name: "Codeium", url: "https://codeium.com", description: "AI code acceleration", category: "coding", pricing: "Free" },
  { name: "v0", url: "https://v0.dev", description: "AI UI generator", category: "coding", pricing: "Free" },
  { name: "Sourcegraph Cody", url: "https://sourcegraph.com/cody", description: "AI code analysis", category: "coding", pricing: "Freemium" },
  { name: "AskCodi", url: "https://askcodi.com", description: "AI coding assistant", category: "coding", pricing: "Freemium" },
  
  // Music/Audio
  { name: "Suno", url: "https://suno.ai", description: "AI music generation", category: "music-audio", pricing: "$10/mo" },
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice synthesis", category: "music-audio", pricing: "Freemium" },
  { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator", category: "music-audio", pricing: "$29/mo" },
  { name: "WellSaid Labs", url: "https://wellsaidlabs.com", description: "AI voiceover", category: "music-audio", pricing: "$49/mo" },
  { name: "Descript", url: "https://descript.com", description: "AI audio/video editor", category: "music-audio", pricing: "Freemium" },
  { name: "AIVA", url: "https://aiva.ai", description: "AI music composer", category: "music-audio", pricing: "Freemium" },
  { name: "Boomy", url: "https://boomy.com", description: "AI music creation", category: "music-audio", pricing: "Free" },
  { name: "Lalals", url: "https://lalals.com", description: "AI voice changer", category: "music-audio", pricing: "Freemium" },
  { name: "Respeecher", url: "https://respeecher.com", description: "AI voice cloning", category: "music-audio", pricing: "Premium" },
  { name: "Podcast.ai", url: "https://podcast.ai", description: "AI podcast generator", category: "music-audio", pricing: "Free" },
  
  // Design
  { name: "Canva AI", url: "https://canva.com", description: "AI design tool", category: "design", pricing: "Freemium" },
  { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI design assistant", category: "design", pricing: "Free" },
  { name: "Looka", url: "https://looka.com", description: "AI logo maker", category: "design", pricing: "$20" },
  { name: "Brandmark", url: "https://brandmark.io", description: "AI brand designer", category: "design", pricing: "$30" },
  { name: "Flair AI", url: "https://flair.ai", description: "AI product photography", category: "design", pricing: "$15/mo" },
  { name: "Booth AI", url: "https://booth.ai", description: "AI product images", category: "design", pricing: "$19/mo" },
  { name: "Uizard", url: "https://uizard.com", description: "AI UI designer", category: "design", pricing: "Freemium" },
  { name: "Galileo AI", url: "https://galileo.ai", description: "AI interface design", category: "design", pricing: "Waitlist" },
  { name: "Designs.ai", url: "https://designs.ai", description: "AI design platform", category: "design", pricing: "$29/mo" },
  { name: "Adobe Express", url: "https://express.adobe.com", description: "AI creative tool", category: "design", pricing: "Free" },
  
  // Search
  { name: "Arc Search", url: "https://arc.net", description: "AI browser search", category: "search", pricing: "Free" },
  { name: "Neeva", url: "https://neeva.com", description: "Ad-free AI search", category: "search", pricing: "$5/mo" },
  { name: "Komo AI", url: "https://komo.ai", description: "AI search engine", category: "search", pricing: "Free" },
  { name: "Andisearch", url: "https://andisearch.com", description: "AI search assistant", category: "search", pricing: "Free" },
  { name: "iAsk", url: "https://iask.ai", description: "AI Q&A search", category: "search", pricing: "Free" },
  { name: "Phind", url: "https://phind.com", description: "Developer AI search", category: "search", pricing: "Free" },
  { name: "Brave Summarizer", url: "https://brave.com", description: "AI search summary", category: "search", pricing: "Free" },
  { name: "Llamafile", url: "https://llamafile.ai", description: "Local AI search", category: "search", pricing: "Free" },
  { name: "You.com", url: "https://you.com", description: "AI-powered search", category: "search", pricing: "Freemium" },
  { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI answer engine", category: "search", pricing: "Freemium" },
  
  // Productivity
  { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting notes", category: "productivity", pricing: "Freemium" },
  { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting assistant", category: "productivity", pricing: "Freemium" },
  { name: "Mem.ai", url: "https://mem.ai", description: "AI note-taking", category: "productivity", pricing: "Freemium" },
  { name: "Todoist AI", url: "https://todoist.com", description: "AI task manager", category: "productivity", pricing: "$5/mo" },
  { name: "Raycast AI", url: "https://raycast.com", description: "Mac AI assistant", category: "productivity", pricing: "Free" },
  { name: "Craft.do", url: "https://craft.do", description: "AI document tool", category: "productivity", pricing: "Freemium" },
  { name: "tl;dr", url: "https://tdr.io", description: "AI web summarizer", category: "productivity", pricing: "Free" },
  { name: "ChatGPT Slack", url: "https://claude.ai/slack", description: "Slack AI bot", category: "productivity", pricing: "Free" },
  { name: "Notion", url: "https://notion.so", description: "AI workspace", category: "productivity", pricing: "$10/mo" },
  { name: "Grammarly", url: "https://grammarly.com", description: "AI writing assistant", category: "productivity", pricing: "Freemium" },
  
  // Learning
  { name: "Khanmigo", url: "https://khanacademy.org", description: "AI tutor", category: "learning", pricing: "$15/mo" },
  { name: "Duolingo Max", url: "https://duolingo.com", description: "AI language tutor", category: "learning", pricing: "$12.99/mo" },
  { name: "Quizlet", url: "https://quizlet.com", description: "AI learning tool", category: "learning", pricing: "Freemium" },
  { name: "Chegg", url: "https://chegg.com", description: "AI homework help", category: "learning", pricing: "$15.95/mo" },
  { name: "Socratic", url: "https://socratic.org", description: "Google AI tutor", category: "learning", pricing: "Free" },
  { name: "Wolfram Alpha", url: "https://wolframalpha.com", description: "AI computation", category: "learning", pricing: "$5/mo" },
  { name: "ResearchRabbit", url: "https://researchrabbit.ai", description: "AI research tool", category: "learning", pricing: "Freemium" },
  { name: "Elicit", url: "https://elicit.org", description: "AI research search", category: "learning", pricing: "Free" },
  { name: "Consensus", url: "https://consensus.app", description: "AI academic search", category: "learning", pricing: "Freemium" },
  { name: "Scite", url: "https://scite.ai", description: "AI citation analysis", category: "learning", pricing: "Freemium" },
];

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        All AI Tools <span className="text-gray-500 text-2xl">({allTools.length})</span>
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTools.map((tool, i) => (
          <a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary">
                {tool.name}
              </h3>
              <span className={`text-xs px-2 py-1 rounded ${
                tool.pricing === 'Free' ? 'bg-green-100 text-green-700' :
                tool.pricing.includes('$') ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {tool.pricing}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tool.category}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
