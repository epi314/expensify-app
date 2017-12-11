import filterExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
  const filters = {
    text: 'u',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: 0,
    endDate: undefined
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: 0
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[0], expenses[1] ]);
});

test('should filter by start and end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: 0,
    endDate: 0
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[0] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const filterdExpenses = filterExpenses(expenses, filters);
  expect(filterdExpenses).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
