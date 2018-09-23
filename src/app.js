import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 173,
  createdAt: 1000
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 74
}));

store.dispatch(addExpense({
  description: 'Grocery bill',
  amount: 297
}));

const state = store.getState();

console.log(getVisibleExpenses(
  state.expenses,
  state.filters
));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));