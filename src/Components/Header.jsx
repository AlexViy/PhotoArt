import React from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faSearch);

function Header() {
  return <div className="Header">
    <div className="LogoSearch">
      <div className="Logo">
        <div className="PhotoArtLogo">PhotoArt</div>
          <span className="spanLogo">Free PSD Website Template</span>
        <div className="LogoTitle"></div>
      </div>
      <div className="SearchContainer">
        <div><input className="SearchInput" type="text"></input></div>
        <div className="SearchIcon">
          <FontAwesomeIcon icon='search' />
        </div>
      </div>
    </div>
    <nav className="Navigation">
      <ul className="HeaderNav">
        <li>Homepage</li>
        <li>Style demo</li>
        <li>Full width</li>
        <li>Dropdown</li>
        <li>Gallery</li>
        <li>Portfolio</li>
      </ul>
    </nav>
  </div>
}

export default Header;