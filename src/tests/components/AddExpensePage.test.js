import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './../../components/AddExpensePage';
import expenses from './../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={onSubmit} history={history} />);
});

test('it should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('it should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});