import React, {Component} from 'react';

class Contacts extends Component {
  render () {
    return (
      <div>
        <h4>Contact us</h4>
        <ul>
          Company name
          <li>Street name & number</li>
          <li>Town</li>
          <li>Postcode/Zip</li>
        </ul>                
        Tel:
        <li>xxxxx xxxxxxxxxx</li>
        Fax:
        <li>xxxxx xxxxxxxxxx</li>
        Email:
        <li>contact@mydomain.com</li>              
      </div>
    );
  }
}

export default Contacts;