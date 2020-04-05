import React from 'react';
import { TopBar } from './TopBar';
import { Summarizer } from './Summarizer';
import { Content } from './Content';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <div className={classes.root}>
        <Summarizer />
        <Content></Content>
      </div>
    </>
  );
};
