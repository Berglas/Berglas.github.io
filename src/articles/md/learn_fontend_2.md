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
![](https://i.imgur.com/S2V0o00.jpg)
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

### HTML標籤組成
以這段為範例：
```
<p>念天地之悠悠</p>
```

HTML標籤主要由三個東西組成：
1. 起始標籤：起始標籤代表這HTML從這裡開始。寫法為大於、小於符號中間放置**定義關鍵字**，以上例為`<p>`。
1. 結尾標籤：結尾標籤代表這HTML從這裡結束。寫法為大於、小於符號中間放置**定義關鍵字**，且在之前加入「/」，以上例為`</p>`。
1. 內容：這個標籤所包含的內容，以上例來說，內容就是這句文字「**念天地之悠悠**」。

由以上三種所組成我們稱之為元素。

### 巢狀元素(Nesting Element)
我們是可以在元素A裡面的內容放進另一個元素B，當這種情況成立時稱為「巢狀元素」，且這時元素A會成為元素B的父層；反之元素B會成為元素A的子層。
舉例：「我看倒像塊綠豆糕」。這時想強調「綠豆糕」，想把「綠豆糕」這詞設定為粗體元素，我們就可以使用這巢狀結構。
```
<p>我看倒像塊<strong>綠豆糕</strong></p>
```

以上那段程式碼就會像是這樣：
<p>我看倒像塊<strong>綠豆糕</strong></p>

### 空元素(Empty Element)
雖然我們說元素的組成為起始標籤、結尾標籤、內容，但HTML裡有種叫做「空元素」的存在。
它只有起始標籤而沒有結尾標籤、內容。
常見的空元素有：`<br> <hr> <img> <input> <link> <meta>`

舉例：以`<img>`為例(圖片)，它這樣寫
```
<img src='https://i.imgur.com/S2V0o00.jpg'>
```
以上那段程式碼就會顯現為一張圖片如下：
<img src='https://i.imgur.com/S2V0o00.jpg'>

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

`<p>`： 段落。

`<span>`： 區域，只會佔用自己本身的空間。

### 小結
**HTML**是網頁前端的三大元素之一，剩下兩個是**CSS**以及**JavaScript**，這系列會漸漸地帶大家瞭解以及學習它們，也會教導大家認識使用工程師們常用的開發工具以及檔案管理。
現在我們認識完HTML後，下一篇我們來初戰HTML吧！
<!--@@close-->