import React from 'react';

import '../../../App.css';
import { ItemsView, NavigationMenu } from '../ui';

const Body = () => (
  <div className="Body">
    <NavigationMenu />
    <ItemsView />
  </div>
);

export default Body;