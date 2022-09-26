const musicBtn = document.querySelectorAll(".btn");
const audio = document.querySelectorAll(".audio");

// Function to Play music
function playMusic(music, btn) {
  music.play();
  btn.classList.add('active');
  setTimeout(() => {
    btn.classList.remove('active');
  }, 1500)
}
// On click of keys below function works
window.addEventListener("keyup", function (e) {
  musicBtn.forEach((btn, i)=>{
    if(e.key === btn.dataset.btn){
      playMusic(audio[i], btn);      
    }   
  });
});
