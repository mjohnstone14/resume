import React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';

it('renders the app correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});