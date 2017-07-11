//get element

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// build functions
function togglePlay(){
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

// hook up event listeners

video.addEventListener('click',togglePlay);
toggle.addEventListener('click', togglePlay);
