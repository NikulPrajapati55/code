$(document).ready(function() {
    $(".modal__open").click(function() {
        var tabid = $(this).attr("href")
        $(tabid).addClass("show");
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("show");
    });
    return false
});