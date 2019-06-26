import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Checkout from './Components/Checkout'


class App extends Component{

  state = {
    currentUser: {
      name: 'no user'
    }
  }

  updateUser = ( userInfo ) => {
    this.setState({ currentUser: userInfo })
  }
  
render() {

  // const UnityOverlayComponent =  (props) => <Landing { ...props } />

  return (
    <Router>
      <>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route path='/*' component={Landing}/>
      </Switch>
     
      </>
    </Router>
  );
}
}
export default App;
