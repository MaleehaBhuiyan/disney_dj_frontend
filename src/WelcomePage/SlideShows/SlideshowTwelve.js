import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://thatoldpictureshow.files.wordpress.com/2019/05/pocahontas.png?w=1600&h=768&crop=1',
  'https://www.simbasible.com/wp-content/uploads/2016/09/unnamed-29.jpg',
  'https://www.filmgazm.com/uploads/1/8/1/2/1812902/published/pocahontas-still.jpg?1568435173'
];

const SlideshowTwelve = () => {
    return (
      <div id="SlideshowTwelve" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowTwelve;