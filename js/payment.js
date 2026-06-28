var audio = new Audio();

audio.src = '/background-music/Background.mp3';

audio.autoplay = true;
audio.loop = true;
audio.play();

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

window.onload = function() {
  document.getElementById("creditcard").onclick = turnOnCard;
  document.getElementById("paypal").onclick = turnOnPaypal;
  document.getElementById("onlinebanking").onclick = turnOnBank;
  if(localStorage.getItem('time') !== null) {
    audio.currentTime = localStorage.getItem('time');
  }
}

function validateInput(input) {
    input.value = input.value.replace(/\D/g, ''); 
    if (input.value.length > 5) {
    input.value = input.value.slice(0, 5);
    }
}

function ValidateInput(input) {
    input.value = input.value.replace(/\D/g, '');
    if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
    }
}

function init() {
  document.getElementById("creditcard").onclick = turnOnCard;
  document.getElementById("paypal").onclick = turnOnPaypal;
  document.getElementById("onlinebanking").onclick = turnOnBank;
}

function turnOnCard() {
  document.getElementById("CardNumber").disabled=false;
  document.getElementById("securityCode").disabled=false;
  document.getElementById("expiryDate").disabled=false;
  document.getElementById("bank").disabled=true;
}

function turnOnPaypal() {
  document.getElementById("CardNumber").disabled=true;
  document.getElementById("securityCode").disabled=true;
  document.getElementById("expiryDate").disabled=true;
  document.getElementById("bank").disabled=true;
}

function turnOnBank() {
  document.getElementById("CardNumber").disabled=true;
  document.getElementById("securityCode").disabled=true;
  document.getElementById("expiryDate").disabled=true;
  document.getElementById("bank").disabled=false;
}