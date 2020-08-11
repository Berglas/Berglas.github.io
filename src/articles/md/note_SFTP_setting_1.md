---
title: note_SFTP_setting_1
cTitle: 在Windows 10架設SFTP(SSH Server)
date: 2020-07-31
depiction: 最近因為實作上需要用到SFTP(SSH File Transfer Protocol)功能，需要自己架設Server測試功能，所以在此記錄一下怎麼架設與設定，以免忘記之餘也順便分享給有需要的朋友們。
tag: [Note]
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
![](https://i.imgur.com/7SVhbTb.jpg)
<p class='depiction'>@@depiction</p>
<!--@@close-->

<!--@@block=content-->
### 前言

SFTP全名為SSH File Transfer Protocol，中文翻譯「安全檔案傳送協定」，是一種資料流連線，提供檔案存取、傳輸和管理功能的網路傳輸協定。由網際網路工程任務組（IETF）設計，透過SSH 2.0 的擴充提供安全檔案傳輸能力[[註]](https://zh.wikipedia.org/wiki/SSH%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)。
因為多了這種安全協定的認證，所以SFTP在傳輸上效率比FTP低，但很適用於需要高安全性傳輸上。

在Windows 10裡，官方已經推出內建擴充的應用方式「OpenSSH」所以接下來將會使用這套來做SSH Server的架設。

### 安裝OpenSSH

1. 進入Windows 設定 
![](https://i.imgur.com/Us5usrX.png)

2. 進入應用程式
![](https://i.imgur.com/bIQCDWS.png)

3. 選用功能
![](https://i.imgur.com/GZrcgCQ.png)


4. 新增功能
![](https://i.imgur.com/Cu66xtA.png)

5. OpenSSH 伺服器(點選安裝)
![](https://i.imgur.com/eRpydnQ.png)

6. 返回上一頁(等待安裝完畢)
![](https://i.imgur.com/HA0NuPI.png)

7. 安裝完成後請重新啟動電腦(重開機)。


### 啟動服務
這邊使用PowerShell來下指令啟動服務，記得以系統管理員身分啟動PowerShell。
![](https://i.imgur.com/aR3y092.png)

1. 啟動「OpenSSH SSH Server」服務，指令如下：
```
Start-Service sshd
```
2. 將「OpenSSH SSH Server」服務設為自動啟用(建議但非必要)，指令如下：
```
Set-Service -Name sshd -StartupType 'Automatic'
```
![](https://i.imgur.com/qnKblcw.png)
3. 確認當前防火牆規則，指令如下：
```
Get-NetFirewallRule -Name *ssh*
```
![](https://i.imgur.com/sSVe4wW.png)

4. 新建立防火牆規則指令如下：
```
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```
![](https://i.imgur.com/Myi3qO2.png)

這樣Server就啟動完成了，現在測試看看。

### 測試
5. 開啟命令提示字元輸入
```
ssh username@servername 
```
username：電腦使用者帳號
servername：電腦IP

連線時會要你輸入密碼，密碼為電腦使用者的密碼，輸入時會沒有任何反應是正常的，為了保密。

第一次連線到伺服器時，應該會看到類似下列的訊息：
```
The authenticity of host 'servername (10.00.00.001)' can't be established.
ECDSA key fingerprint is SHA256:(<a large string>).
Are you sure you want to continue connecting (yes/no)?
```
這邊輸入`yes`


![](https://i.imgur.com/3InbPJl.png)

由於這我ftpUser這使用者有設定讀取權限，所以我用另外一組連線，取得成功畫面供參考，
連線成功後會看到類似下方的標頭，這時候就可以輸入```dir```去觀看路徑內的檔案了。
```
domain\username@SERVERNAME C:\Users\username>
```



![](https://i.imgur.com/xe9Rkep.png)


大功告成囉~

### 總結
在Windows 10裡已經內建OpenSSH擴充服務，不用在像之前依靠第三方軟體去設定，在安裝的過程也沒遭遇到太多問題跟困難，因為官方就有設定文件了，個人覺得快速便利，如果有需要的朋友可以參考，也請各前輩可以留言討論更好的方法來跟大家一起分享。

下篇會來講怎麼設定使用者對於檔案(路徑)的權限管理。
<!--@@close-->