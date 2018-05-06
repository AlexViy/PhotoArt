import React, {Component} from 'react';

class CategItem extends Component {
  render () {
    return (
      <div className="CategItem">
        <h4>{this.props.catName}</h4>
        <img src='http://placekitten.com/g/600/300'></img>
      </div>
    );
  }
}

class Categories extends Component {
  render () {
    return (
      <div className="Categories">
        <CategItem catName="Sport photography"/>
        <CategItem catName="Wedding photography"/>
        <CategItem catName="Active photography"/>
      </div>
    );
  }
}

export default Categories;