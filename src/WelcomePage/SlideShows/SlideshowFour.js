import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://vignette.wikia.nocookie.net/disney/images/c/ce/Profile_-_Bambi.png/revision/latest?cb=20190313173158',
  'https://i.pinimg.com/originals/68/44/82/68448221e9b27ef79adfe3bf7b42b206.jpg',
  'https://vignette.wikia.nocookie.net/disney/images/d/d8/Bambi-disneyscreencaps.com-2767.jpg/revision/latest?cb=20150216231347'
];

const SlideshowFour = () => {
    return (
      <div id="SlideshowFour" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFour" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFour" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgFour" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowFour;