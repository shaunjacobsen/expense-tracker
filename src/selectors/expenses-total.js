export default expenses => {
  return expenses
    .map(expense => {
      return expense.amount;
    })
    .reduce((a, c) => {
      return a + c;
    }, 0);
};
