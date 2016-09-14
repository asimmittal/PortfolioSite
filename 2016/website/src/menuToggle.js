module.exports = (function(){
    
    var $ = require('jquery');

    //initial state
    var isMenuVisible = false;
    
    var showMenu = function(){
        if(isMenuVisible == false){
            $('#tiles').animate({top: "+=140"},120,'linear');
            isMenuVisible = true;
        }
    };
    
    var hideMenu = function(){
        if(isMenuVisible == true){
            $('#tiles').animate({top: "-=140"},120,'linear');
            isMenuVisible = false;
        }
    }
    
    // function to toggle the menu visibility. If hidden, show it
    // if visible, hide it
    var toggleMenuVisibility = function(e){
        if(isMenuVisible == true) hideMenu();
        else showMenu();
    }
    
    
    // return an object that simply enables/disables the
    // events on the menu toggle
    return {
        
        enable: function(){
            $('#menuToggle').click(toggleMenuVisibility);
            $(window).resize(hideMenu);
        },  
        
        disable: function(){
            $('#menuToggle').click(null);
        }
    };
})();


