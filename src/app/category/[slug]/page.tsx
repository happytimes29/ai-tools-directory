import Link from "next/link";
import { notFound } from "next/navigation";

const categoriesData: Record<string, { name: string; icon: string; description: string }> = {
  "llm-chat": { name: "LLM/Chat", icon: "💬", description: "Large Language Models and AI Chatbots" },
  "image-generation": { name: "Image Generation", icon: "🎨", description: "AI-powered image creation tools" },
  "video-generation": { name: "Video Generation", icon: "🎬", description: "AI video creation and editing" },
  "ai-writing": { name: "AI Writing", icon: "✍️", description: "AI copywriting and content generation" },
  "coding": { name: "Coding", icon: "💻", description: "AI-powered developer tools" },
  "music-audio": { name: "Music/Audio", icon: "🎵", description: "AI music and voice generation" },
  "design": { name: "Design", icon: "🎭", description: "AI design and creative tools" },
  "search": { name: "Search", icon: "🔍", description: "AI-powered search engines" },
  "productivity": { name: "Productivity", icon: "⚡", description: "AI productivity tools" },
  "learning": { name: "Learning", icon: "📚", description: "AI learning and education tools" },
};

const allTools: Record<string, Array<{ name: string; url: string; description: string; pricing: string }>> = {
  "llm-chat": [
    { name: "ChatGPT", url: "https://chat.openai.com", description: "OpenAI's conversational AI", pricing: "Freemium" },
    { name: "Claude", url: "https://claude.ai", description: "Anthropic's AI assistant", pricing: "Freemium" },
    { name: "Gemini", url: "https://gemini.google.com", description: "Google's AI assistant", pricing: "Free" },
    { name: "Grok", url: "https://grok.x.com", description: "xAI's chatbot", pricing: "Premium" },
    { name: "Mistral", url: "https://chat.mistral.ai", description: "Mistral AI assistant", pricing: "Freemium" },
    { name: "Poe", url: "https://poe.com", description: "Multiple AI chatbots in one", pricing: "Freemium" },
    { name: "Claude Pro", url: "https://claude.ai/pro", description: "Claude premium version", pricing: "$20/mo" },
    { name: "ChatGPT Plus", url: "https://chat.openai.com", description: "GPT-4 premium version", pricing: "$20/mo" },
    { name: "YouChat", url: "https://you.com", description: "AI search assistant", pricing: "Free" },
    { name: "Llama", url: "https://ai.meta.com/llama/", description: "Meta's open source LLM", pricing: "Free" },
  ],
  "image-generation": [
    { name: "Midjourney", url: "https://www.midjourney.com", description: "AI image generation", pricing: "$10/mo" },
    { name: "DALL-E", url: "https://openai.com/dall-e", description: "OpenAI image generator", pricing: "Pay-as-you-go" },
    { name: "Stable Diffusion", url: "https://stability.ai", description: "Open source image AI", pricing: "Free" },
    { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe AI creative tools", pricing: "Freemium" },
    { name: "Leonardo AI", url: "https://leonardo.ai", description: "Free AI image generator", pricing: "Free" },
    { name: "Ideogram", url: "https://ideogram.ai", description: "Text-to-image AI", pricing: "Freemium" },
    { name: "Flux", url: "https://flux.ai", description: "AI image generation", pricing: "Freemium" },
    { name: "Recraft", url: "https://recraft.ai", description: "AI design and image", pricing: "Free" },
    { name: "ImageFX", url: "https://imagefx.google.com", description: "Google AI image tool", pricing: "Free" },
    { name: "Copilot Image", url: "https://copilot.microsoft.com/images", description: "Microsoft AI images", pricing: "Free" },
  ],
  "video-generation": [
    { name: "Runway", url: "https://runwayml.com", description: "AI creative tools", pricing: "Freemium" },
    { name: "Pika", url: "https://pika.art", description: "AI video generation", pricing: "Freemium" },
    { name: "Luma AI", url: "https://lumalabs.ai", description: "AI 3D and video", pricing: "Freemium" },
    { name: "Sora", url: "https://openai.com/sora", description: "OpenAI text-to-video", pricing: "Waitlist" },
    { name: "Kling AI", url: "https://klingai.com", description: "Kuaishou AI video", pricing: "Freemium" },
    { name: "Haiper", url: "https://haiper.ai", description: "AI video generation", pricing: "Free" },
    { name: "Pika Labs", url: "https://pika.art", description: "AI video creation", pricing: "Freemium" },
    { name: "Runway Gen-3", url: "https://runwayml.com", description: "AI video generation", pricing: "$15/mo" },
    { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", description: "AI video from images", pricing: "Freemium" },
    { name: "Meta Movie Gen", url: "https://ai.meta.com/movie-gen/", description: "Meta AI video", pricing: "Waitlist" },
  ],
  "ai-writing": [
    { name: "Jasper", url: "https://jasper.ai", description: "AI copywriting", pricing: "$40/mo" },
    { name: "Copy.ai", url: "https://copy.ai", description: "AI content generator", pricing: "Freemium" },
    { name: "Writesonic", url: "https://writesonic.com", description: "AI writing assistant", pricing: "Freemium" },
    { name: "Rytr", url: "https://rytr.me", description: "AI writing tool", pricing: "Freemium" },
    { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing", pricing: "Freemium" },
    { name: "Notion AI", url: "https://notion.so/product/ai", description: "Notion AI assistant", pricing: "$10/mo" },
    { name: "Grammarly", url: "https://grammarly.com", description: "AI grammar checker", pricing: "Freemium" },
    { name: "Wordtune", url: "https://wordtune.com", description: "AI sentence rewriter", pricing: "Freemium" },
    { name: "Sudowrite", url: "https://sudowrite.com", description: "AI fiction writer", pricing: "$19/mo" },
    { name: "Compose.ai", url: "https://compose.ai", description: "AI writing assistant", pricing: "Free" },
  ],
  "coding": [
    { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI code completion", pricing: "$10/mo" },
    { name: "Cursor", url: "https://cursor.sh", description: "AI-first IDE", pricing: "Freemium" },
    { name: "CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", description: "AWS AI code", pricing: "Free" },
    { name: "Tabnine", url: "https://tabnine.com", description: "AI code completion", pricing: "Freemium" },
    { name: "Replit AI", url: "https://replit.com", description: "AI coding platform", pricing: "Freemium" },
    { name: "Mintlify", url: "https://mintlify.com", description: "AI documentation", pricing: "Freemium" },
    { name: "Codeium", url: "https://codeium.com", description: "AI code acceleration", pricing: "Free" },
    { name: "v0", url: "https://v0.dev", description: "Vercel AI UI generator", pricing: "Free" },
    { name: "Sourcegraph Cody", url: "https://sourcegraph.com/cody", description: "AI code analysis", pricing: "Freemium" },
    { name: "AskCodi", url: "https://askcodi.com", description: "AI coding assistant", pricing: "Freemium" },
  ],
  "music-audio": [
    { name: "Suno", url: "https://suno.ai", description: "AI music generation", pricing: "$10/mo" },
    { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice synthesis", pricing: "Freemium" },
    { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator", pricing: "$29/mo" },
    { name: "WellSaid Labs", url: "https://wellsaidlabs.com", description: "AI voiceover", pricing: "$49/mo" },
    { name: "Descript", url: "https://descript.com", description: "AI audio/video editor", pricing: "Freemium" },
    { name: "AIVA", url: "https://aiva.ai", description: "AI music composer", pricing: "Freemium" },
    { name: "Boomy", url: "https://boomy.com", description: "AI music creation", pricing: "Free" },
    { name: "Lalals", url: "https://lalals.com", description: "AI voice changer", pricing: "Freemium" },
    { name: "Respeecher", url: "https://respeecher.com", description: "AI voice cloning", pricing: "Premium" },
    { name: "Podcastle", url: "https://podcastle.ai", description: "AI podcast tool", pricing: "Freemium" },
  ],
  "design": [
    { name: "Canva AI", url: "https://canva.com", description: "AI design tool", pricing: "Freemium" },
    { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI design assistant", pricing: "Free" },
    { name: "Looka", url: "https://looka.com", description: "AI logo maker", pricing: "$20" },
    { name: "Brandmark", url: "https://brandmark.io", description: "AI brand designer", pricing: "$30" },
    { name: "Flair AI", url: "https://flair.ai", description: "AI product photography", pricing: "$15/mo" },
    { name: "Booth AI", url: "https://booth.ai", description: "AI product images", pricing: "$19/mo" },
    { name: "Uizard", url: "https://uizard.com", description: "AI UI designer", pricing: "Freemium" },
    { name: "Galileo AI", url: "https://galileo.ai", description: "AI interface design", pricing: "Waitlist" },
    { name: "Designs.ai", url: "https://designs.ai", description: "AI design platform", pricing: "$29/mo" },
    { name: "Adobe Express", url: "https://express.adobe.com", description: "AI creative tool", pricing: "Free" },
  ],
  "search": [
    { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI answer engine", pricing: "Freemium" },
    { name: "Arc Search", url: "https://arc.net", description: "AI browser search", pricing: "Free" },
    { name: "You.com", url: "https://you.com", description: "AI-powered search", pricing: "Freemium" },
    { name: "Neeva", url: "https://neeva.com", description: "Ad-free AI search", pricing: "$5/mo" },
    { name: "Komo AI", url: "https://komo.ai", description: "AI search engine", pricing: "Free" },
    { name: "Andisearch", url: "https://andisearch.com", description: "AI search assistant", pricing: "Free" },
    { name: "iAsk", url: "https://iask.ai", description: "AI Q&A search", pricing: "Free" },
    { name: "Phind", url: "https://phind.com", description: "Developer AI search", pricing: "Free" },
    { name: "Brave Summarizer", url: "https://brave.com", description: "AI search summary", pricing: "Free" },
    { name: "Llamafile", url: "https://llamafile.ai", description: "Local AI search", pricing: "Free" },
  ],
  "productivity": [
    { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting notes", pricing: "Freemium" },
    { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting assistant", pricing: "Freemium" },
    { name: "Mem.ai", url: "https://mem.ai", description: "AI note-taking", pricing: "Freemium" },
    { name: "Todoist AI", url: "https://todoist.com", description: "AI task manager", pricing: "$5/mo" },
    { name: "Raycast AI", url: "https://raycast.com", description: "Mac AI assistant", pricing: "Free" },
    { name: "Craft.do", url: "https://craft.do", description: "AI document tool", pricing: "Freemium" },
    { name: "tl;dr", url: "https://tdr.io", description: "AI web summarizer", pricing: "Free" },
    { name: "Notion", url: "https://notion.so", description: "AI workspace", pricing: "$10/mo" },
    { name: "ClickUp AI", url: "https://clickup.com", description: "AI productivity", pricing: "$7/mo" },
    { name: "Asana AI", url: "https://asana.com", description: "AI project management", pricing: "$10/mo" },
  ],
  "learning": [
    { name: "Khanmigo", url: "https://khanacademy.org", description: "AI tutor", pricing: "$15/mo" },
    { name: "Duolingo Max", url: "https://duolingo.com", description: "AI language tutor", pricing: "$12.99/mo" },
    { name: "Quizlet", url: "https://quizlet.com", description: "AI learning tool", pricing: "Freemium" },
    { name: "Chegg", url: "https://chegg.com", description: "AI homework help", pricing: "$15.95/mo" },
    { name: "Socratic", url: "https://socratic.org", description: "Google AI tutor", pricing: "Free" },
    { name: "Wolfram Alpha", url: "https://wolframalpha.com", description: "AI computation", pricing: "$5/mo" },
    { name: "ResearchRabbit", url: "https://researchrabbit.ai", description: "AI research tool", pricing: "Freemium" },
    { name: "Elicit", url: "https://elicit.org", description: "AI research search", pricing: "Free" },
    { name: "Consensus", url: "https://consensus.app", description: "AI academic search", pricing: "Freemium" },
    { name: "Scite", url: "https://scite.ai", description: "AI citation analysis", pricing: "Freemium" },
  ],
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoriesData[slug];
  
  if (!category) {
    notFound();
  }
  
  const tools = allTools[slug] || [];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{category.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name}</h1>
        <p className="text-xl text-gray-600">{category.description}</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
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
            <p className="text-gray-600 text-sm">{tool.description}</p>
          </a>
        ))}
      </div>
      
      {tools.length === 0 && (
        <p className="text-center text-gray-500">No tools found in this category.</p>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(categoriesData).map((slug) => ({ slug }));
}
