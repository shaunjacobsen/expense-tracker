import selectExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('it should return 0 for no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('it should return the total for one expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(195);
});

test('it should return the total for two expenses', () => {
  const result = selectExpensesTotal([expenses[0], expenses[2]]);
  expect(result).toEqual(795);
});

test('it should return the total for all expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(1145);
});