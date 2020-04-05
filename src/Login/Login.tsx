import React, { useEffect } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { navigate } from '@reach/router';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  }
});

export const Login = () => {
  const classes = useStyles();
  const handleDashboardNavigation = () => {
    navigate('/dashboard');
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleDashboardNavigation}
      >
        Login with Spotify
      </Button>
    </Grid>
  );
};
