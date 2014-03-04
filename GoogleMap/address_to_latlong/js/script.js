var latitude; // 計算した緯度を表示する span タグ
var longitude; // 計算した経度を表示する span タグ
var failure; // 該当する緯度・経度が見つからなかった場合に表示する span タグ

$(function() {
	latitude = $('#latitude');
	longitude = $('#longitude');
	failure = $('#failure');
	var geocoder = new google.maps.Geocoder();

	// 初期表示
	var address = $('#address').val();
	geocoder.geocode({'address': address}, callbackRender);

	// 住所が入力された場合の対応
	$('#address').change(function(event) {
		address = $(this).val();
		geocoder.geocode({'address': address}, callbackRender);
	});
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
		latitude.text(results[0].geometry.location.d);
		longitude.text(results[0].geometry.location.e);
		failure.text('');

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
	} else {
		latitude.text('');
		longitude.text('');
		failure.text('指定した住所に該当する緯度・経度は見つかりませんでした。');
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
