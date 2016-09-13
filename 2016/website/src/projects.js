module.exports = function () {

    var basePathToTiles = "images/tiles";

    var projects = [
        {
            title: "Title 1",
            tagline: "Some Description1",
            img: "nimble-title.jpg",
            url: ""
        },
        {
            title: "Title 2",
            tagline: "Some Description2",
            img: "nimble-title.jpg",
            url: ""
        },
        {
            title: "Title 3",
            tagline: "Some Description3",
            img: "nimble-title.jpg",
            url: ""
        }
    ];

    this.getProjects = function () {
        var projectsWithPaths = projects.map(function (eachProj) {
            return {
                title: eachProj.title,
                tagline: eachProj.tagline,
                img: basePathToTiles + "/" + eachProj.img,
                url: eachProj.url
            }
        });

        return projectsWithPaths;
    }
}
