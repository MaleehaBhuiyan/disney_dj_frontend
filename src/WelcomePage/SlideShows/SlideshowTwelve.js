import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://thatoldpictureshow.files.wordpress.com/2019/05/pocahontas.png?w=1600&h=768&crop=1',
  'https://www.simbasible.com/wp-content/uploads/2016/09/unnamed-29.jpg',
  'https://lh3.googleusercontent.com/proxy/NJPPzV5iISxvH5sHehZulQ2QZrZma761VvfrlBF2rMmLfJJndeETPI1pO5NX-l1BVRu_cD1MaiuBhDigopwD2wZCoS2WLDdEcAcu5oEswqpcRsDmsGmgWs3qy4wWW09nmWNcYcim1vamUWJpsWOaCUA_-PmIgRMA56l-FiGm7fNc8A'
];

const SlideshowTwelve = () => {
    return (
      <div id="SlideshowTwelve" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgTwelve" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowTwelve;