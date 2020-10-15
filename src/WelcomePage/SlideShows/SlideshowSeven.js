import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://i.pinimg.com/originals/2a/6f/db/2a6fdb087ce65e4188a94c37e54dbbbd.jpg',
  'https://i.pinimg.com/originals/d6/08/cc/d608ccc2cbd8fcde60ae8ae83a8d660c.jpg',
  'https://ohmy.disney.com/wp-content/uploads/sites/25/2015/08/Aristocats-kittens-going-through-cat-door.jpeg'
];

const SlideshowSeven = () => {
    return (
      <div id="SlideshowSeven" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSeven" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSeven" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgSeven" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowSeven;