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
    { name: "文心一言", url: "https://yiyan.baidu.com", description: "百度 AI 對話助手", pricing: "Free" },
    { name: "通義千問", url: "https://tongyi.aliyun.com", description: "阿里雲 AI 助手", pricing: "Free" },
    { name: "智譜清言", url: "https://www.zhipuai.cn", description: "智譜 AI 對話助手", pricing: "Free" },
    { name: "Kimi", url: "https://kimi.moonshot.cn", description: "月之暗面 AI 助手", pricing: "Free" },
    { name: "DeepSeek", url: "https://www.deepseek.com", description: "深度求索 AI", pricing: "Freemium" },
    { name: "豆包", url: "https://www.douyin.com", description: "字節跳動旗下 AI 智能助手", pricing: "Free" },
    { name: "ChandlerAi", url: "https://chandler.ai", description: "AI 聊天機器人", pricing: "Freemium" },
    { name: "悟道", url: "https://www.baai.ac.cn", description: "北京智源 AI", pricing: "Free" },
    { name: "MOSS", url: "https://moss.fastnlp.top", description: "復旦大學 AI", pricing: "Free" },
    { name: "階躍星辰", url: "https://www.stepfun.com", description: "階躍星辰 AI", pricing: "Freemium" },
    { name: "MiniMax", url: "https://www.minimaxi.com", description: "MiniMax AI", pricing: "Freemium" },
    { name: "商湯日日新", url: "https://www.sensetime.com", description: "商湯 AI 大模型", pricing: "Freemium" },
    { name: "華為盤古", url: "https://www.huawei.com", description: "華為 AI 大模型", pricing: "Freemium" },
    { name: "騰訊混元", url: "https://www.tencent.com", description: "騰訊 AI 大模型", pricing: "Freemium" },
  ],
  "image-generation": [
    { name: "Midjourney", url: "https://www.midjourney.com", description: "AI image generation", pricing: "$10/mo" },
    { name: "DALL-E", url: "https://openai.com/dall-e", description: "OpenAI image generator", pricing: "Pay-as-you-go" },
    { name: "Stable Diffusion", url: "https://stability.ai", description: "Open source image AI", pricing: "Free" },
    { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe AI creative tools", pricing: "Freemium" },
    { name: "Leonardo AI", url: "https://leonardo.ai", description: "Free AI image generator", pricing: "Free" },
    { name: "Ideogram", url: "https://ideogram.ai", description: "Text-to-image AI", pricing: "Freemium" },
    { name: "Liblib AI", url: "https://www.liblib.ai", description: "哩布哩布 AI 圖片生成", pricing: "Freemium" },
    { name: "堆萊AI", url: "https://www.duitai.com", description: "堆萊 AI 圖片生成", pricing: "Freemium" },
    { name: "秒秒藝術", url: "https://www.miaomiaoyishu.com", description: "字節跳動 AI 繪畫", pricing: "Freemium" },
    { name: "通義萬相", url: "https://tongyi.aliyun.com/wanxiang", description: "阿里 AI 圖片生成", pricing: "Free" },
    { name: "Recraft", url: "https://recraft.ai", description: "AI 圖片與設計生成", pricing: "Freemium" },
    { name: "StockCake", url: "https://stockcake.com", description: "免費正版高清圖片素材庫", pricing: "Free" },
    { name: "Deepbricks", url: "https://deepbricks.ai", description: "AI 圖片生成", pricing: "Freemium" },
  ],
  "video-generation": [
    { name: "Runway", url: "https://runwayml.com", description: "AI creative tools", pricing: "Freemium" },
    { name: "Pika", url: "https://pika.art", description: "AI video generation", pricing: "Freemium" },
    { name: "Luma AI", url: "https://lumalabs.ai", description: "AI 3D and video", pricing: "Freemium" },
    { name: "Sora", url: "https://openai.com/sora", description: "OpenAI text-to-video", pricing: "Waitlist" },
    { name: "可靈AI", url: "https://klingai.com", description: "快手 AI 影片生成", pricing: "Freemium" },
    { name: "海螺AI", url: "https://hailuoai.com", description: "位元組跳動 AI 影片", pricing: "Freemium" },
    { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", description: "AI video from images", pricing: "Freemium" },
    { name: "騰訊智影", url: "https://zenvideo.qq.com", description: "騰訊 AI 影片工具", pricing: "Freemium" },
  ],
  "ai-writing": [
    { name: "Jasper", url: "https://jasper.ai", description: "AI copywriting", pricing: "$40/mo" },
    { name: "Copy.ai", url: "https://copy.ai", description: "AI content generator", pricing: "Freemium" },
    { name: "Writesonic", url: "https://writesonic.com", description: "AI writing assistant", pricing: "Freemium" },
    { name: "Rytr", url: "https://rytr.me", description: "AI writing tool", pricing: "Freemium" },
    { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing", pricing: "Freemium" },
    { name: "Notion AI", url: "https://notion.so/product/ai", description: "Notion AI assistant", pricing: "$10/mo" },
    { name: "Grammarly", url: "https://grammarly.com", description: "AI grammar checker", pricing: "Freemium" },
    { name: "秘塔寫作貓", url: "https://xiezuocat.com", description: "秘塔科技 AI 寫作", pricing: "Freemium" },
    { name: "Effidit", url: "https://effidit.qq.com", description: "騰訊 AI 寫作助手", pricing: "Free" },
    { name: "BibiGPT", url: "https://bibigpt.co", description: "音視頻 AI 一鍵總結", pricing: "Freemium" },
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
    { name: "通義靈碼", url: "https://tongyi.aliyun.com/code", description: "阿里雲 AI 編碼助手", pricing: "Free" },
    { name: "文心快碼", url: "https://comate.baidu.com", description: "百度 AI 編碼助手", pricing: "Free" },
    { name: "Devv AI", url: "https://devv.ai", description: "開發者 AI 搜尋引擎", pricing: "Freemium" },
    { name: "UseChatGPT.AI", url: "https://usechatgpt.ai", description: "瀏覽器插件到處使用 ChatGPT", pricing: "Freemium" },
  ],
  "music-audio": [
    { name: "Suno", url: "https://suno.ai", description: "AI music generation", pricing: "$10/mo" },
    { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice synthesis", pricing: "Freemium" },
    { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator", pricing: "$29/mo" },
    { name: "WellSaid Labs", url: "https://wellsaidlabs.com", description: "AI voiceover", pricing: "$49/mo" },
    { name: "Descript", url: "https://descript.com", description: "AI audio/video editor", pricing: "Freemium" },
    { name: "AIVA", url: "https://aiva.ai", description: "AI music composer", pricing: "Freemium" },
    { name: "Boomy", url: "https://boomy.com", description: "AI music creation", pricing: "Free" },
    { name: "天工AI音樂", url: "https://www.tiangong.cn", description: "昆侖萬維 AI 音樂", pricing: "Freemium" },
    { name: "網易天音", url: "https://music.163.com", description: "網易 AI 音樂製作", pricing: "Freemium" },
    { name: "訊飛智作", url: "https://zuo.xfyun.cn", description: "科大訊飛 AI 語音", pricing: "Freemium" },
  ],
  "design": [
    { name: "Canva AI", url: "https://canva.com", description: "AI design tool", pricing: "Freemium" },
    { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI design assistant", pricing: "Free" },
    { name: "Looka", url: "https://looka.com", description: "AI logo maker", pricing: "$20" },
    { name: "Brandmark", url: "https://brandmark.io", description: "AI brand designer", pricing: "$30" },
    { name: "Flair AI", url: "https://flair.ai", description: "AI product photography", pricing: "$15/mo" },
    { name: "Booth AI", url: "https://booth.ai", description: "AI product images", pricing: "$19/mo" },
    { name: "Uizard", url: "https://uizard.com", description: "AI UI designer", pricing: "Freemium" },
    { name: "Mastergo AI", url: "https://mastergo.com", description: "Mastergo AI 設計", pricing: "Freemium" },
    { name: "即時AI", url: "https://js.design", description: "即時設計 AI", pricing: "Freemium" },
    { name: "圖怪創意", url: "https://www.ishiguang.com", description: "鹿斑馬 AI 設計", pricing: "Freemium" },
  ],
  "search": [
    { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI answer engine", pricing: "Freemium" },
    { name: "Arc Search", url: "https://arc.net", description: "AI browser search", pricing: "Free" },
    { name: "You.com", url: "https://you.com", description: "AI-powered search", pricing: "Freemium" },
    { name: "秘塔AI搜索", url: "https://metaso.cn", description: "秘塔科技 AI 搜索", pricing: "Free" },
    { name: "Genspark", url: "https://genspark.com", description: "AI 搜尋與智能代理", pricing: "Freemium" },
    { name: "天工AI搜索", url: "https://www.tiangong.cn", description: "昆侖萬維 AI 搜索", pricing: "Free" },
    { name: "Komo AI", url: "https://komo.ai", description: "AI search engine", pricing: "Free" },
    { name: "Andisearch", url: "https://andisearch.com", description: "AI search assistant", pricing: "Free" },
    { name: "iAsk", url: "https://iask.ai", description: "AI Q&A search", pricing: "Free" },
    { name: "Phind", url: "https://phind.com", description: "Developer AI search", pricing: "Free" },
    { name: "AI工具集", url: "https://ai-bot.cn", description: "1000+ AI工具集合", pricing: "Free" },
  ],
  "productivity": [
    { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting notes", pricing: "Freemium" },
    { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting assistant", pricing: "Freemium" },
    { name: "Mem.ai", url: "https://mem.ai", description: "AI note-taking", pricing: "Freemium" },
    { name: "Todoist AI", url: "https://todoist.com", description: "AI task manager", pricing: "$5/mo" },
    { name: "Raycast AI", url: "https://raycast.com", description: "Mac AI assistant", pricing: "Free" },
    { name: "Craft.do", url: "https://craft.do", description: "AI document tool", pricing: "Freemium" },
    { name: "Notion", url: "https://notion.so", description: "AI workspace", pricing: "$10/mo" },
    { name: "WPS AI", url: "https://www.wps.cn", description: "金山辦公 AI", pricing: "Freemium" },
    { name: "訊飛文書", url: "https://www.xfyun.cn", description: "科大訊飛 AI 文書", pricing: "Freemium" },
    { name: "通義辦公", url: "https://tongyi.aliyun.com/office", description: "阿里 AI 辦公助手", pricing: "Freemium" },
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
    { name: "學習通", url: "https://www.xuetongx.com", description: "超星學習 AI", pricing: "Freemium" },
    { name: "有道AI", url: "https://ai.youdao.com", description: "網易有道 AI 學習", pricing: "Freemium" },
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
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">{category.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{category.name}</h1>
        <p className="text-xl text-gray-600">{category.description}</p>
        <p className="text-gray-500 mt-2">{tools.length} tools</p>
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
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                {tool.name}
              </h3>
              <span className={`text-xs px-2 py-1 rounded ${
                tool.pricing === 'Free' ? 'bg-green-100 text-green-700' :
                tool.pricing.includes('$') || tool.pricing.includes('¥') ? 'bg-blue-100 text-blue-700' :
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
