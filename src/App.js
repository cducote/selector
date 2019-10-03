import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavComponent from './Components/NavComponent'
import axios from 'axios'
import _ from 'lodash'
// let RESPONSE = response1

class App extends Component {
  state = {
    count: 0,
    productsAPI: {
      lights: []
    },
    Lamps: [],
    FlushMounts: [],
    SemiFlush: [],
    Pendant: [],
    MiniPendant: [],
    Chandelier: [],
    Vanity: [],
    WallScone: [],
    ExteriorWall: [],
    ExteriorHaning: [],
    Track: [],
    Linear: [],
    CeliingFan: [],
    currentUser: {
      name: "no user",
      cart: []
    },
  };

componentDidMount() {
  this.getAllProducts()
}

getAllProducts = async ()=> {
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get(`https://www.vineyardlighting.com/api/allProducts.php?key=${API_KEY}`)
    let obj = response.data
    this.setState({ 
      productsAPI: {
        lights: obj
      }
    })
    this.chunkArray()
  }

chunkArray() {
  let allProducts = this.state.productsAPI.lights
  console.log(allProducts)
  // console.log (JSON.stringify(allProducts))
  }

  updateCartCountNav = async() => {
    this.setState({ count: this.state.currentUser.cart.length })
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
