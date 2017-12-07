import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234', {
    description: 'Rent expense',
    amount: 100
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      description: 'Rent expense',
      amount: 100
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Test expense',
    note: 'Testing purposes',
    amount: 100,
    createdAt: 100
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

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
