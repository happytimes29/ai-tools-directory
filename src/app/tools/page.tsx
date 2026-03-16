import Link from "next/link";

const allTools = [
  // ============ LLM/Chat ============
  { name: "ChatGPT", url: "https://chat.openai.com", description: "OpenAI's conversational AI", category: "llm-chat", pricing: "Freemium" },
  { name: "Claude", url: "https://claude.ai", description: "Anthropic's AI assistant", category: "llm-chat", pricing: "Freemium" },
  { name: "Gemini", url: "https://gemini.google.com", description: "Google's AI assistant", category: "llm-chat", pricing: "Free" },
  { name: "Grok", url: "https://grok.x.com", description: "xAI's chatbot", category: "llm-chat", pricing: "Premium" },
  { name: "Mistral", url: "https://chat.mistral.ai", description: "Mistral AI assistant", category: "llm-chat", pricing: "Freemium" },
  { name: "文心一言", url: "https://yiyan.baidu.com", description: "百度 AI 對話助手", category: "llm-chat", pricing: "Free" },
  { name: "通義千問", url: "https://tongyi.aliyun.com", description: "阿里雲 AI 助手", category: "llm-chat", pricing: "Free" },
  { name: "智譜清言", url: "https://www.zhipuai.cn", description: "智譜 AI 對話助手", category: "llm-chat", pricing: "Free" },
  { name: "Kimi", url: "https://kimi.moonshot.cn", description: "月之暗面 AI 助手", category: "llm-chat", pricing: "Free" },
  { name: "DeepSeek", url: "https://www.deepseek.com", description: "深度求索 AI", category: "llm-chat", pricing: "Freemium" },
  
  // ============ Image Generation ============
  { name: "Midjourney", url: "https://www.midjourney.com", description: "AI image generation", category: "image-generation", pricing: "$10/mo" },
  { name: "DALL-E", url: "https://openai.com/dall-e", description: "OpenAI image generator", category: "image-generation", pricing: "Pay-as-you-go" },
  { name: "Stable Diffusion", url: "https://stability.ai", description: "Open source image AI", category: "image-generation", pricing: "Free" },
  { name: "Adobe Firefly", url: "https://firefly.adobe.com", description: "Adobe AI creative", category: "image-generation", pricing: "Freemium" },
  { name: "Leonardo AI", url: "https://leonardo.ai", description: "Free AI image generator", category: "image-generation", pricing: "Free" },
  { name: "Ideogram", url: "https://ideogram.ai", description: "Text-to-image AI", category: "image-generation", pricing: "Freemium" },
  { name: "Liblib AI", url: "https://www.liblib.ai", description: "哩布哩布 AI 圖片生成", category: "image-generation", pricing: "Freemium" },
  { name: "堆萊AI", url: "https://www.duitai.com", description: "堆萊 AI 圖片生成", category: "image-generation", pricing: "Freemium" },
  { name: "秒秒藝術", url: "https://www.miaomiaoyishu.com", description: "字節跳動 AI 繪畫", category: "image-generation", pricing: "Freemium" },
  { name: "通義萬相", url: "https://tongyi.aliyun.com/wanxiang", description: "阿里 AI 圖片生成", category: "image-generation", pricing: "Free" },
  
  // ============ Video Generation ============
  { name: "Runway", url: "https://runwayml.com", description: "AI creative tools", category: "video-generation", pricing: "Freemium" },
  { name: "Pika", url: "https://pika.art", description: "AI video generation", category: "video-generation", pricing: "Freemium" },
  { name: "Luma AI", url: "https://lumalabs.ai", description: "AI 3D & video", category: "video-generation", pricing: "Freemium" },
  { name: "Sora", url: "https://openai.com/sora", description: "OpenAI video AI", category: "video-generation", pricing: "Waitlist" },
  { name: "可靈AI", url: "https://klingai.com", description: "快手 AI 影片生成", category: "video-generation", pricing: "Freemium" },
  { name: "海螺AI", url: "https://hailuoai.com", description: "位元組跳動 AI 影片", category: "video-generation", pricing: "Freemium" },
  { name: "Runway Gen", url: "https://runwayml.com/gen", description: "AI video generation", category: "video-generation", pricing: "$15/mo" },
  { name: "Pika Labs", url: "https://pika.art", description: "AI video creation", category: "video-generation", pricing: "Freemium" },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", description: "AI video from images", category: "video-generation", pricing: "Freemium" },
  { name: "腾讯智影", url: "https://zenvideo.qq.com", description: "騰訊 AI 影片工具", category: "video-generation", pricing: "Freemium" },
  
  // ============ AI Writing ============
  { name: "Jasper", url: "https://jasper.ai", description: "AI copywriting", category: "ai-writing", pricing: "$40/mo" },
  { name: "Copy.ai", url: "https://copy.ai", description: "AI content generator", category: "ai-writing", pricing: "Freemium" },
  { name: "Writesonic", url: "https://writesonic.com", description: "AI writing assistant", category: "ai-writing", pricing: "Freemium" },
  { name: "Rytr", url: "https://rytr.me", description: "AI writing tool", category: "ai-writing", pricing: "Freemium" },
  { name: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing", category: "ai-writing", pricing: "Freemium" },
  { name: "Notion AI", url: "https://notion.so/product/ai", description: "Notion AI assistant", category: "ai-writing", pricing: "$10/mo" },
  { name: "Grammarly", url: "https://grammarly.com", description: "AI grammar checker", category: "ai-writing", pricing: "Freemium" },
  { name: "秘塔寫作貓", url: "https://xiezuocat.com", description: "秘塔科技 AI 寫作", category: "ai-writing", pricing: "Freemium" },
  { name: "筆神作文", url: "https://www.bishen365.com", description: "AI 作文助手", category: "ai-writing", pricing: "Freemium" },
  { name: "Effidit", url: "https://effidit.qq.com", description: "騰訊 AI 寫作助手", category: "ai-writing", pricing: "Free" },
  
  // ============ Coding ============
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI code completion", category: "coding", pricing: "$10/mo" },
  { name: "Cursor", url: "https://cursor.sh", description: "AI-first IDE", category: "coding", pricing: "Freemium" },
  { name: "CodeWhisperer", url: "https://aws.amazon.com/codewhisperer", description: "AWS AI code", category: "coding", pricing: "Free" },
  { name: "Tabnine", url: "https://tabnine.com", description: "AI code completion", category: "coding", pricing: "Freemium" },
  { name: "Replit AI", url: "https://replit.com", description: "AI coding platform", category: "coding", pricing: "Freemium" },
  { name: "Mintlify", url: "https://mintlify.com", description: "AI documentation", category: "coding", pricing: "Freemium" },
  { name: "Codeium", url: "https://codeium.com", description: "AI code acceleration", category: "coding", pricing: "Free" },
  { name: "v0", url: "https://v0.dev", description: "Vercel AI UI generator", category: "coding", pricing: "Free" },
  { name: "通義靈碼", url: "https://tongyi.aliyun.com/code", description: "阿里雲 AI 編碼助手", category: "coding", pricing: "Free" },
  { name: "文心快碼", url: "https://comate.baidu.com", description: "百度 AI 編碼助手", category: "coding", pricing: "Free" },
  
  // ============ Music/Audio ============
  { name: "Suno", url: "https://suno.ai", description: "AI music generation", category: "music-audio", pricing: "$10/mo" },
  { name: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice synthesis", category: "music-audio", pricing: "Freemium" },
  { name: "Murf AI", url: "https://murf.ai", description: "AI voice generator", category: "music-audio", pricing: "$29/mo" },
  { name: "WellSaid Labs", url: "https://wellsaidlabs.com", description: "AI voiceover", category: "music-audio", pricing: "$49/mo" },
  { name: "Descript", url: "https://descript.com", description: "AI audio/video editor", category: "music-audio", pricing: "Freemium" },
  { name: "AIVA", url: "https://aiva.ai", description: "AI music composer", category: "music-audio", pricing: "Freemium" },
  { name: "Boomy", url: "https://boomy.com", description: "AI music creation", category: "music-audio", pricing: "Free" },
  { name: "天工AI音樂", url: "https://www.tiangong.cn", description: "昆侖萬維 AI 音樂", category: "music-audio", pricing: "Freemium" },
  { name: "網易天音", url: "https://music.163.com", description: "網易 AI 音樂製作", category: "music-audio", pricing: "Freemium" },
  { name: "訊飛智作", url: "https://zuo.xfyun.cn", description: "科大訊飛 AI 語音", category: "music-audio", pricing: "Freemium" },
  
  // ============ Design ============
  { name: "Canva AI", url: "https://canva.com", description: "AI design tool", category: "design", pricing: "Freemium" },
  { name: "Microsoft Designer", url: "https://designer.microsoft.com", description: "AI design assistant", category: "design", pricing: "Free" },
  { name: "Looka", url: "https://looka.com", description: "AI logo maker", category: "design", pricing: "$20" },
  { name: "Brandmark", url: "https://brandmark.io", description: "AI brand designer", category: "design", pricing: "$30" },
  { name: "Flair AI", url: "https://flair.ai", description: "AI product photography", category: "design", pricing: "$15/mo" },
  { name: "Booth AI", url: "https://booth.ai", description: "AI product images", category: "design", pricing: "$19/mo" },
  { name: "Uizard", url: "https://uizard.com", description: "AI UI designer", category: "design", pricing: "Freemium" },
  { name: "Mastergo AI", url: "https://mastergo.com", description: "Mastergo AI 設計", category: "design", pricing: "Freemium" },
  { name: "即時AI", url: "https://js.design", description: "即時設計 AI", category: "design", pricing: "Freemium" },
  { name: "圖怪創意", url: "https://www.ishiguang.com", description: "鹿斑馬 AI 設計", category: "design", pricing: "Freemium" },
  
  // ============ Search ============
  { name: "Perplexity", url: "https://www.perplexity.ai", description: "AI answer engine", category: "search", pricing: "Freemium" },
  { name: "Arc Search", url: "https://arc.net", description: "AI browser search", category: "search", pricing: "Free" },
  { name: "You.com", url: "https://you.com", description: "AI-powered search", category: "search", pricing: "Freemium" },
  { name: "天工AI搜索", url: "https://www.tiangong.cn", description: "昆侖萬維 AI 搜索", category: "search", pricing: "Free" },
  { name: "秘塔AI搜索", url: "https://metaso.cn", description: "秘塔科技 AI 搜索", category: "search", pricing: "Free" },
  { name: "Komo AI", url: "https://komo.ai", description: "AI search engine", category: "search", pricing: "Free" },
  { name: "Andisearch", url: "https://andisearch.com", description: "AI search assistant", category: "search", pricing: "Free" },
  { name: "iAsk", url: "https://iask.ai", description: "AI Q&A search", category: "search", pricing: "Free" },
  { name: "Phind", url: "https://phind.com", description: "Developer AI search", category: "search", pricing: "Free" },
  { name: "Brave Summarizer", url: "https://brave.com", description: "AI search summary", category: "search", pricing: "Free" },
  
  // ============ Productivity ============
  { name: "Otter.ai", url: "https://otter.ai", description: "AI meeting notes", category: "productivity", pricing: "Freemium" },
  { name: "Fireflies.ai", url: "https://fireflies.ai", description: "AI meeting assistant", category: "productivity", pricing: "Freemium" },
  { name: "Mem.ai", url: "https://mem.ai", description: "AI note-taking", category: "productivity", pricing: "Freemium" },
  { name: "Todoist AI", url: "https://todoist.com", description: "AI task manager", category: "productivity", pricing: "$5/mo" },
  { name: "Raycast AI", url: "https://raycast.com", description: "Mac AI assistant", category: "productivity", pricing: "Free" },
  { name: "Craft.do", url: "https://craft.do", description: "AI document tool", category: "productivity", pricing: "Freemium" },
  { name: "Notion", url: "https://notion.so", description: "AI workspace", category: "productivity", pricing: "$10/mo" },
  { name: "WPS AI", url: "https://www.wps.cn", description: "金山辦公 AI", category: "productivity", pricing: "Freemium" },
  { name: "訊飛文書", url: "https://www.xfyun.cn", description: "科大訊飛 AI 文書", category: "productivity", pricing: "Freemium" },
  { name: "通義辦公", url: "https://tongyi.aliyun.com/office", description: "阿里 AI 辦公助手", category: "productivity", pricing: "Freemium" },
  
  // ============ Learning ============
  { name: "Khanmigo", url: "https://khanacademy.org", description: "AI tutor", category: "learning", pricing: "$15/mo" },
  { name: "Duolingo Max", url: "https://duolingo.com", description: "AI language tutor", category: "learning", pricing: "$12.99/mo" },
  { name: "Quizlet", url: "https://quizlet.com", description: "AI learning tool", category: "learning", pricing: "Freemium" },
  { name: "Chegg", url: "https://chegg.com", description: "AI homework help", category: "learning", pricing: "$15.95/mo" },
  { name: "Socratic", url: "https://socratic.org", description: "Google AI tutor", category: "learning", pricing: "Free" },
  { name: "Wolfram Alpha", url: "https://wolframalpha.com", description: "AI computation", category: "learning", pricing: "$5/mo" },
  { name: "ResearchRabbit", url: "https://researchrabbit.ai", description: "AI research tool", category: "learning", pricing: "Freemium" },
  { name: "Elicit", url: "https://elicit.org", description: "AI research search", category: "learning", pricing: "Free" },
  { name: "學習通", url: "https://www.xuetongx.com", description: "超星學習 AI", category: "learning", pricing: "Freemium" },
  { name: "有道AI", url: "https://ai.youdao.com", description: "網易有道 AI 學習", category: "learning", pricing: "Freemium" },
  
  // ============ More AI Tools (Chinese) ============
  { name: "悟道", url: "https://www.baai.ac.cn", description: "北京智源 AI", category: "llm-chat", pricing: "Free" },
  { name: "MOSS", url: "https://moss.fastnlp.top", description: "復旦大學 AI", category: "llm-chat", pricing: "Free" },
  { name: "階躍星辰", url: "https://www.stepfun.com", description: "階躍星辰 AI", category: "llm-chat", pricing: "Freemium" },
  { name: "MiniMax", url: "https://www.minimaxi.com", description: "MiniMax AI", category: "llm-chat", pricing: "Freemium" },
  { name: "智譜AI", url: "https://www.zhipuai.cn", description: "智譜清言企業版", category: "llm-chat", pricing: "Freemium" },
  { name: "字節跳動AI", url: "https://www.bytedance.com", description: "字節 AI 產品矩陣", category: "llm-chat", pricing: "Freemium" },
  { name: "商湯日日新", url: "https://www.sensetime.com", description: "商湯 AI 大模型", category: "llm-chat", pricing: "Freemium" },
  { name: "華為盤古", url: "https://www.huawei.com", description: "華為 AI 大模型", category: "llm-chat", pricing: "Freemium" },
  { name: "騰訊混元", url: "https://www.tencent.com", description: "騰訊 AI 大模型", category: "llm-chat", pricing: "Freemium" },
  { name: "抖音AI", url: "https://www.douyin.com", description: "抖音 AI 工具", category: "video-generation", pricing: "Freemium" },
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
                tool.pricing.includes('$') || tool.pricing.includes('¥') ? 'bg-blue-100 text-blue-700' :
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
