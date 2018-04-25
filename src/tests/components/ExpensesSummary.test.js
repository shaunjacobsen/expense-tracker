import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './../../components/ExpensesSummary';

test('it should render ExpensesSummary properly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} />);
  expect(wrapper).toMatchSnapshot();
});

test('it should render ExpensesSummary properly with several expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} />);
  expect(wrapper).toMatchSnapshot();
});
