import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://www.thehunchblog.com/wp-content/uploads/2011/05/d-esme-3.png',
  'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555336062/shape/mentalfloss/hunchhed.jpg',
  'https://s.yimg.com/ny/api/res/1.2/UKumnyGK98MKGLn4RAnnpQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/people_218/93fd0e8d01423f418efd188d0d35279c'
];

const SlideshowFive = () => {
    return (
      <div id="SlideshowFive" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFive" src={fadeImages[0]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFive" src={fadeImages[1]} alt='' />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFive" src={fadeImages[2]} alt='' />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowFive;