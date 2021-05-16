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
  email: '',
  password: '',
};

const SignInForm = () => {
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
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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

            <Link
              to={ROUTES.RESET_PASSWORD}
              variant="body2"
              className={classes.link}
            >
              Forgot password?
            </Link>
          </Grid>
          <Button
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign In
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
            Sign In with Google
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button component={Link} to={ROUTES.SIGN_UP}>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInForm;
