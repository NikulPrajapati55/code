 $(document).ready(function() {
     $(".tab-nav li a").click(function() {
         $(".tab-nav li a").removeClass("active");
         $(this).addClass("active")
         var tabid = $(this).attr("href");
         $(".tab__content").hide()
         $(tabid).show();
         return false;
     });



 });