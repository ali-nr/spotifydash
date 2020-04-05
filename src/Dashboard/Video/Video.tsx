import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: Function;
    YT: any;
  }
}

// function onYouTubeIframeAPIReady() {
//   new YT.Player('video-player', {
//     events: {
//       onReady: onPlayerReady
//       //   'onStateChange': onPlayerStateChange
//     }
//   });
// }

let loadYT: any;
let player: any;

export const Video = () => {
  function onPlayerReady(event: any) {
    event.target.playVideo();
    setTimeout(() => {
      player.loadVideoByUrl('http://www.youtube.com/v/bQJsJbjVM2s?version=3');
    }, 5000);
  }

  useEffect(() => {
    if (!loadYT) {
      loadYT = new Promise(resolve => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag: HTMLElement = document.getElementsByTagName(
          'script'
        )[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
        window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      });
    }

    loadYT.then((YT: any) => {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        events: {
          onReady: onPlayerReady
          //   'onStateChange': onPlayerStateChange
        }
      });
    });
  });
  return (
    <Grid
      container
      xs={12}
      justify="center"
      alignItems="center"
      alignContent="center"
      direction="column"
    >
      <div id="player"></div>
    </Grid>
  );
};
