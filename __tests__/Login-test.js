import 'react-native';
import React from 'react';
import Login from '../screen/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {validateEmail} from '../utils/helpers';

it('renders correctly', () => {
  renderer.create(<Login />);
});

it('with proper email', () => {
  const email = 'xyz@gmail.com';
  expect(validateEmail(email)).toBeTruthy();
});

it('with wrong email', () => {
  const email = '1234';
  expect(validateEmail(email)).toBeFalsy();
});
