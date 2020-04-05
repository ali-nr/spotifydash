import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  makeStyles,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(1, 0)
  },
  cardContent: {
    maxHeight: 200
  }
}));

const rows = [
  { playlistName: 'playlist name' },
  { playlistName: 'playlist name 2' },
  { playlistName: 'playlist name 3' },
  { playlistName: 'playlist name 4' }
];

export const Playlists = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Grid container justify="space-between" xs={12}>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Playlists
          </Typography>
          <Typography color="textSecondary" variant="body2">
            5
          </Typography>
          <PlaylistPlayIcon color="primary" />
        </Grid>
        <Divider variant="middle" className={classes.divider} />
        <TableContainer className={classes.cardContent}>
          <Table aria-label="sticky table">
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.playlistName}
                  >
                    <TableCell>{row.playlistName}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
