import React from 'react';
import './App.css';
import Welcome from './Welcome'
import NavBar from './Navbar'

class App extends React.Component {
  render(){
    return (
      <>
      <NavBar />
      <Welcome />
      </>
    )
  }
}

export default App;
