/* Adapted from Qiusheng Wu's MIT-licensed MapLibre GL Storytelling template.
   Story locations are illustrative reading anchors, not a claimed completed field study. */
const config = {
  style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  markerColor: '#e6b67c',
  showMarkers: true,
  chapters: [
    {id:'old-town',number:'01',label:'CITY & MEMORY',title:'布拉格舊城｜城市如何成為文本',date:'走讀主題 · 4 月 2 日',description:'小簡章安排走讀舊城與新城的歷史區域，從文學地景與民主運動遺址理解城市性格。我們以這座城市作為閱讀入口，觀察歷史如何留在街道的名稱與空間中。',focus:'觀察：城市空間 × 文學記憶',link:'https://www.prague.eu/en/',location:{center:[14.4208,50.0871],zoom:13.3,pitch:42,bearing:-16,speed:0.65}},
    {id:'kafka',number:'02',label:'WRITER & PLACE',title:'卡夫卡｜語言與現代城市',date:'走讀主題 · 4 月 3 日',description:'小簡章列有卡夫卡博物館與相關文學地景。展覽將從作家的城市經驗切入，提出一個問題：一座多語言的城市，如何影響文學世界的形成？',focus:'觀察：作家 × 語言 × 城市',link:'https://kafkamuseum.cz/en/',location:{center:[14.4090,50.0884],zoom:15.1,pitch:47,bearing:25,speed:0.55}},
    {id:'wenceslas',number:'03',label:'CIVIC MEMORY',title:'溫策拉斯廣場｜民主的公共空間',date:'研究主題 · 4 月 4、15 日',description:'官方行程安排民主與轉型正義場址走讀，並提及布拉格民主軸線。這裡以公共空間為線索，引導讀者查詢 1968 年與 1989 年的相關歷史資料。',focus:'觀察：公共空間 × 民主記憶',link:'https://www.britannica.com/event/Velvet-Revolution',location:{center:[14.4294,50.0817],zoom:14.6,pitch:48,bearing:-19,speed:0.55}},
    {id:'brno',number:'04',label:'ARCHIVE & RESEARCH',title:'摩拉維亞圖書館｜文學的保存方式',date:'見習主題 · 4 月 13 日',description:'官方小簡章安排摩拉維亞圖書館相關講座，討論米蘭・昆德拉及布拉格之春。網站將以文獻來源與數位人文展示為方法，而不預先宣稱已實地取得手稿內容。',focus:'觀察：文學典藏 × 數位人文',link:'https://www.mzk.cz/en',location:{center:[16.603,49.204],zoom:12.9,pitch:38,bearing:-10,speed:0.75}},
    {id:'vienna',number:'05',label:'CROSS-BORDER MEMORY',title:'維也納｜跨越城市的文學脈絡',date:'走讀主題 · 4 月 16 日',description:'官方行程規劃維也納跨域走讀，以哈布斯堡時期、捷克民族復興及中歐文化脈絡串起布拉格與維也納。這是地圖故事的最後一站，也是後續資料整理的起點。',focus:'觀察：帝國城市 × 文化交流',link:'https://www.wien.info/en',location:{center:[16.3738,48.2082],zoom:12.8,pitch:42,bearing:5,speed:0.7}}
  ]
};
const eras = {
  '1918': {caption:'THE BEGINNING',title:'捷克斯洛伐克成立',body:'第一次世界大戰結束後，捷克斯洛伐克建國。理解這個起點，有助於閱讀後來關於民族、語言與國家認同的文學討論。',url:'https://www.britannica.com/place/Czechoslovakia'},
  '1968': {caption:'A MOMENT OF REFORM',title:'布拉格之春',body:'1968 年的改革嘗試與後續入侵，深刻影響捷克斯洛伐克社會與文化生活。文學也是理解這段經驗的多重來源之一。',url:'https://www.britannica.com/event/Prague-Spring'},
  '1989': {caption:'THE VELVET REVOLUTION',title:'天鵝絨革命',body:'1989 年，以和平示威為主要特徵的政治變革結束共產黨統治。劇作家、異議人士瓦茨拉夫・哈維爾成為民主轉型的重要人物。',url:'https://www.britannica.com/event/Velvet-Revolution'},
  '1993': {caption:'A NEW CHAPTER',title:'捷克共和國成立',body:'1993 年，捷克斯洛伐克和平分立為捷克共和國與斯洛伐克共和國。這個新階段為理解當代捷克文化與國家敘事提供另一個座標。',url:'https://www.britannica.com/place/Czech-Republic'}
};
