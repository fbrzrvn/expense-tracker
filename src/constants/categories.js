const incomeColor = ['#123123', '#154731', '#165f40', '#12784f', '#14915f', '#10ac63', '#0bc77e', '#04e38b', '#00ff9d'];
const expenseColor = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColor[0] },
  { type: 'Investments', amount: 0, color: incomeColor[1] },
  { type: 'Extra Income', amount: 0, color: incomeColor[2] },
  { type: 'Deposits', amount: 0, color: incomeColor[3] },
  { type: 'Lottery', amount: 0, color: incomeColor[4] },
  { type: 'Gifts', amount: 0, color: incomeColor[5] },
  { type: 'Salary', amount: 0, color: incomeColor[6] },
  { type: 'Savings', amount: 0, color: incomeColor[7] },
  { type: 'Rental Income', amount: 0, color: incomeColor[8] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColor[0] },
  { type: 'Car', amount: 0, color: expenseColor[1] },
  { type: 'Clothes', amount: 0, color: expenseColor[2] },
  { type: 'Travels', amount: 0, color: expenseColor[3] },
  { type: 'Food', amount: 0, color: expenseColor[4] },
  { type: 'Shopping', amount: 0, color: expenseColor[5] },
  { type: 'House', amount: 0, color: expenseColor[6] },
  { type: 'Entertainment', amount: 0, color: expenseColor[7] },
  { type: 'Phone', amount: 0, color: expenseColor[8] },
  { type: 'Pets', amount: 0, color: expenseColor[9] },
  { type: 'Other', amount: 0, color: expenseColor[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach(c => c.amount = 0);
  expenseCategories.forEach(c => c.amount = 0);
}