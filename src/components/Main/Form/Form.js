import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  expenseCategories,
  incomeCategories,
} from '../../../constants/categories';
import { ExpenseTrackerContext } from '../../../context/context';
import { formatDate, formatListDate } from '../../../helpers/formatDate';
import Snackbar from '../../Snackbar/Snackbar';
import useStyles from './styles';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
};

const Form = () => {
  const { createTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const addTransaction = () => {
    const transaction = {
      ...formData,
      date: formatListDate(formData.date),
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    if (!transaction.amount || !transaction.category) return;
    setOpen(true);
    createTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategory =
    formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Snackbar
        open={open}
        setOpen={setOpen}
        message="Transaction successfully created."
        type="success"
      />
      <Grid item xs={12}>
        <Typography
          align="center"
          variant="subtitle2"
          gutterBottom
        ></Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={e =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategory.map((c, index) => (
              <MenuItem key={index} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="text"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={e => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={e => setFormData({ ...formData, date: e.target.value })}
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={addTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
