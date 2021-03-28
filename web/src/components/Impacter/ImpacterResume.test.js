import React from 'react';
import ReactDOM from 'react-dom';
import ImpacterResume from './ImpacterResume';
import {act} from 'react-dom/test-utils';

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div');
    ReactDOM.render(<ImpacterResume />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
