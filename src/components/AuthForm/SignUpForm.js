import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';
import GoogleIcon from './GoogleIcon';
import Input from './Input';
import useStyle from './styles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const classes = useStyle();

  const handleShowPassword = () => {
    setShowPassword(prevShoWPassword => !prevShoWPassword);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="firstName"
              label="First Name"
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              name="lastName"
              label="Last Name"
              handleChange={handleChange}
              half
            />
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />

            <Input
              name="confirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="password"
            />
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {}}
            disabled={false}
            startIcon={<GoogleIcon />}
            className={classes.googleButton}
          >
            Sign Up with Google
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button component={Link} to={ROUTES.SIGN_IN}>
                Already have an account? Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
