module.exports = (function(){
    
    var $ = require('jquery');
    var lastProject = null;
    
    //setup the CSS for various component
    var setupBeforeLoad = function(){
        $("#projArea").css('width','0px');          //ensure projArea is 0 width
        $("#projArea").css('height','0px');         //and 0 height
        $("#projArea").css('left','0px');           //flushed against the left edge
        $("#projArea").css('right','0px');          //flushed against the right edge
        $("#projArea").css('top','0px');            //flushed against the top edge
        $("#projArea").css('opacity','0');          //0 opacity
        
        $("#projContent").css('opacity','0');       //ensure content cannot be seen
        $("#projClose").hide();                     //ensure "X" is hidden
    }
    
    //method to unload the project page out of view
    var unloadProjectPage = function(){
        $("#projContent").animate({opacity:'0'},120,function(){ //fade the content out of view
            $("#projArea").animate({height:'0%'},200);          //animate the height back to 0
            $("#portfolio").css('overflow','auto');             //enable scrolling on TileGrid
            $("#projClose").hide();                             //hide the "X" in top right corner
        });
    }
    
    //event handler for "X" on the project area
    $("#projClose").click(function(){
        unloadProjectPage();
    });
    
    
    //stuff that's shared with the rest of the app
    return{
        
        setup: function(){
            setupBeforeLoad();
        },
        
        actionLoadProject: function(project,event){
            
            setupBeforeLoad();
            
            //show the project area
            $("#projArea").show();                      
            
            //start the animations
            $('#projArea').animate({opacity:1},30);                         //opacity anim
            $("#projArea").animate({width: '100%'}, 100);                   //animate its width
            $("#projArea").animate({height: '100%'}, 100,function(){        //and height
                $("#projContent").animate({opacity: '1'}, 400);             //when complete, animate content
                $("#portfolio").css('overflow','hidden');                   //disable scrolling on the tileGrid
                $("#projClose").show();                                     //show the "X" on top right
            });
        },
        
        //external wrapper for unloading the project content
        actionUnloadProject: function(){
            unloadProjectPage();
        }
    };
    
})();