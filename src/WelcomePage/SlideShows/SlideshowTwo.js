import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://images.hellogiggles.com/uploads/2016/03/05023637/Alice_Featured.jpg',
  'https://i.pinimg.com/originals/64/12/ee/6412ee1bf2366763868301d941e63858.jpg',
  'https://images6.fanpop.com/image/photos/34100000/Screencaps-alice-in-wonderland-34178585-1424-1080.jpg'
];

const SlideshowTwo = () => {
    return (
      <div id="SlideshowTwo" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwo" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwo" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwo" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowTwo;