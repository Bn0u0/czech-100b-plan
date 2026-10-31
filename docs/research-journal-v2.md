# Research journal V2.0

這個網站是申請 M-4-12「捷克文學與民主韌性」的自主研究與行前準備紀錄，不是已完成的海外見習成果，也不是官方網站。

## 三個開源方向的融合
- **A Quiet Publication**：借鑑研究文章、版本紀錄、出版型內容組織；並未直接複製其程式碼。
- **Case (erlandv/case)**：借鑑案例研究的問題、方法、成果、狀態呈現；並未直接複製其程式碼。
- **MapLibre Storytelling**：延續原站既有的 MapLibre + Scrollama 互動地圖與歷史年表，保留在 `atlas.html`，其原始程式的 MIT 授權仍保留於 `LICENSE`。

新首頁刻意維持**靜態 HTML、CSS、JavaScript**，沒有引入大型框架。研究文章增加後再評估 Astro + Markdown。

## 資料誠實性
- 「已建立」只表示數位研究工具及公開原始碼存在。
- 哈維爾、卡夫卡的研究筆記仍為「待深入閱讀」；示例假說不能冒充研究結論。
- 行程以 2027 年 4 月 1–18 日 M-4-12 小簡章為依據，變動以官方為準。
- 不得宣稱已實地訪查、訪談或取得館藏授權。

## 結構
- `index.html` + `journal.css` + `journal.js`：研究準備首頁。
- `atlas.html` + `site.css` + `config.js` + `app.js`：原互動地圖與年表附錄。
- `docs/official-itinerary.md`：官方行程整理。
- `DESIGN.md` / `PRODUCT.md`：先前設計規範，後續應以本 V2 定位修訂。

## 參考來源
- https://astro.build/themes/details/a-quiet-publication/
- https://github.com/erlandv/case
- https://github.com/opengeos/maplibre-gl-storymaps

## 驗證
純靜態網站無建置步驟；在根目錄 `python3 -m http.server 8000` 預覽。發布後應進行 iOS Safari、Chrome、鍵盤操作、外部連結與地圖 CDN 的實機驗證。