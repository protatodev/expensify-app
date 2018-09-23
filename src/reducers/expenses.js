// EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, {type, expense, id, updates}) => {
  switch(type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(p => p.id !== id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === id){
          return {
            ...expense, 
            ...updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;