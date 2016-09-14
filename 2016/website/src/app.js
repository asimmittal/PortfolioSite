(function(){
    
    console.log("BooYaa!");
    
    // import necessary modules
    var ProjectData = require('./projects');
    var TileGridRenderer = require('./renderTiles');
    var MenuHandler = require('./menuToggle');
    var ProjectPageLoader = require('./projectLoader');

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
    
    // Setup the project page
    //-------------------------
    // this 'project page' refers to a div in the body that is usually hidden
    // when a project tile is clicked, it is animated into view and the content
    // for that project is dynamically loaded into it. Let's perform some setup 
    ProjectPageLoader.setup();

})();



