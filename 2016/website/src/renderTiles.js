/***************************************************************************
    * Exports:
        - A class that has a method to render the tileGrid
    
    * Description:
        This file contains two react components - ProjectTile and TileGrid
            i.  ProjectTile represents a single project
            ii. TileGrid contains all the ProjectTile components 
****************************************************************************/

// Get React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');

// ProjectTile
// Basically its a single column in a responsive bootstrap container
var ProjectTile = React.createClass({
    
    /// No real state needed, this is a passive component
    /// clicking it will simply open another page
    getInitialState: function(){
        return null;
    },
    
    /// Render method
    render: function(){
        
        // the project this tile must represent must be
        // passed in as a prop. Must contain (at least)
        // a tagline and a title
        var project = this.props.project;
        var width = this.props.widthStyle;
        var divStyleForImage = {
            backgroundImage: 'url(' + project.img + ')'   
        }
        
        // return the DOM for this component
        return (
            
            // 'col-md-4' is a responsive column (bootstrap)
            // 'tile' applies the custom style for this div
            <div className={width + " tile"} style={divStyleForImage}>
                <div className="projMeta">
                    <p className="projTitle">{project.title}</p>
                    <p className="projDescr">{project.tagline}</p>
                    <p className="projSep">--</p>
                    <p className="projClient">{project.client}</p>
                </div>
            </div>
        );
    }
});


// TileGrid
// Basically a group of ProjectTile components rendered within
// a bootstrap fluid container / row
var TileGrid = React.createClass({
    
    /// nothing going on here
    getInitialState: function(){
        return null;
    },
    
    /// Render method
    render: function(){
        
        // the list of projects is passed as a prop
        var projects = this.props.projects;
        var counter = 0;
        var widthStyle_2 = 'col-md-6';
        var appliedWidthStyle = widthStyle_2;
        
        // return the DOM for each tile rendered using a ProjectTile component
        return (
            <div className="row">
            {
                projects.map(function(proj,index){
                    return (<ProjectTile key={index} project={proj} widthStyle={appliedWidthStyle}/>)
                })
            }
            </div>
        );
    }
});

// Return a method that basically draws the tile grid in the specified
// container using the given data
module.exports = function(){
    this.render = function(data,container){
        ReactDOM.render(<TileGrid projects={data}/>, container);
    }
};
