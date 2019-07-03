import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Checkout from "./Components/Checkout";

class App extends Component {
  state = {
    currentUser: {
      name: "no user",
      cart: []
    }
  };
  updateCart = lightFixtures => {
    
    console.log( '!!! cart lifted !!!' + lightFixtures )
  }

  updateUser = userInfo => {
    this.setState({ currentUser:
       {
         name: userInfo,
         cart: []
    } 
  }); 
};

  render() {
    const LandingComponent = (props) => <Landing { ...props } updateUser={this.updateUser} updateCart={this.updateCart} currentUser={this.state.currentUser} />
    
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" render={LandingComponent} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/*" component={Landing} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
