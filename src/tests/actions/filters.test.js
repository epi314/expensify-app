import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('should setup set text filter action object', () => {
  const action = setTextFilter('Test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Test'
  });
});

test('should setup set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup set start date action object', () => {
  const action = setStartDate(1234);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: 1234
  });
});

test('should setup set end date action object', () => {
  const action = setEndDate(1234);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: 1234
  });
});
