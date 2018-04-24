import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 3000,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 7500,
}));

store.dispatch(addExpense({
  description: 'Internet bill',
  amount: 5000,
}));

store.dispatch(addExpense({
  description: 'Electricity bill',
  amount: 100,
}));

const visible = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log(visible);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));