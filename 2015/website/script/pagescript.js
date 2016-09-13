var resizeFlexComps = function () {
    //resize iframe
    var iframeWidth = $(".embed").width();
    var iframeHeight = iframeWidth * 0.75;
    $(".embed").css("height", iframeHeight);

    //resize slider
    var sliderWidth = $(".imageSlider").width();
    var sliderHeight = sliderWidth * 0.66;
    $(".imageSlider").css("height", sliderHeight);
};

$(window).resize(resizeFlexComps);
$(window).load(resizeFlexComps);

$(function () {
    
    var isAnimating = false;

    /*image slider related*/
    $(".ctrlLeft").click(function () {
        
        //if the slider is animating, don't handle any click events
        if(isAnimating) return false;
        
        //slider isn't animating, indicate that animation is in progress
        isAnimating = true;
        
        //grab the first div in the slider (image div)
        var siblings = $(this).siblings(".img");
        var first = siblings[0];
        
        //check if the slider is on its left most boundary, if yes, do
        //a short bounce animation (rubber banding)
        if ($(first).css("margin-left") == "0px"){
            $(this).siblings(".img").animate({marginLeft: "+=2%"}, 90);
            $(this).siblings(".img").animate({marginLeft: "-=2%"}, 90);
        }
        //if its not, slide the images leftwards
        else $(this).siblings(".img").animate({
            marginLeft: "+=100%"
        }, 180);
        
        setTimeout(function(){isAnimating = false},200);
    });

    $(".ctrlRight").click(function () {
        
        //if the slider is animating, don't handle click events
        if(isAnimating) return false;
        isAnimating = true;
        
        //grab the last div in the slider
        var siblings = $(this).siblings(".img");
        var last = siblings[siblings.length - 1];
        
        //if the slider is on its right most boundary, do
        //a simple bounce animation (rubber banding)
        if ($(last).css("margin-left") == "0px"){
            $(this).siblings(".img").animate({marginLeft: "-=2%"}, 90);
            $(this).siblings(".img").animate({marginLeft: "+=2%"}, 90);
        }
        //if its not, then slide the images rightwards
        else $(this).siblings(".img").animate({
            marginLeft: "-=100%"
        }, 180);
        
        setTimeout(function(){isAnimating = false},200);
    });
});
