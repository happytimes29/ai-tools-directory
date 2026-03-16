/**
 * Create Feishu Document with Content - Using correct text element
 */
const https = require('https');

const APP_ID = 'cli_a93b58b579f89cb6';
const APP_SECRET = 'k5rPfuNnxNdxjiqwCg8WYfuahWHSS0dH';

async function getAccessToken() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      app_id: APP_ID,
      app_secret: APP_SECRET
    });

    const options = {
      hostname: 'open.feishu.cn',
      path: '/open-apis/auth/v3/tenant_access_token/internal',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const result = JSON.parse(data);
        if (result.code !== 0) reject(new Error(result.msg));
        else resolve(result.tenant_access_token);
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function createDocWithContent(token, title, content) {
  // Create document with title - using page block style
  const docResponse = await new Promise((resolve, reject) => {
    const postData = JSON.stringify({ 
      document: { 
        title: title,
        blocks: [
          {
            type: 'paragraph',
            paragraph: {
              elements: [
                {
                  type: 'text',
                  text: content
                }
              ]
            }
          }
        ]
      } 
    });
    const options = {
      hostname: 'open.feishu.cn',
      path: '/open-apis/docx/v1/documents',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Create response:', data);
        const result = JSON.parse(data);
        if (result.code !== 0) reject(new Error(result.msg));
        else resolve(result.data.document);
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });

  const docId = docResponse.document_id;
  return docId;
}

async function main() {
  const token = await getAccessToken();
  
  const content = `📰 AI 科技新聞早報 (2026-03-13)
━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 AI 人工智能新聞 (5條)

1. OpenAI 曝光中國網軍戰術：AI 被用於跨境打壓異議 (DW)
2. 中國科技巨頭布局 AI 代理：騰訊、華為、字節、阿里
3. OpenAI 與 Meta 升級 AI 服務
4. AI 產品排行榜出爐
5. DeepSeek 發布新 AI 产品

💻 科技新聞 (5條)

1. 2026 MWC 世界移動通信大會
2. 新浪科技晚報：2026年3月12日科技熱點
3. 半導體與硬科技領銜
4. 阿里千問團隊發聲
5. 春節自駕純電出行 Bug

━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 每天 5 條 AI 新聞 + 5 條科技新聞
⏰ 每天早上 8 點自動推送`;

  const docId = await createDocWithContent(token, 'AI 科技新聞早報 2026-03-13', content);
  console.log(`\n✅ 文檔創建成功！\n📄 https://feishu.cn/docx/${docId}`);
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });
