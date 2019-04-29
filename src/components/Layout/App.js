import React from 'react';

import './App.css';
import Content from '../Content/Content';

const App = props => (
  <div className="app__container">
    <Content {...props} className="app__content" />
  </div>
);

export default App;
