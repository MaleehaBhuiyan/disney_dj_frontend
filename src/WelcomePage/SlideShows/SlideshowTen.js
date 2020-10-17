import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/02/1452771009-movies-robin-hood-disney.jpg',
  'https://i.pinimg.com/originals/ee/d3/cc/eed3cc4dbb38771c0d2cc027060bb7bd.jpg',
  'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/24/1465830581-robin-hood-and-maid-marian.png?crop=0.652xw:1.00xh;0.0848xw,0&resize=480:*'
];

const SlideshowTen = () => {
    return (
      <div id="SlideshowTen" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTen" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTen" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTen" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowTen;