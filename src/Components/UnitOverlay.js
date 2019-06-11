import React, { Component } from 'react';
import unit from '../Images/units/unit.png'


class UnitOverlay extends Component {
    render() {
        return (
        <div className='unitOverlay'>
            <img alt="unitOverlay" src={unit} width="1000" useMap="#image-map"/>
                <map name="image-map">
                    <area target="_blank" alt="bedroom" title="bedroom" href="http://christopherducote.com/" coords="353,11,562,151" shape="rect"/>
                </map>
        </div>
        );
    }
}

export default UnitOverlay;