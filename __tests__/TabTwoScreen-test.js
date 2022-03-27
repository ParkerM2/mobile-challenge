import React from 'react';
import  renderer  from 'react-test-renderer';
import TabTwoScreen from '../screens/TabTwoScreen';


// docs used for jest as I'm very new to testing  
// https://jestjs.io/docs/tutorial-react-native 

test('renders correctly', () => {
  const tree = renderer.create(<TabTwoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});