'use strict';
const inputElement = document.querySelector('input');
const reader = new FileReader();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const img = document.createElement('img');

const zoom = document.getElementById('zoom');
const leftRight = document.getElementById('leftRight');
const upDown = document.getElementById('upDown');

let x=0;
let y=0;
let originalHeight= canvas.height;
let originalWidth = canvas.width; //0
let width = 0;
let height = 0;
let x_values = 0;
let y_values = 0;

inputElement.addEventListener('change', (evt) => {
  const file = inputElement.files[0];
  reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
  img.src = reader.result;
});

img.addEventListener('load', (evt) => {
  originalWidth = originalHeight*img.width/img.height;
  ctx.drawImage(img, 0, 0, originalWidth, originalHeight);
});


upDown.addEventListener('input', (evt) => {
  y_values = upDown.value;
  redraw();
  //console.log("updown");
});

leftRight.addEventListener('input', (evt) =>  {
  x_values = leftRight.value;
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
 // ctx.drawImage(img, values, 0, width, height);
  redraw();
  //console.log("leftright");
});

zoom.addEventListener('input', (evt) => {
  width = originalWidth*zoom.value;
  height = originalHeight*zoom.value;
  redraw();
});

const redraw = () => {
  ctx.clearRect( x, y, canvas.width, canvas.height);
  ctx.drawImage(img, x_values, y_values, width, height);
};
