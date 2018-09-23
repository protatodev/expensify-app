export default expenses => {
  
  if(expenses.length > 0) {
    const values = expenses.map(expense => expense.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return values.reduce(reducer);
  }
  
  return 0;
};