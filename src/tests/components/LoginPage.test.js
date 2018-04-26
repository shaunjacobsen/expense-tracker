import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './../../components/LoginPage';

test('it should render the LoginPage component properly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('it should call startLogin on log in button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});