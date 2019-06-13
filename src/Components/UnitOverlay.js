import React, { Component } from 'react';
import unitModal from './unitModal'
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'

let MAP = {
	id: 'map', name: 'my-map',
	areas: [
		{id: 1, shape: 'rect', coords: [564,153,352,10], preFillColor: 'clear'},
		{id: 2, shape: 'rect', coords: [769,14,980,150], preFillColor: 'pink'},
		{id: 3, shape: 'rect', coords: [1154,10,1371,151], preFillColor: 'yellow'},
		{id: 4, shape: 'rect', coords: [320,368,535,509], preFillColor: 'red'},
        {id: 5, shape: 'rect', coords: [1387,307,1600,443], preFillColor: 'orange'},
        {id: 6, shape: 'rect', coords: [367,997,584,1136], preFillColor: 'teal'},
        {id: 7, shape: 'rect', coords: [804,1001,1019,1135], preFillColor: 'purple'},
        {id: 8, shape: 'rect', coords: [1254,1001,1466,1136], preFillColor: 'lightgreen'},
        {id: 9, shape: 'rect', coords: [516,1294,732,1428], preFillColor: 'darkred'},
        {id: 10, shape: 'rect', coords: [1034,1292,1246,1428], preFillColor: 'blue'}
	]
};

class UnitOverlay extends Component {

    state = {
        hoveredArea: false,
        buttons: {
            id: [1,2,3,4,5,6,7,8,9,10]
        }
    }
    
    handleClick() {
        console.log('click happened')
    }
    enterArea(area) {
        this.setState({ hoveredArea: area });
    }
    
    leaveArea(area) {
        this.setState({ hoveredArea: null });
    }

    render() {
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP} onClick={()=> this.handleClick()}/>
            {/* somehow this works */}
            
        </div>
        );
    }
}

export default UnitOverlay;