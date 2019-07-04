import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
// import Checkout from "./Components/Checkout";
import NavComponent from './Components/NavComponent'

class App extends Component {
  state = {
    currentUser: {
      name: "no user",
      cart: []
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
updateLight = lightCount => {
  this.setState({ light: {
    count: lightCount
  } })
}

  render() {
    const LandingComponent = (props) => <Landing { ...props } 
      updateUser={this.updateUser} 
      currentUser={this.state.currentUser}
      updateLight={this.updateLight} />
    
    return (
      <Router>
        <NavComponent/>
        <>
          <Switch>
            <Route exact path="/" render={LandingComponent} />
            {/* <Route exact path="/checkout" component={Checkout} /> */}
            <Route path="/*" component={Landing} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
