import React from 'react';
import ReactDOM from 'react-dom';
import ImpacterPosts from './ImpacterPosts';
import {act} from 'react-dom/test-utils';

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div');
    ReactDOM.render(<ImpacterPosts />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
