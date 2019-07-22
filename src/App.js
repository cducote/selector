import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
// import Checkout from "./Components/Checkout";
import NavComponent from './Components/NavComponent'

class App extends Component {
  state = {
    count: 0,
    currentUser: {
      name: "no user",
      cart: []
    },
    
  };

  updateUser = userInfo => {
    this.setState({ currentUser:
       {
         name: userInfo,
         cart: []
    } 
  }); 
};
  updateCartCountNav = async() => {
    await this.setState({ count: this.state.currentUser.cart.length })
  }

  render() {
    const LandingComponent = (props) => <Landing { ...props } 
      updateUser={this.updateUser} 
      currentUser={this.state.currentUser}
      updateCartCountNav={this.updateCartCountNav} />
    
    return (
      <Router>
        <NavComponent currentUser={this.state.currentUser} cartCount={this.state.currentUser.cart.length}/>
        <>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={LandingComponent} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
