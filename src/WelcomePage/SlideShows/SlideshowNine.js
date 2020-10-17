import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://i.ytimg.com/vi/FykvRbihKPk/maxresdefault.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq_AcG62eqNxPfGzdvfzbdONdoq96GB2MMKQ&usqp=CAU',
  'https://i.ytimg.com/vi/dBUYFAKVL2A/maxresdefault.jpg'
];

const SlideshowNine = () => {
    return (
      <div id="SlideshowNine" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgNine" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgNine" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgNine" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowNine;