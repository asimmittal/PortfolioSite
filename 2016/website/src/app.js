//import necessary modules
var ProjectData = require('./projects');
var TileGridRenderer = require('./renderTiles');
var MenuToggler = require('./menuToggle');

//get all the project data
var projects = new ProjectData().getProjects();

//populate the grid of project tiles
var tileContainer = document.getElementById('projectContainer');
new TileGridRenderer().render(projects, tileContainer);

//enable menu toggling
new MenuToggler().enable();