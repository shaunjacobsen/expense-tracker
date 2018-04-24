import moment from 'moment';
import selectExpenses from './../../selectors/expenses';
import expenses from './../fixtures/expenses';

test('it should filter by text value', () => {
  const result = selectExpenses(expenses, {
    text: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });

  expect(result).toEqual([expenses[1], expenses[2]]);
});

test('it should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test('it should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('it should filter by both startDate and endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(1, 'day'),
    endDate: moment(0).add(5, 'day'),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});

test('it should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('it should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});