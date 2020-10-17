import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://vignette.wikia.nocookie.net/disney/images/c/cd/Profile_-_Jasmine.jpeg/revision/latest?cb=20190312021628',
  'https://i.pinimg.com/originals/6f/48/85/6f488504d6eaaa89dd5652ac967f35af.jpg',
  'https://i.pinimg.com/originals/07/27/25/0727255fc1a4046ebffe98bad41f7564.jpg'
];

const SlideshowThree = () => {
    return (
      <div id="SlideshowThree" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgThree" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgThree" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgThree" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowThree;