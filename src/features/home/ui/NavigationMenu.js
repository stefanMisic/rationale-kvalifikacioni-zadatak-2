import React from 'react';

import '../../../App.css';
import bedouin from '../../../../public/bedouin.png';
import lines from '../../../../public/lines.png';
import menu1 from '../../../../public/menu1.png';
import menu2 from '../../../../public/menu2.png';
import menu3 from '../../../../public/menu3.png';
import menu4 from '../../../../public/menu4.png';
import menu5 from '../../../../public/menu5.png';
import menu6 from '../../../../public/menu6.png';

const NavigationMenu = () => (
  <div className="NavigationMenu">
    <div className="NavigationMenuHeader">
      <img src={bedouin} alt="bedouin" height="32" width="40" className="ImageBedouin" />
      <img src={lines} alt="lines" height="28" width="34" className="ImageLines" />
    </div>
    <div className="NavigationMenuButtons">
      <button className="NavigationMenuButton" type="button">
        <img src={menu1} alt="menu1" height="38" width="42" className="ImageMenu1" />
        <div className="NavigationMenuText">Inbox</div>
      </button>
      <button className="NavigationMenuButton" type="button">
        <img src={menu2} alt="menu2" height="43" width="36" className="ImageMenu2" />
        <div className="NavigationMenuText">Contract</div>
      </button>
      <button className="NavigationMenuButton" type="button">
        <img src={menu3} alt="menu3" height="38" width="42" className="ImageMenu3" />
        <div className="NavigationMenuText">Nomination</div>
      </button>
      <button className="NavigationMenuButton" type="button">
        <img src={menu4} alt="menu4" height="38" width="42" className="ImageMenu4" />
        <div className="NavigationMenuText">Allocation</div>
      </button>
      <button className="NavigationMenuButton" type="button">
        <img src={menu5} alt="menu5" height="39" width="34" className="ImageMenu5" />
        <div className="NavigationMenuText">Allocation</div>
      </button>
      <button className="NavigationMenuButton" type="button">
        <img src={menu6} alt="menu6" height="38" width="40" className="ImageMenu6" />
        <div className="NavigationMenuText">Uplift Programe</div>
      </button>
    </div>
  </div>
);

export default NavigationMenu;