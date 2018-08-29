'use strict';
const keys = document.querySelectorAll('.key');
/* const arrayColors = ['#5B41C1','#5893E0','#43C2C2', '#58E55C', '#FCF04E','#F25A5F']; */

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  if(!audio) return;
  audio.currentTime= 0;
  audio.play();
}
function removeTransition (e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener ('transitionend',removeTransition));
window.addEventListener('keydown', playsound);
