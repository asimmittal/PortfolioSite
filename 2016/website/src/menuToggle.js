var $ = require('jquery');

var MenuToggler = function(){
    
    this.enable = function(){
        
        var isMenuVisible = false;
        
        //attach a click handler to the menu toggle control
        $('#menuToggle').click(function(e){
            if(isMenuVisible == false){
                $('#tiles').animate({top: "+=140"},120,'linear');
                isMenuVisible = true;
            }
            else{
                $('#tiles').animate({top: "-=140"},120,'linear');
                isMenuVisible = false;
            } 
        });
    }
};

module.exports = MenuToggler;