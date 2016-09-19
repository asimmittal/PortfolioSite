module.exports = (function(){
    
    var $ = require('jquery');
    var lastProject = null;
    
    
    // this will monitor when the back button on the browser is pressed
    // and how to handle visibility of the project view when it is
    var engageBackButton = function(){
        window.onhashchange = function(){
            var isProjVisible = (($("#projArea").css('display')) == 'none') ? false:true;
            if(isProjVisible) unloadProjectPage();
        }
    }
    
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
        
        //remove the handler for the back button
        window.onhashchange = null;
        
        //if the user used "X" to close the proj view, manage the url in the
        //browser's address bar appropriately
        if(window.location.hash.indexOf("#") >= 0){
            window.history.back();        
        }
        
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
            
            $("#projContent").load(project.url,function(){
                
                //show the project area
                $("#projArea").show();                      

                //start the animations
                $('#projArea').animate({opacity:1},30);                         //opacity anim
                $("#projArea").animate({width: '100%'}, 100);                   //animate its width
                $("#projArea").animate({height: '100%'}, 100,function(){        //and height
                    $("#projContent").animate({opacity: '1'}, 400);             //when complete, animate content
                    $("#portfolio").css('overflow','hidden');                   //disable scrolling on the tileGrid
                    $("#projClose").show();                                     //show the "X" on top right

                    //the project area is now visible, make sure we manage the pressing of the
                    //back button in the browser ourselves. The user may not always use the "X"
                    //to close the project, instead he/she might press the back button on the 
                    //browser to return to the tile grid
                    engageBackButton();                                       
                }); 
            });
        },
        
        //external wrapper for unloading the project content
        actionUnloadProject: function(){
            unloadProjectPage();
        }
    };
    
})();