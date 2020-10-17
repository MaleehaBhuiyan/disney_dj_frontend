import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://i.pinimg.com/originals/29/48/4f/29484fd3fe6b2a5e7bce1f4b61de02fb.jpg',
  'https://thegeekiary.com/wp-content/uploads/2019/08/sleeping-beauty-blu-ray.png',
  'https://moviebabble.com/wp-content/uploads/2019/01/Sleeping-Beauty.jpg'
];

const SlideshowSix = () => {
    return (
      <div id="SlideshowSix" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSix" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSix" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSix" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowSix;