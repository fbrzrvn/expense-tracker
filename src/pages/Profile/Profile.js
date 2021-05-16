import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Title from '../../components/Title';
import MainLayout from '../../layout/MainLayout';
import useStyle from '../../styles';

const Profile = () => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Title>My Profile</Title>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Profile;
