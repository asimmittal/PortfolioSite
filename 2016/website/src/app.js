(function(){
    
    console.log("BooYaa!");
    
    // import necessary modules
    var ProjectData = require('./projects');
    var TileGridRenderer = require('./renderTiles');
    var MenuHandler = require('./menuToggle');


    // Enable menu toggle
    // --------------------
    // This does a bunch of things:
    //  1.  handles click events on the menu toggle icon (hamburger icon)
    //  2.  manages the animation of the "tilesGrid" which in turn reveals or hides
    //      the context menu when viewed in mobile view
    //  3.  If the menu is revealed and window gets reized, it hides the menu

    MenuHandler.enable();

    // Render all the project tiles
    // -----------------------------
    // the data is stored in a module 'projects.js'
    // the project data is rendered as responsive columns in a bootstrap row
    var tileContainer = document.getElementById('projectContainer');
    var projects = ProjectData.getProjectData();
    TileGridRenderer.renderTiles(projects,tileContainer);

})();



