import React from 'react';
import textLogo from '../Images/textLogo.png';
import SlideshowOne from './SlideShows/SlideshowOne.js'
import SlideshowTwo from './SlideShows/SlideshowTwo.js'
import SlideshowThree from './SlideShows/SlideshowThree.js'
import SlideshowFour from './SlideShows/SlideshowFour.js'
import SlideshowFive from './SlideShows/SlideshowFive.js'
import SlideshowSix from './SlideShows/SlideshowSix.js'
import SlideshowSeven from './SlideShows/SlideshowSeven.js'
import SlideshowEight from './SlideShows/SlideshowEight.js'
import SlideshowNine from './SlideShows/SlideshowNine.js'
import SlideshowTen from './SlideShows/SlideshowTen.js'
import SlideshowEleven from './SlideShows/SlideshowEleven.js'
import SlideshowTwelve from './SlideShows/SlideshowTwelve.js'

class Opening extends React.Component {
  render(){
    return (
      <div>
          <img id="openingTextLogo" src={textLogo} alt="Disney DJ" width="300" />
          <h2 id="openingh2">Where Music Dreams Come True</h2>
          <SlideshowOne />
          <SlideshowTwo />
          <SlideshowThree />
          <SlideshowFour />
          <SlideshowFive />
          <SlideshowSix />
          <SlideshowSeven />
          <SlideshowEight />
          <SlideshowNine />
          <SlideshowTen />
          <SlideshowEleven />
          <SlideshowTwelve />
      </div>
    )
  }
}

export default Opening;