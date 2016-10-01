$(document).ready(function() {
    $(".sub-menu").mouseenter(
        function() {
            $(this).animate({
                backgroundColor: "#7ea305",
            }, 200);
        });
    $(".sub-menu").mouseleave(function() {
        $(this).animate({
            backgroundColor: "#252599",
        }, 200);
    });
});
