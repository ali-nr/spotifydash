import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Playlists } from './Playlists';

export const Summarizer = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <Playlists />
      </Grid>
    </Grid>
  );
};
