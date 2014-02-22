$(function() {
	// Underscore.js の `template` メソッドを使って option タグを追加
	var template = _.template($("#option_template").text());
	var pulldown = $('#list');
	_.each(mp3s, function(mp3) {
		var tag = template({filename: mp3});
		pulldown.append(tag);
	})

	// 選択された項目の mp3 を自動再生
	pulldown.change(function() {
		var x = pulldown.find("option:selected").text();
		$('#player').attr('src', x).attr('autoplay', 'autoplay');
	});
});
