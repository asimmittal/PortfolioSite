(function(){
    
    console.log("BooYaa!");
    
    // import necessary modules
    var ProjectData = require('./storeProjectData');
    var TileGridRenderer = require('./reactTiles');
    var MenuHandler = require('./menuToggle');
    var ProjectPageLoader = require('./projectLoader');

   
    var tileContainer = document.getElementById('projectContainer');
    var projects = ProjectData.getProjectData();
    
    setTimeout(function(){
        TileGridRenderer.renderTiles(projects,tileContainer);
        MenuHandler.init();
    },300);
    
    ProjectPageLoader.setup();

})();



