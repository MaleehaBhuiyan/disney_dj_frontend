import React from 'react';
import Opening from './WelcomePage/Opening.js'
import About from './WelcomePage/About.js'
class Welcome extends React.Component {
  render(){
    return (
      <div>
        <Opening />
        <About />
      </div>
    )
  }
}

export default Welcome;

