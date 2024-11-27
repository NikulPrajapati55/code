// $(document).ready(function() {
//     $("#hide").click(function() {
//         $("p:first").hide();
//     });
//     $("#show").click(function() {
//         $("p:first").show();
//     });

//     $(".hide").click(function() {
//         $(".helo").hide();
//     });
//     $(".show").click(function() {
//         $(".helo").show();
//     });

//     $("p").dblclick(function() {
//         $(this).hide();
//     });


//     // $("h1").hover(function() {
//     //     alert("go back");
//     //     alert("pleas go back");
//     //     alert("okk go back");
//     //     alert("go back");


//     // });

//     $("input").focus(function() {
//         $(this).css("background-color", "red");
//     });
//     $("input").blur(function() {
//         $(this).css({
//             opacity: '0.5',
//             color: 'yellow',
//         });

//     });
// });
// $(document).ready(function() {
//     $(".on").on({
//         mouseenter: function() {
//             $(this).css("background-color", "red");
//         },
//         mouseleave: function() {
//             $(this).css("background-color", "pink");
//         },
//         click: function() {
//             $(this).css("color", "yellow");
//         }
//     });
// });
// $(document).ready(function() {
//     $(".img").click(function() {
//         $(".about__car").toggle(5000);
//     });

//     $(".about__car").mouseenter(function() {
//         $(this).css("background-color", "lightpink");

//     });
//     $(".about__car").click(function() {
//         $(this).css("color", "red")
//     });

// });
// $(document).ready(function() {
//     // $(".car").click(function() {
//     //     $(".img").fadeOut("slow");
//     // });
//     // $(".car").dblclick(function() {
//     //     $(".img").fadeIn("slow")
//     // });
//     $(".car").click(function() {
//         $("img").animate({ left: '250px' });
//     });
// });
// $(document).ready(function() {
//     $(".btn__slide").click(function() {
//         $("#slide-one").slideToggle("slow");
//         $(".btn__img").toggleClass('active');
//         $(".btn__img").css("transform", "rotate(180deg)");
//         return false;
//     });
// });
$(document).ready(function() {
    // $(".card__list").click(function() {
    //     $(this).addClass("active").siblings().removeClass("active")
    // });
    $(".accordian__trigger").click(function() {
        $(".accordian__trigger").removeClass("active");
        $(".accordian__content").slideUp();
        $(this).next().slideDown();
        $(this).addClass("active");
    });
});