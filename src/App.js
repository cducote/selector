import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import NavComponent from './Components/NavComponent'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  state = {
    productsAPI: {
      lights: []
    },
    Bedroom: [],
    Living: [],
    Balcony: [],
    Closet: [],
    Hallway: [],
    Shower: [],
    Vanity: [],
    Entry: [],
    Kitchen: [],
    Bar: [],
    Stairs: [],
    exHall: [],
    exWall: [],
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
  let grouped = _.groupBy(allProducts, 'use')
  console.log(grouped)
  
  let bar = grouped.bar
  let vanity = grouped.vanity
  let kitchen = grouped.stairs
  let shower = grouped['bedroom, closet, entry, hall, laundry, living, sho']
  let balcony = grouped.balcony.concat(grouped['balcony, corrdiorwall']).concat(grouped.balconyceiling)
  let hallway = grouped['bedroom, closet, entry, hall, laundry, living, sho'].concat(grouped['bedroom, closet, entry, hall, laundry, living'])
  let entry = grouped.entry.concat(grouped['bedroom, closet, entry, hall, laundry, living']).concat(grouped['bedroom, closet, entry, hall, laundry, living, sho'])
  let living = grouped['bedroom, living'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
  let bedroom = grouped['bedroom, living'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
  let closet = grouped['closet, laundry'].concat(grouped['bedroom, closet, entry, hall, laundry, living, sho']).concat(grouped['bedroom, closet, entry, hall, laundry, living'])
  this.setState({ Balcony: balcony })
  this.setState({ Living: living })
  this.setState({ Bedroom: bedroom })
  this.setState({ Bar: bar })
  this.setState({ Closet: closet })
  this.setState({ Hallway: hallway })
  this.setState({ Shower: shower })
  this.setState({ Kitchen: kitchen })
  this.setState({ Entry: entry })
  this.setState({ exHall: hallway })
  this.setState({ Stairs: kitchen })
  this.setState({ exWall: balcony })
  this.setState({ Vanity: vanity })
  }

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
