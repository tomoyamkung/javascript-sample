$(function() {
	var address = "東京都墨田区押上１−１−２";
	new google.maps.Geocoder().geocode({'address': address}, callbackRender);
		// Geocoder.geocode 関数に住所とコールバック関数を渡す
});

/**
 * ジオコーダの結果を取得したときに実行するコールバック関数。
 * 
 * この関数内で GoogleMap を出力する。
 * 
 * @param results ジオコーダの結果
 * @param status ジオコーディングのステータス
 * 
 */
function callbackRender(results, status) {
	if(status == google.maps.GeocoderStatus.OK) {
		var options = {
			zoom: 18,
			center: results[0].geometry.location, // 指定の住所から計算した緯度経度を指定する
			mapTypeId: google.maps.MapTypeId.ROADMAP // 「地図」で GoogleMap を出力する
		};
		var gmap = new google.maps.Map(document.getElementById('map-canvas'), options);
			// #map-canvas に GoogleMap を出力する
		new google.maps.Marker({map: gmap, position: results[0].geometry.location});
			// 指定の住所から計算した緯度経度の位置に Marker を立てる

		adjustMapSize();
	}
}

/**
 * GoogleMap を表示する部分のサイズを調整する。
 * 
 */
function adjustMapSize() {
	var mapCanvas = $('#map-canvas');
	var marginBottom = 5; // CSS に定義してある margin の値
	mapCanvas.css("height", ($(window).height() - mapCanvas.offset().top - marginBottom) + "px");
}
