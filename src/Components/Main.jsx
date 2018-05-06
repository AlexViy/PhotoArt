import React, {Component} from 'react';
import Slider from './Slider';
import Categories from './Categories';

class Main extends Component {
  render () {
    return (
      <main className='Main'>
        <Slider/>          
        <div className="SplitLine"></div>
        <Categories/>
      </main>
    );
  }
}

export default Main;