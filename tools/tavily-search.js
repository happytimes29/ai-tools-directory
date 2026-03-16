/**
 * Tavily Search - 简洁输出版
 */
const https = require('https');

const API_KEY = process.env.TAVILY_API_KEY || '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';

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
          
          // 格式化输出
          console.log(`🔍 查询: ${result.query}`);
          console.log(`⏱️ 响应时间: ${result.response_time}s\n`);
          
          if (result.answer) {
            console.log('📝 答案:');
            console.log(result.answer);
            console.log('');
          }
          
          console.log('📄 结果:');
          result.results.forEach((r, i) => {
            console.log(`${i + 1}. ${r.title}`);
            console.log(`   URL: ${r.url}`);
            console.log(`   摘要: ${r.content?.substring(0, 150)}...`);
            console.log('');
          });
          
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

const query = process.argv.slice(2).join(' ');
if (!query) {
  console.error('用法: node tavily-search.js "<搜索内容>"');
  process.exit(1);
}

search(query).catch(err => {
  console.error('错误:', err.message);
  process.exit(1);
});
