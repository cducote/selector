import React, { Component } from 'react';
import unit from '../Images/units/unit.png'

class testmap extends Component {
    render() {
        return (
            <div>
                <div class="container">

<div class="pyramid">
  <img src={unit} usemap="#Map" alt='ssd' />

  <map name="Map" id="Map">
      <area alt='!' href="#" shape="poly" class="brick 1" coords="669,0,405,268,931,265" />
      <area alt='!' href="#" shape="poly" class="brick 2" coords="399,269,681,268,673,468,227,455" />
      <area alt='!' href="#" shape="poly" class="brick 3" coords="685,267,934,267,1134,473,676,468" />
      <area alt='!' href="#" shape="poly" class="brick 4" coords="220,458,33,641,378,640,540,465,224,458" />
      <area alt='!' href="#" shape="poly" class="brick 5" coords="542,467,380,643,975,641,802,471,547,467" />
      <area alt='!' href="#" shape="poly" class="brick 6" coords="809,473,1137,476,1315,645,980,642,811,472" />

  </map>
</div>

</div>

<div class="selection">
<p>click a brick</p>
</div>
                
            </div>
        );
    }
}

export default testmap;