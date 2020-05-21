---
title: learn_fontend_1
cTitle: 如何開始學程式-從零開始的工程師生活
date: 2020-05-01
depiction: 在這半虛擬化的世代，越來越多人開始學習寫程式。很有人經常問說：「如果從零開始學程式，應該先從哪些程式語言入門比較好、程式開發工具怎麼選擇；應該要去上課還是自學；之後可以找到什麼工作...」。於是我將這些問題一一整理成一系列文章來替想學程式的人解惑。
tag: [Teach, Web, HTML]
---
<!--@@master=../../../../../layout.html-->

<!--@@block=meta-->
<meta name="author" content="Berglas">
<meta name="copyright" content="Berglas">
<meta name="description" content="@@depiction">
<meta itemprop="name" content="@@cTitle｜巴格.生活日記•學習筆記">
<meta itemprop="image" content="@@site.jpg">
<meta itemprop="description" content="@@depiction">
<meta property="og:title" content="@@cTitle｜巴格.生活日記•學習筆記">
<meta property="og:url" content="@@site.html">
<meta property="og:image" content="@@site.jpg">
<meta property="og:description" content="@@depiction">
<meta property="og:site_name" content="巴格.生活日記•學習筆記">
<meta property="og:type" content="article">
<title>@@cTitle｜巴格.生活日記•學習筆記</title>
<!--@@close-->

<!--@@block=title-->
<p class='theme-title'>@@cTitle</p>
<p class='time-mark'>@@date</p>
<!--@@close-->

<!--@@block=depiction-->
![](https://i.imgur.com/SFz2RbF.jpg)
<p class='depiction'>@@depiction</p>
<!--@@close-->

<!--@@block=content-->
### 探索目標
我們先把腳步慢下來一點，在探討要如何開始學程式之前，我們先來探索目標
**「為什麼要開始學程式？」**

* App好像很賺錢，我也想要開發App？
* 我想要做一個自己公司的網頁？
* 找份薪水還不錯的工作？
* 興趣使然？
* ~~你管我為什麼，我就是想學~~

為什麼巴格要這樣嘮叨呢？
我想人在面對於一個沒興趣、沒目標的學習，往往會感到枯燥乏味，更何況是像下面的段火星文(C#程式語言)。
```
// C# 這是一段顯示九九乘法表的程式碼
void main(string[] args) {
  for (int i = 2; i <= 9; i++)	{
    for (int j = 1; j <= 9; j++) {
      Console.Write( i + "*" + j + "=" + (i * j).ToString("00") + " " );
    }
    Console.Write("\r\n");
   }
   Console.ReadLine();
}
```
我想可能有人開始頭昏了，哈哈哈~~
這種情形就像是學習過程中會遭遇的碰壁，這時候如果有「目標」或者「興趣熱忱」來支撐著學習，它都能使你/妳不輕易放棄，所以說先找學習動機，會比先找如何學習來的重要很多。

### 方向選擇
![](https://i.imgur.com/e6SGdIa.jpg)

程式開發應用的領域相當多元，這邊列舉幾項大家可能較熟悉的案例：
* 網頁開發應用領域：電子商業網站([博客來](https://www.books.com.tw/))、形象官方網站([任天堂](https://www.nintendo.tw/index.html))、企業內部系統(企業資源規劃系統、製造執行系統)、服務型網站([Gmail](https://mail.google.com/))、網頁遊戲。
* 應用程式開發領域：網路爬蟲、生產數據收集程式、自動化管理程式、電腦遊戲。
* App開發：毫無反應，就只是個App。

這邊提供幾點方向：
* 如果你想要製作App，可以參考這篇[「我想寫手機程式，但我不知道該選iOS還是Android」](https://progressbar.tw/posts/38)。
* 如果你想要開發遊戲，C#、Unity會是個好選擇。
* 如果自認美感不錯，可以先嘗試學習前端語言HTML+CSS(等有寫程式的概念再開始學Js會比較沒有碰壁感)。
* 如果自認邏輯不錯，可以先嘗試學習後端語言(PHP、Python、Golang、C#)。

### 自我學習 V.S 教導學習
![](https://i.imgur.com/jncKzdd.jpg)
已經決定好學習目標了，但是不是馬上就遇到下一個難題了！?(~~迷：學程式怎麼那麼麻煩~~)
你/妳是不是在**網路自學、請人教學上課**無法做抉擇吧！？。
#### 應該透過何種資源來做入門學習呢？
其實這問題沒有最好的的選擇，只有最適合你/妳的選擇，我們可以依照簡單地面向去分析討論。
* 如果你/妳可以花費的時間＞金錢(像是學生)，那我會覺得可以建議先嘗試著自學看看。
* 如果你/妳可以花費的金錢＞時間(在職但急著轉行)，那或許花錢上課是一個不錯的選擇。

當然啦！其實網路上有許多免費的資源可以應用，都可以試著先做初步的學習瞭解再來慢慢選擇適合自己的學習方式，沒有硬性規定說這樣做最好。

> #### 私心推薦
> 看完以上之後你/妳還是對於相當迷惘，要學習什麼程式語言沒有方向的話，巴格推薦
> 「網站的前端開發」給你/妳吧！至於為什麼推薦它呢？在於「網站」擁有應用性廣泛(市場需求高)、學習回饋性高(學習成就感)、線上資源多(自學也OK)之特性。
<!--@@close-->