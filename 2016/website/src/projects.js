/*****************************************************************
 * This module returns a static class with a single method
 * 'getProjectData' --> returns all the project data needed
 * to render the main page
 *****************************************************************/

module.exports = (function () {

    var ProjectDatabase = function () {

        // use a bunch of vars to specify base paths, that can be
        // easily changed later
        var basePathToTiles = "images/tiles";

        // the actual list of project meta data
        var projects = [
            {
                title: "Ximble",
                tagline: "Scheduling + Time tracking platform",
                img: "nimble_title.jpg",
                url: "",
                client: "Nimble Software",
                year: 2015
            },
            {
                title: "Emmersiv",
                tagline: "Therapeutic Games for Autistic kids",
                img: "emmersiv_title.jpg",
                url: "",
                client: "Client",
                year: 2015
            },
            {
                title: "Title 3",
                tagline: "Some Description3",
                img: "ge_title.jpg",
                url: "",
                client: "Client"
            },
            {
                title: "Title 4",
                tagline: "Some Description3",
                img: "kinemed_title.jpg",
                url: "",
                client: "Client"
            },
            {
                title: "Title 5",
                tagline: "Some Description3",
                img: "secretmenu_title.jpg",
                url: "",
                client: "Client"
            },
            {
                title: "Title 6",
                tagline: "Some Description3",
                img: "depthselect_title.jpg",
                url: "",
                client: "Client"
            }
        ];

        // a method that transforms some of the paths for local assets
        // such as images etc. using the base paths. Returns a list
        // identical to the projects list but with correct absolute
        // paths to the various image assets
        this.getProjects = function () {
            var projectsWithPaths = projects.map(function (eachProj) {

                // a little path transformation for the image attribute
                eachProj.img = basePathToTiles + "/" + eachProj.img;
                
                // transform the "client" field for projects that have
                // valid value for the year field
                if (eachProj.hasOwnProperty('year')) {
                    eachProj.client += " (" + eachProj.year + ")";
                }

                return eachProj;
            });

            return projectsWithPaths;
        }
        
    } //End ProjectDatabase
    
    // create an instance of this DB object
    var myDB = new ProjectDatabase();

    // return a method that returns all the transformed project data
    return {
        getProjectData: function () {
            return myDB.getProjects();
        }
    }
})();
