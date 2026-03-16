-- AI Tools Directory Database Schema for Supabase

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(20),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ai_tools table
CREATE TABLE IF NOT EXISTS ai_tools (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id),
  pricing VARCHAR(50),
  image_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_ai_tools_category ON ai_tools(category_id);
CREATE INDEX IF NOT EXISTS idx_ai_tools_featured ON ai_tools(featured);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- Insert categories
INSERT INTO categories (name, slug, icon, description) VALUES
  ('LLM/Chat', 'llm-chat', '💬', 'Large Language Models and AI Chatbots'),
  ('Image Generation', 'image-generation', '🎨', 'AI-powered image creation tools'),
  ('Video Generation', 'video-generation', '🎬', 'AI video creation and editing'),
  ('AI Writing', 'ai-writing', '✍️', 'AI copywriting and content generation'),
  ('Coding', 'coding', '💻', 'AI-powered developer tools'),
  ('Music/Audio', 'music-audio', '🎵', 'AI music and voice generation'),
  ('Design', 'design', '🎭', 'AI design and creative tools'),
  ('Search', 'search', '🔍', 'AI-powered search engines'),
  ('Productivity', 'productivity', '⚡', 'AI productivity tools'),
  ('Learning', 'learning', '📚', 'AI learning and education tools')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample AI tools
INSERT INTO ai_tools (name, url, description, category_id, pricing, featured) VALUES
-- LLM/Chat (category 1)
  ('ChatGPT', 'https://chat.openai.com', 'OpenAI''s conversational AI assistant', 1, 'Freemium', true),
  ('Claude', 'https://claude.ai', 'Anthropic''s AI assistant', 1, 'Freemium', true),
  ('Gemini', 'https://gemini.google.com', 'Google''s AI assistant', 1, 'Free', false),
  ('Grok', 'https://grok.x.com', 'xAI''s chatbot', 1, 'Premium', false),
  ('Mistral', 'https://chat.mistral.ai', 'Mistral AI assistant', 1, 'Freemium', false),
  ('Perplexity', 'https://www.perplexity.ai', 'AI-powered search engine', 8, 'Freemium', true),
  ('Poe', 'https://poe.com', 'Multiple AI chatbots in one', 1, 'Freemium', false),
  ('Claude Pro', 'https://claude.ai/pro', 'Claude premium version', 1, '$20/mo', false),
  ('ChatGPT Plus', 'https://chat.openai.com', 'GPT-4 premium version', 1, '$20/mo', false),
  ('YouChat', 'https://you.com', 'AI search assistant', 8, 'Free', false),

-- Image Generation (category 2)
  ('Midjourney', 'https://www.midjourney.com', 'AI image generation', 2, '$10/mo', true),
  ('DALL-E', 'https://openai.com/dall-e', 'OpenAI image generator', 2, 'Pay-as-you-go', true),
  ('Stable Diffusion', 'https://stability.ai', 'Open source image AI', 2, 'Free', true),
  ('Adobe Firefly', 'https://firefly.adobe.com', 'Adobe AI creative tools', 2, 'Freemium', false),
  ('Leonardo AI', 'https://leonardo.ai', 'Free AI image generator', 2, 'Free', false),
  ('Ideogram', 'https://ideogram.ai', 'Text-to-image AI', 2, 'Freemium', false),
  ('Runway', 'https://runwayml.com', 'AI creative tools', 3, 'Freemium', true),
  ('Pika', 'https://pika.art', 'AI video generation', 3, 'Freemium', true),
  ('Luma AI', 'https://lumalabs.ai', 'AI 3D and video', 3, 'Freemium', false),
  ('Sora', 'https://openai.com/sora', 'OpenAI text-to-video', 3, 'Waitlist', true),

-- AI Writing (category 4)
  ('Jasper', 'https://jasper.ai', 'AI copywriting', 4, '$40/mo', false),
  ('Copy.ai', 'https://copy.ai', 'AI content generator', 4, 'Freemium', false),
  ('Writesonic', 'https://writesonic.com', 'AI writing assistant', 4, 'Freemium', false),
  ('Rytr', 'https://rytr.me', 'AI writing tool', 4, 'Freemium', false),
  ('QuillBot', 'https://quillbot.com', 'AI paraphrasing', 4, 'Freemium', false),
  ('Notion AI', 'https://notion.so/product/ai', 'Notion AI assistant', 9, '$10/mo', true),
  ('Grammarly', 'https://grammarly.com', 'AI grammar checker', 4, 'Freemium', true),
  ('Wordtune', 'https://wordtune.com', 'AI sentence rewriter', 4, 'Freemium', false),
  ('Sudowrite', 'https://sudowrite.com', 'AI fiction writer', 4, '$19/mo', false),
  ('Compose.ai', 'https://compose.ai', 'AI writing assistant', 4, 'Free', false),

-- Coding (category 5)
  ('GitHub Copilot', 'https://github.com/features/copilot', 'AI code completion', 5, '$10/mo', true),
  ('Cursor', 'https://cursor.sh', 'AI-first IDE', 5, 'Freemium', true),
  ('CodeWhisperer', 'https://aws.amazon.com/codewhisperer', 'AWS AI code', 5, 'Free', false),
  ('Tabnine', 'https://tabnine.com', 'AI code completion', 5, 'Freemium', false),
  ('Replit AI', 'https://replit.com', 'AI coding platform', 5, 'Freemium', false),
  ('Mintlify', 'https://mintlify.com', 'AI documentation', 5, 'Freemium', false),
  ('Codeium', 'https://codeium.com', 'AI code acceleration', 5, 'Free', false),
  ('v0', 'https://v0.dev', 'Vercel AI UI generator', 5, 'Free', true),
  ('Sourcegraph Cody', 'https://sourcegraph.com/cody', 'AI code analysis', 5, 'Freemium', false),
  ('AskCodi', 'https://askcodi.com', 'AI coding assistant', 5, 'Freemium', false),

-- Music/Audio (category 6)
  ('Suno', 'https://suno.ai', 'AI music generation', 6, '$10/mo', true),
  ('ElevenLabs', 'https://elevenlabs.io', 'AI voice synthesis', 6, 'Freemium', true),
  ('Murf AI', 'https://murf.ai', 'AI voice generator', 6, '$29/mo', false),
  ('WellSaid Labs', 'https://wellsaidlabs.com', 'AI voiceover', 6, '$49/mo', false),
  ('Descript', 'https://descript.com', 'AI audio/video editor', 6, 'Freemium', false),
  ('AIVA', 'https://aiva.ai', 'AI music composer', 6, 'Freemium', false),
  ('Boomy', 'https://boomy.com', 'AI music creation', 6, 'Free', false),
  ('Lalals', 'https://lalals.com', 'AI voice changer', 6, 'Freemium', false),
  ('Respeecher', 'https://respeecher.com', 'AI voice cloning', 6, 'Premium', false),
  ('Podcast.ai', 'https://podcast.ai', 'AI podcast generator', 6, 'Free', false),

-- Design (category 7)
  ('Canva AI', 'https://canva.com', 'AI design tool', 7, 'Freemium', true),
  ('Microsoft Designer', 'https://designer.microsoft.com', 'AI design assistant', 7, 'Free', false),
  ('Looka', 'https://looka.com', 'AI logo maker', 7, '$20', false),
  ('Brandmark', 'https://brandmark.io', 'AI brand designer', 7, '$30', false),
  ('Flair AI', 'https://flair.ai', 'AI product photography', 7, '$15/mo', false),
  ('Booth AI', 'https://booth.ai', 'AI product images', 7, '$19/mo', false),
  ('Uizard', 'https://uizard.com', 'AI UI designer', 7, 'Freemium', false),
  ('Galileo AI', 'https://galione.ai', 'AI interface design', 7, 'Waitlist', false),
  ('Designs.ai', 'https://designs.ai', 'AI design platform', 7, '$29/mo', false),
  ('Adobe Express', 'https://express.adobe.com', 'AI creative tool', 7, 'Free', false),

-- Search (already added above)
  ('Arc Search', 'https://arc.net', 'AI browser search', 8, 'Free', false),
  ('Neeva', 'https://neeva.com', 'Ad-free AI search', 8, '$5/mo', false),
  ('Komo AI', 'https://komo.ai', 'AI search engine', 8, 'Free', false),
  ('Andisearch', 'https://andisearch.com', 'AI search assistant', 8, 'Free', false),
  ('iAsk', 'https://iask.ai', 'AI Q&A search', 8, 'Free', false),
  ('Phind', 'https://phind.com', 'Developer AI search', 8, 'Free', false),
  ('Brave Summarizer', 'https://brave.com', 'AI search summary', 8, 'Free', false),
  ('Llamafile', 'https://llamafile.ai', 'Local AI search', 8, 'Free', false),

-- Productivity (category 9)
  ('Otter.ai', 'https://otter.ai', 'AI meeting notes', 9, 'Freemium', false),
  ('Fireflies.ai', 'https://fireflies.ai', 'AI meeting assistant', 9, 'Freemium', false),
  ('Mem.ai', 'https://mem.ai', 'AI note-taking', 9, 'Freemium', false),
  ('Todoist AI', 'https://todoist.com', 'AI task manager', 9, '$5/mo', false),
  ('Raycast AI', 'https://raycast.com', 'Mac AI assistant', 9, 'Free', false),
  ('Craft.do', 'https://craft.do', 'AI document tool', 9, 'Freemium', false),
  ('tl;dr', 'https://tdr.io', 'AI web summarizer', 9, 'Free', false),
  ('ChatGPT Slack', 'https://claude.ai/slack', 'Slack AI bot', 9, 'Free', false),

-- Learning (category 10)
  ('Khanmigo', 'https://khanacademy.org', 'AI tutor', 10, '$15/mo', false),
  ('Duolingo Max', 'https://duolingo.com', 'AI language tutor', 10, '$12.99/mo', false),
  ('Quizlet', 'https://quizlet.com', 'AI learning tool', 10, 'Freemium', false),
  ('Chegg', 'https://chegg.com', 'AI homework help', 10, '$15.95/mo', false),
  ('Socratic', 'https://socratic.org', 'Google AI tutor', 10, 'Free', false),
  ('Wolfram Alpha', 'https://wolframalpha.com', 'AI computation', 10, '$5/mo', false),
  ('ResearchRabbit', 'https://researchrabbit.ai', 'AI research tool', 10, 'Freemium', false),
  ('Elicit', 'https://elicit.org', 'AI research search', 10, 'Free', false),
  ('Consensus', 'https://consensus.app', 'AI academic search', 10, 'Freemium', false),
  ('Scite', 'https://scite.ai', 'AI citation analysis', 10, 'Freemium', false);
