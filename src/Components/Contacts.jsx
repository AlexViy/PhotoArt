import React, {Component} from 'react';

class Contacts extends Component {
  render () {
    return (
      <div className='Contacts'>
        <p className="Heading">Contact us</p>
        <div className='ContFields'>
          <p className='ContFieldName'>Company name</p>
          <ul className='ContFieldValue'>
            <li>Street name & number</li>
            <li>Town</li>
            <li>Postcode/Zip</li>
          </ul>                
          <p className='ContFieldName'>Tel:</p>
          <p className='ContFieldValue'>xxxxx xxxxxxxxxx</p>
          <p className='ContFieldName'>Fax:</p>
          <p className='ContFieldValue'>xxxxx xxxxxxxxxx</p>
          <p className='ContFieldName'>Email:</p>
          <p className='ContFieldValue'>contact@mydomain.com</p>
        </div>              
      </div>
    );
  }
}

export default Contacts;