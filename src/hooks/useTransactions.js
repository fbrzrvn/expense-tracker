import { useContext } from 'react';
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from '../constants/categories';
import { ExpenseTrackerContext } from '../context/context';

const useTransactions = title => {
  resetCategories();
  // call transaction from context
  const { transactions } = useContext(ExpenseTrackerContext);
  // select all transaction filter por income or expense
  const transactionPerType = transactions.filter(t => t.type === title);
  // get total
  const total = transactionPerType.reduce(
    (acc, item) => (acc += item.amount),
    0
  );
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  transactionPerType.forEach(transaction => {
    // find the transaction === to the title(income | expense)
    const category = categories.find(
      category => category.type === transaction.category
    );
    // if true add the value
    if (category) {
      category.amount += transaction.amount;
    }
  });
  // get all the category with amount +0
  const filteredCategories = categories.filter(sc => sc.amount > 0);
  // set data for chart
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map(c => c.amount),
        backgroundColor: filteredCategories.map(c => c.color),
      },
    ],
    labels: filteredCategories.map(c => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
