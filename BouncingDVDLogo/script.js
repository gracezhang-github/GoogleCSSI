// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, loadImage, background, image, height, width,tint, Math */

let dvdImage;
let x,y;
let xVelocity,yVelocity;
let imageWidth, imageHeight;
let red,blue,green;

function setup() {
  createCanvas(500, 500);

  
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  xVelocity = 3;
  yVelocity = 3;
  imageWidth = 200;
  imageHeight = 150;
  red = 255;
  blue = 255;
  green = 255;
}

function draw() {
  background(0);
  // Draw the logo at the new position.
  tint(red,blue,green);
  image(dvdImage, x, y, imageWidth, imageHeight);
    x += xVelocity;
    y += yVelocity;
  
  if (x > 500 - imageWidth){
    xVelocity = -1 * xVelocity;
    red = Math.random() * 256;
    blue = Math.random() * 256;
    green = Math.random() * 256;
    tint(red,blue,green)
  }
  
  else if (x < 0){
    xVelocity = 3;
    red = Math.random() * 256;
    blue = Math.random() * 256;
    green = Math.random() * 256;
    tint(red,blue,green)
  }
  
  if (y > 500 - imageHeight){
    yVelocity = -1 * yVelocity;
    red = Math.random() * 256;
    blue = Math.random() * 256;
    green = Math.random() * 256;
    tint(red,blue,green)
  }
  else if (y < 0){
    yVelocity = 3;
    red = Math.random() * 256;
    blue = Math.random() * 256;
    green = Math.random() * 256;
    tint(red,blue,green)
  }
}