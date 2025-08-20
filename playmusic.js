var audio = new Audio();

audio.src = '/background-music/Background.mp3';

audio.autoplay = true;
audio.loop = true;
audio.play();

window.onload = function() {
  if(localStorage.getItem('time') !== null) {
    audio.currentTime = localStorage.getItem('time');
  }
}

window.onbeforeunload = function() {
  localStorage.setItem('time', audio.currentTime);
}

window.addEventListener('keydown', function(event) {
  if (event.key === 'Alt') {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    event.preventDefault();
  }
});