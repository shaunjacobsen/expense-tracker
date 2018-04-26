import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('it should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('it should remove expense by ID', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('it should not remove expense if ID not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '9826423' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('it should add an expense', () => {
  const newExpense = {
    id: '123',
    description: 'new expense',
    amount: 100,
    notes: '',
    createdAt: 10000,
  };
  const action = { type: 'ADD_EXPENSE', expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("it should edit an expense's amount", () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount: 500 },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(500);
});

test('it should not edit an expense if ID not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '23423423',
    updates: { amount: 250 },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toEqual(expenses[0].amount);
});

test('it should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  }
  const initialState = expensesReducer(undefined, action);
  expect(initialState).toEqual(expenses);
});

test('it should overwrite already set expenses', () => {
  const initialAction = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const initialState = expensesReducer(undefined, initialAction);
  const overwriteAction = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0], expenses[2]]
  }
  const overwrittenState = expensesReducer(undefined, overwriteAction);
  expect(overwrittenState).toEqual([expenses[0], expenses[2]]);
});