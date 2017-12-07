import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => (
        id !== action.id
      ));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id == action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }

      });
    default:
      return state;
  }
};


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const textMatched = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatched = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatched = typeof endDate !== 'number' || expense.createdAt <= endDate;;

    return textMatched && startDateMatched && endDateMatched;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
});

const op1 = store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 100,
    createdAt: 1
  })
);
const op2 = store.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 1300,
    createdAt: 5
  })
);
const op3 = store.dispatch(
  addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt: 7
  })
);
//
// store.dispatch(
//   editExpense(
//     op.expense.id,
//     { amount: 250 }
//   )
// );
//
//
// store.dispatch(
//   removeExpense()
// );
//
// store.dispatch(
//   setTextFilter('rent')
// );
//
// store.dispatch(
//   setTextFilter()
// );
//
store.dispatch(
  sortByAmount()
);
//
// store.dispatch(
//   sortByDate()
// );
//
// store.dispatch(
//   setStartDate(125)
// );
//
// store.dispatch(
//   setEndDate(999)
// );
//
// store.dispatch(
//   setStartDate()
// );
//
// store.dispatch(
//   setEndDate()
// );

const demoState = {
  expenses: [{
    id: 'qwerty',
    description: 'January Rent',
    note: 'Final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
