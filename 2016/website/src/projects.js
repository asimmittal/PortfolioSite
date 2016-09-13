module.exports = function () {

    var basePathToTiles = "images/tiles";

    var projects = [
        {
            title: "Ximble",
            tagline: "Scheduling + Time tracking platform",
            img: "nimble_title.jpg",
            url: "",
            client:"Nimble Software",
            year: 2015
        },
        {
            title: "Emmersiv",
            tagline: "Therapeutic Games for Autistic kids",
            img: "emmersiv_title.jpg",
            url: "",
            client:"Client",
            year: 2015
        },
        {
            title: "Title 3",
            tagline: "Some Description3",
            img: "ge_title.jpg",
            url: "",
            client:"Client"
        },
        {
            title: "Title 4",
            tagline: "Some Description3",
            img: "kinemed_title.jpg",
            url: "",
            client:"Client"
        },
        {
            title: "Title 5",
            tagline: "Some Description3",
            img: "secretmenu_title.jpg",
            url: "",
            client:"Client"
        },
        {
            title: "Title 6",
            tagline: "Some Description3",
            img: "depthselect_title.jpg",
            url: "",
            client:"Client"
        }
    ];

    this.getProjects = function () {
        var projectsWithPaths = projects.map(function (eachProj) {
            
            //a little path transformation for the image attribute
            eachProj.img = basePathToTiles + "/" + eachProj.img;
            if(eachProj.hasOwnProperty('year')){
                eachProj.client += " (" + eachProj.year + ")";
            }
            
            return eachProj;
        });

        return projectsWithPaths;
    }
}
