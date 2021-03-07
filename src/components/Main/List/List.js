import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {

  const classes = useStyles();
  const { deleteTransaction } = useContext(ExpenseTrackerContext);

  console.log(deleteTransaction);

  const transactions = [
    {id: 1, type: "Income", category: "business", amount: 50, date: new Date().toLocaleString()},
    {id: 2, type: "Expense", category: "pets", amount: 50, date: new Date().toLocaleString()},
    {id: 3, type: "Income", category: "salaries", amount: 350, date: new Date().toLocaleString()}
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map(transiction => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transiction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={transiction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transiction.category}
              secondary={`$${transiction.amount} - ${transiction.date}`}
            />
            <ListItemSecondaryAction >
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {}}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List;
