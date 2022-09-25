const musicBtn = document.querySelectorAll(".btn");
const audio = document.querySelectorAll(".audio");

function playMusic(music, btn) {
  music.play();
  btn.classList.add('active');
  setTimeout(() => {
    btn.classList.remove('active');
  }, 1500)
}

window.addEventListener("keyup", function (e) {
  musicBtn.forEach((btn) => {
    if (e.key == "a" && btn.dataset.btn == 'a') {
      playMusic(audio[0], btn);
    }
    else if (e.key == "s" && btn.dataset.btn == 's') {
      playMusic(audio[1], btn);
    }
    else if (e.key == "d" && btn.dataset.btn == 'd') {
      playMusic(audio[2], btn);
    }
    else if (e.key == "f" && btn.dataset.btn == 'f') {
      playMusic(audio[3], btn);
    }
    else if (e.key == "j" && btn.dataset.btn == 'j') {
      playMusic(audio[4], btn);
    }
    else if (e.key == "k" && btn.dataset.btn == 'k') {
      playMusic(audio[5], btn);
    }
    else if (e.key == "l" && btn.dataset.btn == 'l') {
      playMusic(audio[6], btn);
    }
  });

});