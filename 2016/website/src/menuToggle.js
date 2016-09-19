module.exports = (function(){
    
    var $ = require('jquery');

    //initial state
    var isMenuVisible = false;
    $("#menu").hide();
    
    var menuSlideOut = function(){
        if(isMenuVisible == false){
            $('#tiles').animate({top: "+=140"},120,'linear');
            isMenuVisible = true;
        }
    };
    
    var menuSlideUp = function(){
        if(isMenuVisible == true){
            $('#tiles').animate({top: "-=140"},120,'linear');
            isMenuVisible = false;
        }
    }
    
    // function to toggle the menu visibility. If hidden, show it
    // if visible, hide it
    var toggleMenuVisibility = function(e){
        if(isMenuVisible == true) menuSlideUp();
        else menuSlideOut();
    }
    
    
    // return an object that simply enables/disables the
    // events on the menu toggle
    return {
        
        init: function(){
            $("#menuToggle").css('visibility','visible');
            $('#menuToggle').click(toggleMenuVisibility);
            $("#menu").show();
            $(window).resize(menuSlideUp);
        }
    };
})();


