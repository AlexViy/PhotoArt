import React, {Component} from 'react';

class Slider extends Component {
  render () {
    return (
      <div className="Slider">          
            <div className="SlideText">
              <div className="SliderNav"> &#9664; &#9654; </div>
              <span className="SlideTitle">Boating</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="ReadMore">
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="SlideImage">
              <img src="http://via.placeholder.com/960x450"></img>
            </div>          
          </div>
    )
  }
}

export default Slider;