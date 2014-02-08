$(function() {
    var switchInterval = 1000;
    var img = $('img');
    var flag = true;

    var interval = setInterval(function() {
        if(flag) {
            img.attr('src', './img/image01.jpg');
        } else {
            img.attr('src', './img/image02.jpg');
        }
        flag = !flag;
    }, switchInterval);
});
