// 這段程式碼會需要 jQuery ，由於 pixiv 有使用 jQuery 所以可以正常執行
// 但是比較好的作法還是應該先判斷須不需要動態載入 jQuery 

document.__hekinLoaded__=true; // 建立標記避免重複執行
if(location.search.match('mode=medium')) {

	// 在單一作品頁
	var r  = $('.rated-count').text(),	// 評價次數
		v  = $('.view-count').text(),	// 閱覽次數
		s  = $('.score-count').text(),	// 得分
		a  = (r==0)? 0 : s/r,			// 平均得分
		af = (a==10)? a : a.toFixed(2),	// 平均得分四捨五入至小數點二位
		g  = (r==0)? 0 : v/r,			// 幾閱一評
		gf = g.toFixed(2);				// 幾閱一評四捨五入至小數點二位

		// 將資料加上格式
	var q  = '<dt>閲／評</dt><dd title="' + g + '">' + gf + '</dd>';
		q += '<dt>平均点</dt><dd title="' + a + '">' + af + '</dd>';

	// 將 q 插入到分數下方。	
	$('div.user-reaction').append('<section class="score">' + q + '</section>');

} else {
	// 在作品管理頁
	$('.display-report').each(function() { 					// 輪巡處理每個作品縮圖區塊

		var r  = $('.rating-count .count',this).text(), 	// 評價次數
			v  = $('.views .count',this).text(), 			// 閱覽次數
			s  = $('.score .count',this).text(), 			// 得分
			a  = (r==0)? 0 : s/r, 							// 平均得分
			af = (a==10)? a : a.toFixed(2), 				// 平均得分四捨五入至小數點二位
			g  = (r==0)? 0 : v/r, 							// 幾閱一評
			gf = g.toFixed(2); 								// 幾閱一評四捨五入至小數點二位

			// 將資料加上格式
		var q  = '<div class="report-link">閲／評<span class="count" title="' + g + '">' + gf + '</span></div>';
			q += '<div class="report-link">平均点<span class="count" title="' + a + '">' + af + '</span></div>';
		
		// 將 q 插入到分數下方
		$('a.views', this).after(q);

	}); /* $('.display-report').each() */

} /* if(location.search.match('mode=medium')) */
