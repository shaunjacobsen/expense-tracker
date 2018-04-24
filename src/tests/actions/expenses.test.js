import {
  addExpense,
  editExpense,
  removeExpense
} from './../../actions/expenses';

test('it should set up the removeExpense action object', () => {
  const action = removeExpense({ id: '123-456' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123-456'
  });
});

test('it should set up the editExpense action object', () => {
  const action = editExpense('123-678', { amount: 500 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123-678',
    updates: {
      amount: 500
    }
  });
});

test('it should set up the addExpense action object', () => {
  const expenseData = {
    description: 'Rent',
    note: 'April rent',
    amount: 60000,
    createdAt: 1000000
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('it should set up the addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    }
  });
});
