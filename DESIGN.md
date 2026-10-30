# Design System｜文字與自由

**Design direction：一座可以閱讀的文學博物館（Editorial Literary Atlas）。**

本檔記錄已上線網站的視覺真相與可沿用的設計原則，參考 [Impeccable](https://github.com/pbakaus/impeccable) 的 `document → audit → adapt → polish` 方法；不是用全新風格取代現有設計。

## 設計目標
用中歐歷史文化展覽的節制、層次與可讀性，支撐地圖敘事。讓內容先被理解，動效負責引導視線而不是展示技術。

## 色彩（目前實作）
| 語義 | Token / 值 | 用途 |
|---|---|---|
| 墨黑背景 | `--bg: #141a1b` | 主背景 |
| 深暗背景 | `--deep: #101617` | 地圖及深層區域 |
| 展紙白 | `--paper: #f1eee7` | 深色上的主文字及亮色頁面 |
| 紙質米色 | `--sand: #e3d9c9` | 溫暖中性色 |
| 內文深灰 | `--ink: #252b2b` | 紙色頁面文字 |
| 古銅強調 | `--accent: #c7aa82` | 重點、線條及引用 |
| 焦點色 | `--focus: #edc99b` | 鍵盤焦點 |
| 內容寬度 | `--body-measure: 70ch` | 內文可讀行長 |
| 最小互動高度 | `--interactive-min: 44px` | 手機與鍵盤 |

CSS 裡仍有沿襲的局部色碼，後續可逐步改為語義變數，避免全面翻修造成回歸問題。

## 字體與層級
- 展覽標題：Noto Serif TC，保留文學出版物質感。
- 介面與正文：DM Sans + Noto Sans TC。
- 標題應有明確層級，避免在主標前疊加無意義 eyebrow 字樣。
- 主要內文在手機上以約 15–17px 為基準；長文一行不要無限制加寬。

## 版面與材質
- 使用大幅城市影像、展覽式留白、墨黑／展紙白交替。
- 地圖故事維持固定地圖＋可捲動文字展件，避免把內容變成相同尺寸的卡片牆。
- 頁面的編號只用於真實的章節序列；非實際流程不用機械式裝飾。

## 動效
- 核心動畫：Scrollama 章節進入 → MapLibre 相機切換。
- 次要動畫：首頁照片出場、年份切換的指示點、必要的 hover / focus 狀態。
- 使用者選擇減少動態效果時：地圖 `jumpTo`、取消非必要影像動畫，仍保留可理解的狀態變化。
- 不增加無目的循環動畫、全頁同款淡入或沉重的 GPU 模糊特效。

## 響應式與無障礙
- 手機選單最小 44px，支援 Esc 與點擊外部關閉。
- 年份按鈕最小 44px，支援左右方向鍵、Home、End。
- 含 `prefers-reduced-motion` 分支；外部地圖載入失敗時，仍可閱讀章節與來源。
- 新內容必須檢查 HTML 語意、焦點、對比、文字放大和 320px 以上溢出。

## 技術與來源
- 主要架構由 [MapLibre Storytelling](https://github.com/opengeos/maplibre-gl-storymaps)（MIT）改造，保留署名與 LICENSE。
- 採靜態 HTML/CSS/JS，部署至 Vercel。
- 歷史史料不等於程式碼的 MIT 授權；新增展件需獨立查核。