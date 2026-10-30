# 捷克百億計劃 · 文字與自由

[**開啟網站 V1**](https://czech-100b-plan.vercel.app/) ｜ [官方計畫摘要](docs/official-itinerary.md)

這是配合青年百億海外圓夢基金計畫 **M-4-12《捷克文學與民主韌性》** 所製作的獨立數位策展／作品集原型。主題包括捷克文學、布拉格城市歷史、民主記憶與中歐文化交流。

> 此網站並非教育部、東吳大學、捷克文學館或摩拉維亞圖書館官方網站；內容是出國前研究與作品展示，**不是已經完成的見習或田野調查成果**。

## 目前已實作

- 電影式首頁：布拉格實景攝影、中文字體與捲動式視覺敘事
- **互動歷史年表**：1918、1968、1989、1993，可切換文字與來源
- **5 站文學／歷史地圖**：布拉格舊城、卡夫卡、溫策拉斯廣場、摩拉維亞圖書館、維也納
- 依章節自動移動地圖鏡頭，支援手機排版和減少動畫偏好
- 官方計畫行程、網站策展構想與實際成果的明確區分

## 技術與開源沿用

本版**保留並改寫** [opengeos/maplibre-gl-storymaps](https://github.com/opengeos/maplibre-gl-storymaps)（© 2026 Qiusheng Wu, MIT）的核心設計：
`config.js` 定義章節與地圖位置 → `app.js` 動態建立 `.step` → [Scrollama](https://github.com/russellsamora/scrollama) 監看進入畫面的章節 → [MapLibre GL JS](https://maplibre.org/) `flyTo` 移動地圖。

本版以輕量 **HTML / CSS / JavaScript 靜態網站**部署至 Vercel，沒有為了視覺效果另裝一套大型前端框架。歷史時間軸目前是獨立輕量元件，**尚未整合** `timel.in` 或 `ScrollCraft`；它們仍在後續研究選項中。

來源檔案：`index.html`、`site.css`、`config.js`、`app.js`、`LICENSE`。

## 本地啟動

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

地圖、Google Fonts 和圖片依賴外部網路；若地圖服務不可用，文字章節仍可閱讀。

## 官方計畫

- 編號：M-4-12｜提案單位：東吳大學
- 時間：2027/4/1–4/18，含飛行日共 18 天
- 地點：捷克布拉格、奧地利維也納
- 名額：20 人；詳細資格與行程以當期官方小簡章為準

[逐日行程](docs/official-itinerary.md) · [申請準備](docs/application-checklist.md) · [網站規劃](docs/website-plan.md) · [資料來源](docs/sources.md)

## 影像／地圖／文字來源

- 首頁布拉格照片：[Unsplash / 6En4WYsNYXM](https://unsplash.com/photos/6En4WYsNYXM)，透過 Unsplash Images CDN 顯示。
- 底圖：CARTO Dark Matter（遵守其地圖資料標示與服務條款）。
- 歷史概要：依各年份提供的 Britannica 項目連結；正式發表前仍應持續核對研究文獻。
- 計畫日期與方向：使用者提供之 M-4-12 官方 9 頁小簡章。
- 核心地圖程式：[MapLibre GL Storytelling](https://github.com/opengeos/maplibre-gl-storymaps)，保留原著作權 MIT 條款於 [LICENSE](LICENSE)。

## 隱私及權利

公開儲存庫請勿提交個人證件、護照、電話、私人申請草稿、未授權手稿或訪談素材。網站所示圖文不表示文化機構認可或背書。
