import React from 'react';
import ReactDOM from 'react-dom';
import ImpactersList from './ImpactersList';
import { act } from 'react-dom/test-utils';

it('renders without crashing', () => {
  act(() => {
  const div = document.createElement('div');
  ReactDOM.render(<ImpactersList />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
});
