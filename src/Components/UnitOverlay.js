import React, { Component } from 'react';
import unit from '../Images/units/unit.png'
import ImageMapper from 'react-image-mapper'

var MAP = {
	name: 'my-map',
	areas: [
		{name: '1', shape: 'rect', coords: [25,33,27,300], preFillColor: 'green', fillColor: 'blue'},
		{name: '2', shape: 'rect', coords: [219,118,220,210], preFillColor: 'pink'},
		{name: '3', shape: 'rect', coords: [381,241,383,94], fillColor: 'yellow'},
		{name: '4', shape: 'rect', coords: [245,285,290,285], preFillColor: 'red'},
        {name: '5', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'},
        {name: '6', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'},
        {name: '7', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'},
        {name: '8', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'},
        {name: '9', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'},
        {name: '10', shape: 'rect', coords: [170,100,200,50], fillColor: 'orange'}
	]
};

class UnitOverlay extends Component {
    render() {
        return (
        <div className='unitOverlay'>
            <ImageMapper src={unit} width={1250} map={MAP}/>
            
        </div>
        );
    }
}

export default UnitOverlay;