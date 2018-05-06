import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="TopBar">            
            <ul className="TopBarNav">
              <li>Libero</li>
              <li>Maecenas</li>
              <li>Mauris</li>
              <li>Suspendisse</li>
            </ul>            
          </div>
          <Header/>
          <main className='Main'>
          <div className="Intro">
          
            <div className="SlideText">
              <div className="IntroNav"> &#9664; &#9654; </div>
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
          
          <div className="SplitLine"></div>

          <div className="Categories">
            <div className="CategItem">
              <h4>Sport photography</h4>
              <img src='http://placekitten.com/g/600/300'></img>
            </div>
            <div className="CategItem">
              <h4>Wedding photography</h4>
              <img src='http://placekitten.com/g/600/300'></img>
            </div>
            <div className="CategItem">
              <h4>Active photography</h4>
              <img src='http://placekitten.com/g/600/300'></img>
            </div>
          </div>
          </main>

          <footer className="Footer">
            <div className="FooterTitle">
              <h4>Find what you want fast</h4>
            </div>
            <div className="FooterContent">
              <div className="BlogLatest">
                <h4>Latest from the blog</h4>
                <h5>SnoWalking</h5>
                <h6>Posted by admin on 00/00/0000</h6>
                <p>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet</p>
                <div className="ReadMore">
                  <a href="#">Read more</a>
                </div>
              </div>
              <div className="QuickLinks">
                <h4>Quick links</h4>
                <ul>
                  <li><a href="#">Link text here</a></li>
                  <li><a href="#">Link text here</a></li>
                  <li><a href="#">Link text here</a></li>
                  <li><a href="#">Link text here</a></li>
                  <li><a href="#">Link text here</a></li>
                  <li><a href="#">Link text here</a></li>
                </ul>             
              </div>
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
              <div className="Social">
                <h4>Keep up to date</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Photos on Flickr</li>
                  <li>RSS Feed</li>
                </ul>                
              </div>
            </div>
              <div>
                <div>Copyright @ 2018 - All rights reserved - Domain name</div>
                <div>Template by OS Templates</div>
              </div>
        </footer>
      </div>
  </div>
  );
  }
}

export default App;
