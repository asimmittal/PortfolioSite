/*****************************************************************
 * This module returns a static class with a single method
 * 'getProjectData' --> returns all the project data needed
 * to render the main page
 *****************************************************************/

module.exports = (function () {

    /************************************************************
        * A singleton that stores and manages the project 
        * data. The data is stored, filtered and select
        * functionality is exposed using getters / setters
    *************************************************************/
    var StoreProjectData = function () {

        // use a bunch of vars to specify base paths, that can be
        // easily changed later
        var basePathToTiles = "images/tiles";
        var basePathToProjects = "projects"

        // the actual list of project meta data
        var projects = [
            {
                title: "Ximble",
                tagline: "Scheduling + Time tracking platform",
                img: "nimble_title.jpg",
                url: "sample.html",
                client: "Nimble Software",
                year: 2015,
                domains: ['ux design'],
                skills: ['axure','sketch','adobe cs']
            },
            {
                title: "Emmersiv",
                tagline: "Therapeutic Games for Autistic kids",
                img: "emmersiv_title.jpg",
                url: "emmersiv.html",
                client: "Westhealth Inst.",
                year: 2015,
                domains: ['ux design','game dev','software dev','project management'],
                skills: ['c#','unity3d','python','javascript','highcharts','android']
            },
            {
                title: "Secret Menu",
                tagline: "Mobile app for foodies on the go",
                img: "secretmenu_title.jpg",
                url: "sample.html",
                client: "Emirates Hackathon",
                year:2013,
                domains:['ux design','visual design','software dev'],
                skills: ['c#','win phone']
            },
            {
                title: "Synaptic",
                tagline: "Communication tools for Radiology",
                img: "ge_title.jpg",
                url: "sample.html",
                client: "GE Healthcare",
                year: 2012,
                domains: ['software dev','project management'],
                skills: ['javascript','highcharts']
            },
            {
                title: "DepthSelect",
                tagline: "Leveraging pressure to resolve pick ambiguity",
                img: "depthselect_title.jpg",
                url: "sample.html",
                client: "UIST Innovation Contest",
                year: 2012,
                domains:["software dev"],
                skills: ["c++"]
            },
            {
                title: "Kinemed",
                tagline: "Gestural interface for Surgeons",
                img: "kinemed_title.jpg",
                url: "sample.html",
                client: "UPMC Pittsburgh",
                year: 2011,
                domains:["UX design", "software dev"],
                skills: ["C#","WPF","Kinect","Gesture Recognition"]
            },
            {
                title: "Coolstone",
                tagline: "Turn your phone into a multitouch trackpad",
                img: "coolstone_title.jpg",
                url: "sample.html",
                client: "Personal Project",
                year: 2011,
                domains:["software dev"],
                skills: ["android","python"]
            },
            {
                title: "Multitouch++",
                tagline: "Improving multitouch on Android",
                img: "multitouch_title.jpg",
                url: "sample.html",
                client: "Personal Project",
                year: 2011,
                domains:["UX design", "software dev"],
                skills: ["android"]
            }
        ];
        
        this.domains = [];
        this.skills = [];
        
        //Apply some transformations to the data before its usable
        //// 1. transform the 'img' field to point to the absolute path
        //// 2. ensure that all the domain/skills are stored in a separate object for easy access
        
        for(var indexProj in projects){
            
            var eachProj = projects[indexProj];
            
            for(var indexDomain in eachProj.domains){
                var eachDomain = eachProj.domains[indexDomain];
                eachDomain = eachDomain.trim().toLocaleLowerCase();
                if (this.domains.indexOf(eachDomain) == -1) this.domains.push(eachDomain);
            }
            
            for(var indexSkill in eachProj.skills){
                var eachSkill = eachProj.skills[indexSkill];
                eachSkill = eachSkill.trim().toLocaleLowerCase();
                if (this.skills.indexOf(eachSkill) == -1) this.skills.push(eachSkill);
            }
        }

        //// 3. ensure all the paths to image files are absolute
        //// 4. ensure the client field shows client's name and year
        this.projectData = projects.map(function (eachProj) {

            //ensure images and links have absolute paths
            eachProj.img = basePathToTiles + "/" + eachProj.img;
            eachProj.url = basePathToProjects + "/" + eachProj.url

            if (eachProj.hasOwnProperty('year') && eachProj.year != undefined) {
                eachProj.client += " (" + eachProj.year + ")";
            }

            return eachProj;
        });
        
    } //End ProjectDatabase
    
    var instance = new StoreProjectData();
    
    return {
        getProjectData: function (filterSkills, filterDomains) {
            
            // handle empty arguments
            // filter nothing, include all domains + skills
            if(filterSkills == undefined) filterSkills = instance.skills;
            if(filterDomains == undefined) filterDomains = instance.domains;
            
            var result = [];
            
            for(var index in instance.projectData){
                var proj = instance.projectData[index];
                if(hasCommon(proj.domains,filterDomains) || hasCommon(proj.skills,filterSkills))
                    result.push(proj);
            }
            
            return result;
        }
    }
})();

/// Return true if list2 has common elements with list 1
function hasCommon(list1, list2){
    for(var index in list2){
        var item = list2[index];
        if(list1.indexOf(item) >= 0) return true;
    }
    
    return false;
}
