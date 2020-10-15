import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://data.junkee.com/wp-content/uploads/2020/02/Mulan1998_01_copy.jpg',
  'https://images2.minutemediacdn.com/image/upload/c_crop,h_1347,w_2400,x_0,y_46/v1584402958/shape/mentalfloss/620569-disney-mulan.jpg?itok=0j7IYvyl',
  'https://cdn.historycollection.com/wp-content/uploads/2019/09/5-4-1024x640.jpg'
];

const SlideshowEleven = () => {
    return (
      <div id="SlideshowEleven" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEleven" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEleven" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEleven" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowEleven;