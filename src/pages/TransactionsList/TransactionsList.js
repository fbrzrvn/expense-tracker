import {
  Avatar,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import React, { useContext } from 'react';
import Title from '../../components/Title';
import { ExpenseTrackerContext } from '../../context/context';
import MainLayout from '../../layout/MainLayout';
import useStyles from '../../styles';

const TransactionsList = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  const classes = useStyles();

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          {transactions.length > 0 ? (
            <React.Fragment>
              <Title>All Transactions</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Icon</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map(transaction => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <Avatar
                          className={
                            transaction.type === 'Income'
                              ? classes.avatarIncome
                              : classes.avatarExpense
                          }
                        >
                          <MoneyOff />
                        </Avatar>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>{transaction.amount} €</TableCell>
                      <TableCell>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => deleteTransaction(transaction.id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          ) : (
            <Title align="center">
              Start adding your transaction in order to keep track of them!
            </Title>
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default TransactionsList;
