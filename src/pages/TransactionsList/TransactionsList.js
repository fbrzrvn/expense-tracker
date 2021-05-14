import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import Transactions from '../../components/Transactions';
import { ExpenseTrackerContext } from '../../context/context';
import MainLayout from '../../layout/MainLayout';

const TransactionsList = () => {
  const { transactions } = useContext(ExpenseTrackerContext);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Transactions transactions={transactions} />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default TransactionsList;
