import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'new expense',
    note: '',
    amount: 0,
    createdAt: 0
  };

  const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense});
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

test('should edit an expense', () => {
  const updates = {
    id: 122,
    description: 'updated description'
  };

  const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: expenses[0].id, updates});
  expect(state[0]).toEqual({
    id: 122,
    description: 'updated description',
    note: '',
    amount: 195,
    createdAt: 0
  });
});

test('should not edit expense if none are found to match', () => {
  const updates = {
    id: 122,
    description: 'updated description'
  };

  const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '5', updates});
  expect(state).toEqual([...expenses]);
});
