import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  'https://www.dvdizzy.com/images/m/manyadventures-01.jpg',
  'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-movie/the-many-adventures-of-winnie-the-pooh-ss2.jpg?itok=46yG7Bg8',
  'https://decider.com/wp-content/uploads/2018/08/many-adventures-of-winnie-the-pooh-movie.jpg?quality=80&strip=all&w=646&h=335&crop=1'
];

const SlideshowEight = () => {
    return (
      <div id="SlideshowEight" className="slide-container">
        <Fade arrows={false}>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEight" src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEight" src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img id="imgEight" src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }

export default SlideshowEight;