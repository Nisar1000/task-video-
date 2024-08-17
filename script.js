const player = document.getElementById('player');
const playPauseButton = document.getElementById('play-pause');
const muteButton = document.getElementById('mute');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    player.contentWindow.postMessage('{"event":"pause"}', '*');
    playPauseButton.textContent = 'Play';
  } else {
    player.contentWindow.postMessage('{"event":"play"}', '*');
    playPauseButton.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
  playPauseButton.classList.toggle('playing');
});

muteButton.addEventListener('click', () => {
  const isMuted = player.contentWindow.document.querySelector('video').muted;
  player.contentWindow.postMessage(isMuted ? '{"event":"unmute"}' : '{"event":"mute"}', '*');
  muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
});