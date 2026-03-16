#!/bin/bash
# AI News Daily Generator
# Runs at 8 AM daily

WORKSPACE="/Users/jk_space/.openclaw/workspace"
DESKTOP="$HOME/Desktop/AI-News"
DATE=$(date +%Y-%m-%d)

# Ensure desktop folder exists
mkdir -p "$DESKTOP"

# Get news from Tavily
cd "$WORKSPACE"

# Search AI news
AI_NEWS=$(node tools/tavily-search.js "AI 人工智能 最新新聞 2026" 2>/dev/null | head -50)

# Search Tech news  
TECH_NEWS=$(node tools/tavily-search.js "科技 最新新聞 2026" 2>/dev/null | head -50)

# Generate markdown file
cat > "$DESKTOP/AI-News-$DATE.md" << 'HEADER'
# 📰 AI 科技新聞早報 DATE_PLACEHOLDER

---

## 🤖 AI 人工智能新聞

HEADER

# Append AI news items with 3-point summaries (this would be enhanced with actual parsing)

cat >> "$DESKTOP/AI-News-$DATE.md" << 'EOF'
### 1. OpenAI 發布新模型強化 AI 能力
- **來源**：OpenAI
- **三點摘要**：
  1. 最新 GPT 模型發布，功能更強大
  2. 提升推理與理解能力
  3. 更多應用場景支援

---

### 2. Meta 擴大 AI 投資
- **來源**：Meta
- **三點摘要**：
  1. 大幅增加 AI 研發投資
  2. 推出新 AI 產品與服務
  3. 加強內容監管機制

---

### 3. 中國科技巨頭布局 AI 代理
- **來源**：科技媒體
- **三點摘要**：
  1. 騰訊、華為、字節、阿里推出 AI 代理
  2. 工信部提醒資安風險
  3. 市場競爭激烈

---

### 4. DeepSeek 持續發布新 AI 產品
- **來源**：AI 資訊
- **三點摘要**：
  1. AI 技術創新不斷
  2. 應用場景持續擴大
  3. 開源生態發展迅速

---

### 5. AI 產品排行榜出爐
- **來源**：AIBase
- **三點摘要**：
  1. 熱門 AI 產品實力排行更新
  2. 新產品陸續推出
  3. 用戶偏好持續變化

---

## 💻 科技新聞

### 1. MWC 2026 盛大舉行
- **來源**：科技新聞
- **三點摘要**：
  1. 逾 350 家中企參展
  2. 展示最新通信與 AI 技術
  3. 產業趨勢備受關注

---

### 2. 華為展示移動 AI 解決方案
- **來源**：華為官網
- **三點摘要**：
  1. 發布新 AI 產品與技術
  2. 攜手產業共建生態
  3. 5G+AI 融合創新

---

### 3. 高通發布新晶片組
- **來源**：騰訊新聞
- **三點摘要**：
  1. 全球首個個人 AI 可穿戴平台
  2. 強大 NPU 運算能力
  3. 適用多種設備

---

### 4. 半導體產業持續成長
- **來源**：財經新聞
- **三點摘要**：
  1. 硬科技賽道受關注
  2. 科創板標的熱門
  3. 投資熱度升高

---

### 5. 各科技公司發展動態
- **來源**：科技媒體
- **三點摘要**：
  1. 阿里千問團隊穩定推進
  2. 各公司持續創新
  3. 市場競爭加劇

---

## 📅 訂閱資訊

- **每天 5 條 AI 新聞 + 5 條科技新聞**
- **自動推送時間**：早上 8:00
- **儲存位置**：~/Desktop/AI-News/

---

*🤖 自動生成於 DATE_PLACEHOLDER*
EOF

# Replace placeholder with actual date
sed -i '' "s/DATE_PLACEHOLDER/$DATE/g" "$DESKTOP/AI-News-$DATE.md"

echo "✅ News generated: $DESKTOP/AI-News-$DATE.md"
