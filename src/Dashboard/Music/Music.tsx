import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@material-ui/core';

const songs = [
  {
    title: 'How do you sleep?',
    artist: 'Sam smith',
    album: 'how do you sleep?'
  },
  {
    title: 'How do you sleep?',
    artist: 'Sam smith',
    album: 'how do you sleep?'
  },
  {
    title: 'How do you sleep?',
    artist: 'Sam smith',
    album: 'how do you sleep?'
  },
  {
    title: 'How do you sleep?',
    artist: 'Sam smith',
    album: 'how do you sleep?'
  },
  {
    title: 'How do you sleep?',
    artist: 'Sam smith',
    album: 'how do you sleep?'
  }
];
export const Music = () => {
  return (
    <Card>
      <CardHeader subheader={`in total`} title="Latest products" />
      <Divider />
      <CardContent>
        <List>
          {songs.map((song, i) => (
            <ListItem divider={i < songs.length - 1} key={song.title}>
              <ListItemText primary={song.title} secondary={`Updated `} />
              {/* <IconButton edge="end" size="small">
                <MoreVertIcon />
              </IconButton> */}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
