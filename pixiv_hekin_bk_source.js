// 將註解次行的程式碼存成書籤然後在 pixiv 的插圖頁面啟動。
// 這只是個啟動器，
// 會動態載入真正的程式碼（ pixiv_hekin.js ），載入的位置記得要修改
javascript:if(location.href.match(&quot;www.pixiv.net/member_illust.php&quot;)){if(!document.__hekinLoaded__){var%20e=document.createElement(&quot;script&quot;);e.setAttribute(&quot;language&quot;,&quot;javascript&quot;);e.setAttribute(&quot;charset&quot;,&quot;utf-8&quot;);e.setAttribute(&quot;src&quot;,&quot;https://googledrive.com/host/0B80HrwML0t-jYVJuUnlfS3d1ZFE&quot;);document.body.appendChild(e);void (0)}};

/**
 * 
 * 原始格式在這裡
 * 要載入的 JS 碼放在 src 後面的網址裡頭
 * 
if(location.href.match("www.pixiv.net/member_illust.php")){
	if(!document.__hekinLoaded__){
		var e=document.createElement("script");
		e.setAttribute("language","javascript");
		e.setAttribute("charset","utf-8");
		e.setAttribute("src","https://googledrive.com/host/0B80HrwML0t-jYVJuUnlfS3d1ZFE");
		document.body.appendChild(e);
		void(0);
	}
}

*/
