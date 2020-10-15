import React from 'react';
import Slider from './WelcomePage/Slider'

const images = [
  'https://media4.giphy.com/media/v77nhUCM9xLvX9YK5e/giphy.gif',
  'https://i.gifer.com/47Jh.gif',
  'https://64.media.tumblr.com/42f828ec18117e1892ce59b9bf93ca2f/tumblr_mh3yioXvTd1rm84sho1_500.gif',
  'https://i.pinimg.com/originals/42/54/e5/4254e544e23c7733793a82c8a4c7f0c6.gif'
]

class Welcome extends React.Component {
  render(){
    return (
      <div>
        <Slider slides={images} />
      </div>
    )
  }
}

export default Welcome;

