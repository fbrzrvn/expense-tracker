import {
  Avatar,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import Title from '../Title';
import useStyles from './styles';

function preventDefault(event) {
  event.preventDefault();
}

const Transactions = () => {
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
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
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Transactions;
