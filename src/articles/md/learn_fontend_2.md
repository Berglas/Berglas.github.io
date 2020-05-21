---
title: learn_fontend_2
cTitle: 網頁前端入門-認識HTML
date: 2020-05-08
depiction: 想要設計網頁但始終不知道怎麼入門嗎？建議就從學習HTML開始，本篇會帶你/妳認識什麼是HTML、使用何種工具。現在就讓巴格帶你認識HTML，然後勇敢地踏出開發網頁的第一步吧!
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
<img src='./@@title.jpg'>
<p class='depiction'>@@depiction</p>
<!--@@close-->

<!--@@block=content-->
### 什麼是HTML？
HTML全名為HyperText Markup Language，中文翻譯為「超文本標記語言」。

根據維基百科上記載
>超文本標記語言（英語：HyperText Markup Language，簡稱：HTML）是一種用於建立網頁的標準標記語言。HTML是一種基礎技術，常與CSS、JavaScript一起被眾多網站用於設計網頁、網頁應用程式以及行動應用程式的使用者介面[3]。網頁瀏覽器可以讀取HTML檔案，並將其彩現成視覺化網頁。HTML描述了一個網站的結構語意隨著線索的呈現，使之成為一種標記語言而非程式語言。
>HTML元素是構建網站的基石。HTML允許嵌入圖像與物件，並且可以用於建立互動式表單，它被用來結構化資訊——例如標題、段落和列表等等，也可用來在一定程度上描述文件的外觀和語意。HTML的語言形式為尖括號包圍的HTML元素（如`<html>`），瀏覽器使用HTML標籤和指令碼來詮釋網頁內容，但不會將它們顯示在頁面上。

有興趣的可以點 [HTML(維基百科)](https://zh.wikipedia.org/wiki/HTML) 瞭解完整說明。
應該很多人有看沒有懂，沒關係因為我第一次也看不太懂，但不要害怕就讓我來給個懶人包。

#### 懶人包
HTML是透過定義的標記語言(以下稱為標籤)，告知瀏覽器如何呈現你/妳設定的網頁樣貌，
像是要放一張圖片在網頁上，就給瀏覽器一個圖片的標籤`<img>`。
```
<img src='https://i.imgur.com/WgDzvzT.jpg'> //圖片的網址(或者連結路徑)
```
以上那段程式碼就會呈現為一張圖片樣貌，如下顯示：
<img src='https://i.imgur.com/e6SGdIa.jpg'>
像是要寫個文字標題段落在網頁上，就給瀏覽器一個段落的標籤`<h1>`
```
<h1>【詩詞賞析】 念天地之悠悠 獨愴然而涕下</h1>
```
以上那段程式碼就會呈現為一個標題樣貌，如下顯示：
<h1>【詩詞賞析】 念天地之悠悠 獨愴然而涕下</h1>

諸如此類的標籤就是HTML的要素，眾多標籤排列組合就會變成是一個網頁了。

### 常用標籤介紹
我們先來大致介紹幾個設計網頁上常會用到標籤，之後實作時再做詳細功能介紹。
`<br>`： 換行。

`<hr>`： 分隔線。

`<div>`： 區塊。

`<table><th><tr><td>`： 表格，這是四個基本上為一組的，之後會介紹用法。

`<form>`： 表單。

`<h1>~<h6>`： 標題，1~6代表標題的大小以及重要性。

`<img>`： 圖片。

`<input>`： 輸入框。

`<label>`： 為`<input>`設定說明標籤。

`<a>`： 超連結。

`<ol><ul><li>`： 數字、列舉項目標籤，之後會介紹用法。

`<p>`： 文字段落。

`<span>`： 區域，只會佔用自己本身的空間。

### 開發工具介紹
知道什麼是HTML之後我們就要來著手開發它了，至於要用什麼工具開發呢？我想先降低對於大家的工具難度，這邊我推薦使用[CodePen](https://codepen.io/)這個線上工具，不用安裝任何程式以及即時顯示畫面(註冊帳號即可使用)，事不宜遲我們就先來註冊一個帳號吧!
<br>

`STEP1` 到官網點選「Sign Up」。
![](https://i.imgur.com/PRaA2wq.jpg)
<br>

`STEP2` 選擇快速註冊，或者使用信箱認證註冊。
![](https://i.imgur.com/Hw45quT.jpg)
<br>

`STEP3` 註冊完後登入，選擇「New Pen」(建立一個全新空白檔案)
![](https://i.imgur.com/Gs7uyHE.jpg)
<br>

`STEP4` 完成囉，開始開發囉~
![](https://i.imgur.com/FHUGPIX.jpg)
<br>

如`STEP4`示意圖。這就是CodePen的專案開發介面，主要有四大區塊HTML、CSS、JS(JavaScript)、即時顯示畫面(最大區塊的部分)，有些人的畫面可能是上下排版(如下圖)，這方面我們可以透過上方的「Change View」做切換，看自己喜歡做選擇：
![](https://i.imgur.com/Omy3LM7.jpg)
<br>

這樣就大功告成啦！恭喜你/妳邁出了第一步，下一篇我們來初戰HTML吧！
關於**CSS**以及**JavaScript**也是網頁開發三大將其中兩員大將，剩下一員就是我們現在要學習的**HTML**，之後這系列會循序漸進地講解，然後這系列最後會教導大家認識使用工程師們常用的開發工具以及檔案管理。
Coming soon, stay tuned.
<!--@@close-->