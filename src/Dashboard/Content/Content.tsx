import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { Music } from '../Music';
import { Video } from '../Video';

export const Content = () => {
  return (
    <Grid container justify="space-between" spacing={4}>
      <Grid item xs={12} md={6}>
        <Music />
      </Grid>

      <Grid container item xs={12} md={6} justify="center">
        <Card>
          <CardContent>
            <Video></Video>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
