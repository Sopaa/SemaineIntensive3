var video = document.querySelector('.playerBox');
var source = data.films.src;
var play = document.querySelector('.play_pause');
var stop = document.getElementById("stop");
var fullscreenbtn = document.getElementById("fullscreenbtn");
var volumeslider = document.getElementById("volumeslider");
var mutebtn = document.getElementById("mutebtn");
var curtimetext = document.getElementById("curtimetext");
var tempsTotal = document.getElementById("tempsTotal");
var timeline = document.getElementById('progressBar');
var btnContainer = document.querySelector('.btnContainer');
var megaContainer = document.querySelector('.megaContainer');


//******************************
//Pour le Play/Pause de la vidéo
//******************************

video.setAttribute("src", source);
play.addEventListener('click', playPause, false);

function playPause() {
  if (video.paused) {
    video.play();
    play.style.backgroundImage = "url('img/pause_button.svg')";
  }
  else {
    video.pause();
    play.style.backgroundImage = "url('img/play_button.svg')";
  }
};

//**************************************************
//Pour stopper la vidéo et la faire revenir au début
//**************************************************
stop.addEventListener('click', stopVideo, true);

function stopVideo() {
  if (video.currentTime >= 1) {
    video.currentTime = video.currentTime - video.currentTime;
    video.pause();
    play.style.backgroundImage = "url('img/play_button.svg')";
  }
}


//****************************
//Pour l'affichage plein écran
//****************************

fullscreenbtn.addEventListener("click", monFullScreen, false);


function monFullScreen() {
  if (btnContainer.requestFullScreen) {
    btnContainer.requestFullScreen();
    video.style.width = "100%";
    video.style.height = "100%";
    megaContainer.style.zIndex = "0";

  } else if (btnContainer.webkitRequestFullScreen) {
    btnContainer.webkitRequestFullScreen();
    video.style.width = "100%";
    video.style.height = "100%";
    megaContainer.style.bottom = "0";
  } else if (btnContainer.mozRequestFullScreen) {
    btnContainer.mozRequestFullScreen();
    video.style.width = "100%";
    video.style.height = "100%";
    megaContainer.style.bottom = "0";
  }
}

// window.addEventListener('keyup', function(event) {
//   if (event.which == 91+70) {
//     monFullScreen();
//     video.play();
//     play.style.backgroundImage = "url('img/pause_button.svg')";
//   }
// });

//**************************************
//Pour l'affichage du menu enplein écran
//**************************************



//******************************
//Pour la gestion du mute volume
//******************************

mutebtn.addEventListener("click", vidmute, false);

function vidmute() {
  if (video.muted) {
    video.muted = false;
    mutebtn.style.backgroundImage = "url('img/volume_icon.svg')";

    //mutebtn.innerHTML = "Mute";
    volumeslider.value = 100;
  } else {
    video.muted = true;
    mutebtn.style.backgroundImage = "url('img/volume_iconmute.svg')";
    //mutebtn.innerHTML = "unMute";
    volumeslider.value = 0;
  }
}

//*************************
//Pour la gestion du volume
//*************************

volumeslider.addEventListener("change", setvolume, false);

function setvolume() {
  video.volume = volumeslider.value / 100;
}

//*****************************************
//Pour la gestion de la bare de progression
//*****************************************


//timeline.style.backgroundColor = "#FEDE10";



//***************************
//Pour la bare de progression
//***************************

timeline.addEventListener("input", myProgressBar, false);

video.addEventListener('timeupdate', function() {
  if (!video.currentTime) {
    timeline.value = 0;
  }

  timeline.value = video.currentTime / video.duration * 100;

  var minutes = Math.floor(video.currentTime / 60);
  var secondes = Math.floor(video.currentTime - 60 * minutes);

  if (secondes < 10) {
    tempsEnCours.textContent = minutes + ':' + '0' + secondes;
  } else {
    tempsEnCours.textContent = minutes + ':' + secondes;
  }
});

function myProgressBar() {
  var aller_a = video.duration * (timeline.value / 100);
  video.currentTime = aller_a;
}
