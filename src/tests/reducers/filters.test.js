import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf()
  });
});

test('should setup sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const state = filtersReducer({ sortBy: 'amount' }, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should setup set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Coffee' });
  expect(state.text).toBe('Coffee');
});

test('should setup start date', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: moment(0).valueOf() });
  expect(state.startDate).toBe(moment(0).valueOf());
});

test('should setup end date', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: moment(0).valueOf() });
  expect(state.endDate).toBe(moment(0).valueOf());
});
