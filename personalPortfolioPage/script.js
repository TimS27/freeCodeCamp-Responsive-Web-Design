$(window).scroll(function() {
    var features_top = $("#projects").offset().top;   
    var top_of_window = $(window).scrollTop();
    if (top_of_window >= features_top) {   
        $(".navbar").show();
    } else {   
        $(".navbar").hide();
    }
});
