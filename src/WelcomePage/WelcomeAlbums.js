import React from 'react'
import { Slide } from 'react-slideshow-image';
import welcomeAlbumsOne from 

const slideImages = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ];
  

class WelcomeAlbum extends React.Component{
    renders(){
        return(
            <div className="welcomeAlbumSlides">
            <Slide>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                </div>
              </div>
            </Slide>
          </div>
    
        )
    }
}