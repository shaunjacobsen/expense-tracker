import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
} from './../../actions/expenses';
import expenses from './../fixtures/expenses';
import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

test('it should set up the removeExpense action object', () => {
  const action = removeExpense({ id: '123-456' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123-456',
  });
});

test('it should set up the editExpense action object', () => {
  const action = editExpense('123-678', { amount: 500 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123-678',
    updates: {
      amount: 500,
    },
  });
});

test('it should set up the addExpense action object', () => {
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1],
  });
});

test('it should add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Water bill',
    amount: 1000,
    note: '',
    createdAt: 100000,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    return database
      .ref(`expenses/${actions[0].id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
});

test('it should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
  };

  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults,
      },
    });

    return database
      .ref(`expenses/${actions[0].id}`)
      .once('value')
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
  });
});

test('it should set up set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('it should fetch existing expenses from firebase', done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});

// test('it should set up the addExpense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     }
//   });
// });
