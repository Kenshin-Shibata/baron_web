$(function () {
    var $width = 640;
    var $height = 300;
    var $interval = 3000; //切り替わりの間隔(ミリ秒)
    var $fade_speed = 1000; //フェード処理の速さ(ミリ秒)
    $("#slide ul li").css({ "position": "relative", "overflow": "hidden", "width": $width, "height": $height });
    $("#slide ul li").hide().css({ "position": "absolute", "top": 0, "left": 0 });
    $("#slide ul li:first").addClass("active").show();
    setInterval(function () {
        var $active = $("#slide ul li.active");
        var $next = $active.next("li").length ? $active.next("li") : $("#slide ul li:first");
        $active.fadeOut($fade_speed).removeClass("active");
        $next.fadeIn($fade_speed).addClass("active");
    }, $interval);
});