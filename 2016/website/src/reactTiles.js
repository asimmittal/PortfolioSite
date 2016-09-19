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
var EventHandler = require('./projectLoader');

// ProjectTile
// Basically its a single column in a responsive bootstrap container
var ProjectTile = React.createClass({
    
    /// No real state needed, this is a passive component
    /// clicking it will simply open another page
    getInitialState: function(){
        return {isHovered: false};
    },
    
    launchProject: function(event){
        var project = this.props.project;
        EventHandler.actionLoadProject(project,event);
    },
    
    hover: function(event){
        this.setState({isHovered: true});
    },
    
    leave: function(event){
        this.setState({isHovered: false});
    },
    
    /// Render method
    render: function(){
        
        // the project this tile must represent must be
        // passed in as a prop. Must contain (at least)
        // a tagline and a title
        var project = this.props.project;
        var width = this.props.widthStyle;
        
        //this applies a style sheet that helps with the "zoom on hover" effect
        var scaleImageCSS = (this.state.isHovered == true)? 'scaleUpTileImage':'scaleDownTileImage';
        var slideMetaCSS = (this.state.isHovered == true)? 'slideUpTileMeta':'slideDownTileMeta';
        
        //this applies the actual project tile image to the background
        var divStyleForImage = {
            backgroundImage: 'url(' + project.img + ')'   
        }
        
        // return the DOM for this component
        return (
            // 'col-md-4' is a responsive column (bootstrap)
            // 'tile' applies the custom style for this div
            <a href="#work">
            <div className={width + " tile"} onClick={this.launchProject} 
                        onMouseEnter={this.hover}
                        onMouseLeave={this.leave}>
                <div className={"image " + scaleImageCSS} style={divStyleForImage}></div>
                <div className={"projMeta " + slideMetaCSS}>
                    <p className="projTitle">{project.title}</p>
                    <p className="projDescr">{project.tagline}</p>
                    <p className="projSep">--</p>
                    <p className="projClient">{project.client}</p>
                </div>
            </div>
            </a>
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
        
        var bootstrapColStr = 'col-md-6';
        
        // return the DOM for each tile rendered using a ProjectTile component
        return (
            <div className="row">
            {
                this.props.projects.map(function(proj,index){
                    var appliedWidthStyle = bootstrapColStr
                    return (<ProjectTile key={index} project={proj} widthStyle={appliedWidthStyle}/>)
                })
            }
            </div>
        );
    }
});

// Returns a static class with a single method 'renderTiles' that
// renders the tiles based on project data into the specified container
module.exports = (function(){
    return {
        renderTiles: function(data,container){
            if(data && container)
                ReactDOM.render(<TileGrid projects={data}/>,container);
        }
    }
})();
                        