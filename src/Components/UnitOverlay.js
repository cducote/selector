import React, { Component } from 'react';
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'

let MAP = {
	name: 'my-map',
	areas: [
		{name: '1', shape: 'rect', coords: [564,153,352,10], preFillColor: 'green'},
		{name: '2', shape: 'rect', coords: [769,14,980,150], preFillColor: 'pink'},
		{name: '3', shape: 'rect', coords: [1154,10,1371,151], preFillColor: 'yellow'},
		{name: '4', shape: 'rect', coords: [320,368,535,509], preFillColor: 'red'},
        {name: '5', shape: 'rect', coords: [1387,307,1600,443], preFillColor: 'orange'},
        {name: '6', shape: 'rect', coords: [367,997,584,1136], preFillColor: 'teal'},
        {name: '7', shape: 'rect', coords: [804,1001,1019,1135], preFillColor: 'purple'},
        {name: '8', shape: 'rect', coords: [1254,1001,1466,1136], preFillColor: 'lightgreen'},
        {name: '9', shape: 'rect', coords: [516,1294,732,1428], preFillColor: 'darkred'},
        {name: '10', shape: 'rect', coords: [1034,1292,1246,1428], preFillColor: 'blue'}
	]
};

class UnitOverlay extends Component {
    render() {
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1440} imgWidth={1920} map={MAP}/>
            {/* somehow this works */}
            
        </div>
        );
    }
}

export default UnitOverlay;