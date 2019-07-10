import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
// import Checkout from "./Components/Checkout";
import NavComponent from './Components/NavComponent'

class App extends Component {
  state = {
    currentUser: {
      name: "no user",
      cart: [{
        "partnumber": "TEST ME",
        "image": require('./Images/lights/10L27A19M8WD.jpg'),
        "qty": "0"
      }]
    }
  };

  updateUser = userInfo => {
    this.setState({ currentUser:
       {
         name: userInfo,
         cart: []
    } 
  }); 
};

  render() {
    const LandingComponent = (props) => <Landing { ...props } 
      updateUser={this.updateUser} 
      currentUser={this.state.currentUser} />
    
    return (
      <Router>
        <NavComponent/>
        {/* <div className='version'>
          <p>*alpha v1.01*</p>
        </div> */}
        <>
          <Switch>
            <Route exact path="/" render={LandingComponent} />
            {/* <Route path="/*" component={LandingComponent} /> */}
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
