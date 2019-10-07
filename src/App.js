import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavComponent from './Components/NavComponent'


class App extends Component {
  state = {
    currentUser: {
      name: "no user",
      cart: []
    },
  };

  updateCartCountNav = async() => {
    this.setState({ count: this.state.currentUser.cart.length })
  }

  render() {
    const LandingComponent = (props) => <Landing { ...props } 
      updateUser={this.updateUser} 
      currentUser={this.state.currentUser}
      updateCartCountNav={this.updateCartCountNav}
      lights={this.state} />
    
    return (
      <Router>
        <NavComponent currentUser={this.state.currentUser} cartCount={this.state.currentUser.cart.length}/>
        <>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={LandingComponent} lights={this.state} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
