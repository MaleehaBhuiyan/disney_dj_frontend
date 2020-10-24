import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Welcome from './Welcome'
import NavBar from './Navbar'
import Home from './Home'

const USER_API = "http://localhost:3000/users"



class App extends React.Component {
  state = {
    user: {} 
  }

  componentDidMount(){
    fetch(USER_API)
    .then(resp => resp.json())
    .then(data => this.setState({ user:data }))
  }

  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/welcome" render={() => <Welcome />} />
          <Route path="/home" render={() => <Home user={this.state.user} />} />
        </Switch>
      </>
    )
  }
}

export default App;


