document.addEventListener('DOMContentLoaded', (event) => {
  const element = document.querySelector('#yourElementId');
  if (element) {
    element.addEventListener('click', function () {
      // Your event handler code
    });
  } else {
    console.error('Element not found');
  }
});
var toggle_btn;
var big_wrapper;
var hamburger_menu;
var overlay;
var close_btn;

function declare() {
  toggle_btn = document.querySelector('.toggle-btn');
  big_wrapper = document.querySelector('.big-wrapper');
  hamburger_menu = document.querySelector('.hamburger-menu');
  overlay = document.querySelector('.overlay');
  close_btn = document.querySelector('.close-btn');
}

const main = document.querySelector('main');

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove('light');
    clone.classList.add('dark');
  } else {
    clone.classList.remove('dark');
    clone.classList.add('light');
  }
  clone.classList.add('copy');
  main.appendChild(clone);

  document.body.classList.add('stop-scrolling');

  clone.addEventListener('animationend', () => {
    document.body.classList.remove('stop-scrolling');
    big_wrapper.remove();
    clone.classList.remove('copy');
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener('click', toggleAnimation);
  hamburger_menu.addEventListener('click', () => {
    big_wrapper.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    big_wrapper.classList.remove('active');
  });
  close_btn.addEventListener('click', () => {
    big_wrapper.classList.remove('active');
  });
}

events();
