import React from 'react';

import '../../../App.css';
import bird from '../../../../public/bird.png';
import circle from '../../../../public/circle.png';
import rectangle from '../../../../public/rectangle.png';
import search from '../../../../public/search.png';

const Header = () => (
  <div className="Header">
    <div className="HeaderLeft">
      <img src={bird} alt="bird" height="50" width="85" className="ImageBird" />
      <div className="HeaderLeftLabel">GROUP PORTAL</div>
    </div>
    <div className="HeaderRight">
      <img src={search} alt="search" height="33" width="40" className="ImageSearch" />
      <img src={circle} alt="circle" height="30" width="35" className="ImageCircle" />
      <img src={rectangle} alt="rectangle" height="27" width="37" className="ImageRectangle" />
    </div>
  </div>
);

export default Header;