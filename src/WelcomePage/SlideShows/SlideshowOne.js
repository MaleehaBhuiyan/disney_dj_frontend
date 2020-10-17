import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://i.pinimg.com/originals/30/5d/ff/305dffab2a7b5e5c90a0f4b9988e5131.png',
  'https://i.pinimg.com/736x/e6/b7/e0/e6b7e05839498191ca2bda51f1a87b75.jpg',
  'https://i.pinimg.com/originals/1c/77/33/1c7733c48f6e1abcdcf533a26d82e535.jpg'
];

const SlideshowOne = () => {
    return (
      <div id="SlideshowOne" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgOne" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgOne" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgOne" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowOne;