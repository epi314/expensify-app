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

export default getFilteredExpenses;
