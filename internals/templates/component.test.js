import React from 'react';
import ReactDOM from 'react-dom';
import COMPONENT_NAME from './COMPONENT_NAME';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<COMPONENT_NAME />, div);
  ReactDOM.unmountComponentAtNode(div);
});
