import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('it should render the ExpenseDashboardPage component', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});