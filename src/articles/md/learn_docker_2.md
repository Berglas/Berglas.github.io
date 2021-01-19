---
title: learn_docker_2
cTitle: Docker教學2：如何使用Docker建立MySQL 8的環境以及管理連線設定
date: 2020-12-11
depiction: 在Windows上詳細的Docker容器建置。上一篇我們教學如何安裝Docker，本篇會教學如何使用Docker找到鏡像檔(image)、下載鏡像檔(image)、啟動鏡像檔(image)封裝成容器(container)，以安裝MySQL 8為例實際詳細的步驟，也會順便教導如何在Docker內開啟MySQL遠端訪問許可權(對外連線)。
tag: [Docker, MySQL]
pre: learn_docker_1
next: learn_docker_3
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
![](https://i.imgur.com/o4wo0mb.jpg)

<p class='depiction'>@@depiction</p>
<!--@@close-->

<!--@@block=content-->
### 前言
還沒學過安裝Docker的可以參考上一篇。

<a class='self-article' href ='./dest/articles/2020/12/learn_docker_2.html'>Docker教學1：在Windows Docker安装教學、初步設定</a>

在開始安裝前我們會用到以下指令，這邊簡單介紹指令。
docker search，在docker hub中找尋鏡像檔(image)，XXX為鏡像檔名。
```
docker search XXX
```
docker pull，在docker hub中下載名為XXX之鏡像檔(image)。
```
docker pull XXX
```

docler images，列出本機內已安裝的鏡像檔(image)。
```
docler images
```

docker run，將鏡像檔建置為容器，下方會以MySQL作範例詳細介紹。
```
docker run ~省略
```

### 如何建置一個容器
<ol>
<li>
使用系統管理者身分開啟命令提示字元
<br>
</li>

<li>
在Docker Hub中尋找鏡像檔(image)，這邊我們要找尋MySQL，在終端畫面中輸入指令：

```
docker search mysql
```

找尋結果如下圖：
![](https://i.imgur.com/4ldyrBl.jpg)
</li>

<li>
找到我們要的鏡像檔(image)後，在終端畫面中輸入指令：

```
docker pull mysql
```

等待下載後，在終端畫面中輸入指令：
```
docker images
```
結果如下圖：

![](https://i.imgur.com/Es9gmHm.jpg)
</li>

<li>
下載完成後，接下來我們就要來啟動它製作成容器(container)，在終端畫面中輸入指令：

```
docker run --name mysql-latest -v D:/Docker/mysql/mysql-latest/custom:/etc/mysql/conf.d -v D:/Docker/mysql/mysql-latest/data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest
```

![](https://i.imgur.com/17Y7HFn.jpg)
Port開通會要求防火牆權限，選擇允許存取。

補充說明：
```
--name mysql-latest
▲ --name xxxx 為容器名稱，可自定義。

-v D:/Docker/mysql/mysql-latest/custom:/etc/mysql/conf.d
▲ -v 為放置鏡像檔的路徑(本機)，與要鏡像出來的檔案(容器內)，以「:」分隔。

-p 3306:3306
▲ -p 將本機內的port關聯至容器內的port。

-e MYSQL_ROOT_PASSWORD=123456
▲ -e 容器環境參數變數設定。

-d mysql:latest
▲ -d 讓Container在背景執行。
```
</li>

<li>
這樣容器(container)就完成了，初次建立完後會自動啟用容器(container)，這時候MySQL的服務就可以開始使用了，但因為MySQL 8改為需要自行建立使用者和設定密碼，然後才能遠端連線，所以下一步會教大家怎麼設定。

![](https://i.imgur.com/L3M6lgn.jpg)
</li>

<li> 
快按兩下打開容器後，點選右上CLI按鈕，開啟容器終端環境(bash)

![](https://i.imgur.com/9AKKzoY.jpg)
</li>

<li> 
使用root權限登入，在終端畫面中輸入指令：

```
mysql -u root -p
```
此時會請你輸入密碼，密碼為一開始docker run指令所輸入的，本文為123456，輸入密碼時沒有任何反應產生是正常的，請安心輸入後按Enter。

![](https://i.imgur.com/CcZaLlS.jpg)
</li>

<li>
建立新帳號且對外開放連線，在終端畫面中依序輸入指令：

帳號/密碼，test/test123(可自定義)。
```
CREATE USER 'test'@'%' IDENTIFIED BY 'test123';
```

```
GRANT ALL ON *.* TO 'test'@'%'  WITH GRANT OPTION;
```

```
ALTER USER 'test'@'%' IDENTIFIED WITH mysql_native_password BY 'test123';
```


![](https://i.imgur.com/xvsbIvc.jpg)
三個都OK之後，我們就可以開始使用MySQL資料庫囉。
</li>

<li>測試連線，參考如下圖：

![](https://i.imgur.com/iGfqfdt.jpg)
完成囉~
</li>
</ol>

### 結論
這樣就完成一個Docker的容器囉，快去嘗試著建置吧！
下篇會補充教學在MySQL遇到資料表、欄位發生大小寫敏感時的解決方式。


<!--@@close-->