import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const vimeoVideo = document.getElementById("vimeo-player");

const STORAGE_KEY = "videoplayer-current-time";


const iframe = document.querySelector('iframe'); 
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
}); 

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({
  seconds
}) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);










