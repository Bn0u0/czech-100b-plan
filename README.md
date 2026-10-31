# 在出發之前，先開始理解｜M-4-12 自主研究紀錄

[開啟正式網站](https://czech-100b-plan.vercel.app/) · [互動文學地圖與歷史年表](https://czech-100b-plan.vercel.app/atlas.html) · [研究網站 V2.0 設計說明](docs/research-journal-v2.md)

這是針對青年百億海外圓夢基金計畫 **M-4-12「捷克文學與民主韌性」** 的獨立自主研究與行前準備網站。網站的目的，是呈現對計畫的理解、實際準備成果、未解問題及希望現地深化的研究方向，**不是官方網站，也不是已完成的海外見習成果**。

## 研究網站 V2.0

- 首頁：申請前的研究動機與官方計畫理解
- 準備證據：已建立的互動地圖，以及仍待閱讀的研究題目，明確區分完成與待研究
- 開放問題：初步假說、所缺證據、預定現地追問
- 見習學習：行前、現地、返台三階段的研究對照
- 返台成果：繁體中文數位策展的初步規劃
- 原版地圖：保留於 `atlas.html`，仍使用 MapLibre + Scrollama

## 技術與開源來源

網站仍使用靜態 HTML/CSS/JavaScript，以避免為了視覺效果增加不必要的維護成本。內容架構參考 [A Quiet Publication](https://astro.build/themes/details/a-quiet-publication/)；案例敘事參考 [Case](https://github.com/erlandv/case)；地圖延續 [MapLibre GL Storytelling](https://github.com/opengeos/maplibre-gl-storymaps) 的 MIT 授權架構，授權見 [LICENSE](LICENSE)。前兩者僅借鑑資訊架構與設計方法，未複製其原始碼。

完整說明：[研究網站 V2.0](docs/research-journal-v2.md) · [官方行程整理](docs/official-itinerary.md) · [來源](docs/sources.md)。

## 內容誠實性

官方行程依 2027 年 4 月 1 日至 4 月 18 日小簡章整理，詳細活動以主辦方最新公告為準。任何研究假說都不是已證實結論；尚未閱讀的文本不得標為已完成。未取得的訪談、館藏與現地觀察不得宣稱已完成。

## 本地預覽

```bash
python3 -m http.server 8000
```

請在瀏覽器開啟 http://localhost:8000 。網站不需打包，但 Google Fonts、地圖與底圖依賴網路服務。
