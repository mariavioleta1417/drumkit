'use strict';
const keys = document.querySelectorAll('.key');
const arrayColors = ['#5B41C1','#5893E0','#43C2C2', '#58E55C', '#FCF04E','#F25A5F']; 
let count=0;

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  key.classList.add('sound-text');
  if(!audio) return;
  audio.currentTime= 0;
  audio.play();
  const playColor = document.querySelector('.playing');
  const soundText = document.querySelector('.sound-text');
  if (count <= 5){
    console.log(count);
    playColor.style.borderColor= arrayColors[count];
    soundText.style.color= arrayColors[count];
  }
  else{
    count =0;
    playColor.style.borderColor= arrayColors[count];
    soundText.style.color= arrayColors[count];
  }
  count= count + 1;
  console.log(count);
}
function removeTransition (e){
  if(e.propertyName !== 'transform') return;
  keys.forEach(key => key.style.borderColor = 'black');
  //playColor.removeProperty("border-color");
  this.classList.remove('playing');
  this.classList.remove('sound-text');
  
}

keys.forEach(key => key.addEventListener ('transitionend',removeTransition));
keys.forEach(key => key.focus());
window.addEventListener('keydown', playsound);
