import React from 'react';
import TabOneScreen from './../screens/TabOneScreen';
import  renderer  from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<TabOneScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});