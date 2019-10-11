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

  componentDidUpdate() {
    let cart = this.state.currentUser.cart
    // let result = Array.from(cart.reduce((m, o) => m.set(o.use, o), new Map).values());
    // console.log(result);
    // const newCartArray = cart.filter((light, i, array) => {
    //   return !array.slice(i + 1).some(obj => obj.use.slice(0, 10) === light.use.slice(0,10));
    // })
    // console.log(newCartArray)
    
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
