// install -> import -> used
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 400, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Electric bill', amount: 500, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Coffee', amount: 100, createdAt: 2500 }));
//
// const state = store.getState();
// console.log(getFilteredExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
