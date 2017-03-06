$(document).ready(function () {
        $("#btn-sound-ctrl-on").click(
            function () {
                $(this).toggleClass("btn-sound-ctrl-off");
                $("#introVideo").prop('muted', !$("#introVideo").prop('muted'));
                return;
                $("#introVideo").removeProp('muted', $("#introVideo").prop('muted'));
            }
        );
        $("#btn-scroll-top img").click(
            function(){
                $('html, body').animate({
                    scrollTop: $("#section-slideshow").offset().top
                }, 500);
            }
        );
    $("#btn-scroll-bot").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
    }
);
