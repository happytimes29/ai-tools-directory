/**
 * AI News Pusher - 每天早上 8 点推送 AI 新闻
 */
const https = require('https');

const API_KEY = process.env.TAVILY_API_KEY || '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';
const FEISHU_BOT_TOKEN = process.env.FEISHU_BOT_TOKEN || '';
const USER_ID = process.env.FEISHU_USER_ID || 'ou_f26d43841bb8df5662fcc392ae9133c3';

async function search(query, maxResults = 5) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      query,
      search_depth: 'basic',
      max_results: maxResults
    });

    const options = {
      hostname: 'api.tavily.com',
      path: '/search',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          reject(new Error(`解析失败: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function sendFeishuMessage(message) {
  if (!FEISHU_BOT_TOKEN) {
    console.log('⚠️ 未配置 Feishu Bot Token，跳过发送');
    console.log('消息内容:\n', message);
    return;
  }

  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      receive_id: USER_ID,
      msg_type: 'text',
      content: JSON.stringify({ text: message })
    });

    const options = {
      hostname: 'open.feishu.cn',
      path: '/open-apis/v2/im/message/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FEISHU_BOT_TOKEN}`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Feishu API 响应:', data);
        resolve(data);
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('🔍 搜索 AI 新闻...\n');
  
  const result = await search('AI 人工智能 最新新闻', 8);
  
  if (!result.results || result.results.length === 0) {
    console.log('未找到新闻');
    return;
  }

  // 格式化新闻
  let message = '📰 AI 新闻早报\n';
  message += '━━━━━━━━━━━━━━━━━━\n\n';
  
  result.results.forEach((r, i) => {
    const title = r.title || '无标题';
    const content = r.content ? r.content.substring(0, 100) + '...' : '';
    const url = r.url || '';
    
    message += `${i + 1}. ${title}\n`;
    if (content) message += `   ${content}\n`;
    if (url) message += `   🔗 ${url}\n`;
    message += '\n';
  });

  message += '━━━━━━━━━━━━━━━━━━\n';
  message += '🤖 每天早上 8 点自动推送';
  
  console.log(message);
  
  await sendFeishuMessage(message);
  console.log('\n✅ 完成');
}

main().catch(err => {
  console.error('错误:', err.message);
  process.exit(1);
});
