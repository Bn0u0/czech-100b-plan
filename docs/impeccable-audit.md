# Impeccable 方法審查｜2026-10-30

**來源：** https://github.com/pbakaus/impeccable （官方 SKILL.md、craft-floor、audit、adapt、polish）。

**執行界線：** 本次直接閱讀官方設計 Skill，完成**原始碼層級人工審查與修正**。本環境 npm DNS 無法解析、Chromium 對本地及 file:// 導航回報 `ERR_BLOCKED_BY_ADMINISTRATOR`，故尚未完成官方 Impeccable CLI 62 規則掃描及實際瀏覽器視覺驗證。以下不是 CLI 出具的分數。

## 已確認並修正
| 嚴重性 | 檢查點 | 調整 |
|---|---|---|
| P1 | 年表按鈕原本僅 `padding:5px 0`，手機點擊區不足 | 年份按鈕最小高度 52px，並擴大手機版點擊範圍 |
| P1 | 手機正文部分原為 12–13px | 將主要敘事正文提高到約 15px，兼顧行高 |
| P2 | 手機選單無 Esc、外部點擊與視窗放大時自動關閉行為 | 增加關閉、焦點回歸與 ARIA 標籤更新 |
| P2 | 年表鍵盤操作只支援基本 Tab/Enter | 增加 ArrowLeft、ArrowRight、Home、End |
| P2 | reduced-motion 原本強制全域 `0.01ms`，會抹除有意義的狀態回饋 | 改為選擇性停用裝飾性動畫，保留可理解的互動狀態 |
| P2 | 地圖載入失敗訊息僅單行文字 | 改成帶標題的狀態提示，說明仍可閱讀下方章節 |
| P3 | 主標之前有一組裝飾性 eyebrow | 移除，保留具文學內容的引言 |
| P3 | 焦點視覺、文字選取、字體量度不完整 | 補入共用焦點色、選取色、70ch 行長、手機 safe area |

## 已完成的程式碼驗證
- `node --check app.js`：PASS。
- `node --check config.js`：PASS。
- BeautifulSoup 檢查 HTML ID：無重複。
- `tinycss2` 解析 CSS：無語法錯誤。
- 確認首頁仍標示「申請前研究展示原型」而非官方網站。

## 尚未驗證
- iOS Safari、Android Chrome、桌面 Chrome 的**實際視覺與觸控**（開頁、年份切換、選單、地圖跟隨捲動）。
- CDN 載入失敗或行動網路條件下的 MapLibre 實際降級行為。
- 全量 WCAG AA 顏色對比、字體放大 200%、螢幕閱讀器測試。
- Impeccable 官方 detector；要在可執行的開發環境安裝後再跑。

## 後續
1. 在本機或可用的 AI Coding 環境執行 `npx impeccable install --providers=codex,github --scope=project`。
2. 使用 `$impeccable audit` 或對應的 `/impeccable audit` 掃描。
3. 對手機、年份切換、地圖章節執行實際瀏覽器測試。
4. 依結果執行 `adapt`、`polish`，避免為了追求分數而過度裝飾。