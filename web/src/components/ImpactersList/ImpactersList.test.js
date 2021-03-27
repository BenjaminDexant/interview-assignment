import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImpactersList from './ImpactersList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImpactersList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Response from server is array', async () => {
  axios
    .get('http://localhost:3001/impacters')
    .then((res) => res.data)
    .then((data) => expect(data).toBeArray());
});
