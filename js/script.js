$(document).ready(function () {
    $("#preloader").fadeOut(2000);
    $("body").css({ overflow: "visible" });

    $("#goToTop").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $("#goToTop").fadeIn();
            } else {
                $("#goToTop").fadeOut();
            }
        });
    });

    $("#goToTop input").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
