$(document).ready(function () {
        $("#btn-sound-ctrl-on").click(
            function () {
                $(this).toggleClass("btn-sound-ctrl-off");
                $("#introVideo").prop('muted', !$("#introVideo").prop('muted'));
                return;
                $("#introVideo").removeProp('muted', $("#introVideo").prop('muted'));
            }
        );
    }
);
