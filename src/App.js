import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar'
import Welcome from './Welcome'

class App extends React.Component {
  render(){
    return (
      <>
        <Navbar />
        <Switch>
        <Route path="/welcome" render={() => <Welcome />} />
        </Switch>
      </>
    )
  }
}

export default App;
