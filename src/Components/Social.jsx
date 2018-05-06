import React, {Component} from 'react';

class Social extends Component {
  render () {
    return (
      <div className="Social">
       <p className="Heading">Keep up to date</p>
        <ul>
          <li><div className='SocIcon'></div>Facebook</li>
          <li><div className='SocIcon'></div>Twitter</li>
          <li><div className='SocIcon'></div>Photos on Flickr</li>
          <li><div className='SocIcon'></div>RSS Feed</li>
        </ul>                
      </div>
    );
  }
}
export default Social;