# Czech 100B｜Agent Working Agreement

## 專案事實
先閱讀 `PRODUCT.md`、`DESIGN.md` 與 `docs/official-itinerary.md`。本網站是「M-4-12 捷克文學與民主韌性」的**獨立文化策展原型**；不可把預期訪談、館藏取得或返台展覽寫成已完成事實。

## Design workflow — Impeccable
本專案採用 [pbakaus/impeccable](https://github.com/pbakaus/impeccable) 的設計方法。當本機可使用其 CLI/Skill 時，先在專案根目錄安裝：

```bash
npx impeccable install --providers=codex,github --scope=project
```

然後依工作需要使用 `$impeccable` 或 `/impeccable init`、`audit`、`adapt`、`polish`。**此命令尚未在本環境成功執行**；目前僅已實際閱讀其官方 Skill 與 audit、adapt、polish、craft-floor 參考並依其方法做過人工程式碼審查。不要宣稱已執行官方 CLI detector 或瀏覽器 live 模式。

對 UI 的變更遵守：
1. 保留既有「深色文學博物館」視覺、內容與 MapLibre + Scrollama 行為，除非使用者明示重設。
2. 先解決功能／易用性，再處理響應式、動效與微調。
3. 檢查 Chrome、Safari、手機、鍵盤與 reduced motion；無法實測就回報缺口。
4. 修改前後執行 JS 語法、CSS 解析、HTML ID 與 Vercel 部署檢查。
5. 不上傳個資、登入憑證、授權未明的史料或素材。

## 版本與權利
- MapLibre Storytelling 來源及 MIT 授權保留於 `LICENSE`。
- Impeccable 由 pbakaus 維護，獨立專案；本儲存庫使用其公開設計指導，不代表官方合作或背書。
- 以 GitHub `main` 作為 Vercel 生產環境來源；部署後驗證結果。