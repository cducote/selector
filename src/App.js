import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Components/Landing'


function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path='/' component={Landing}/>
      </Switch>
     
      </>
    </Router>
  );
}

export default App;
