import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import Checkout from './Components/Checkout'


function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>
     
      </>
    </Router>
  );
}

export default App;
