import React, {Component} from 'react';
import BlogLatest from './BlogLatest';
import QuickLinks from './QuickLinks';
import Contacts from './Contacts';
import Social from './Social';
import Copyright from './Copyright';

class Footer extends Component {
  render () {
    return (
      <footer className="Footer">
        <div className="FooterTitle">
          <h4>Find what you want fast</h4>
        </div>
        <div className="FooterContent">
          <BlogLatest/>
          <QuickLinks/>
          <Contacts/>
          <Social/>
        </div>
        <Copyright/>
      </footer>
    );
  }
}

export default Footer;