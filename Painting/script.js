/* global image, keyIsPressed, textSize, loadImage, pmouseX, pmouseY,key, mouseIsPressed, clear, createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke, backgroundColor, color, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

// We'll use variables for most of our colors in this code-along.

let brushHue, sent1, sent2, sent3, img;

function setup() {
  // Canvas & color settings
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
  img = loadImage("https://cdn.glitch.com/564b22fe-673c-4fb0-9be2-9373c54b1efc%2Favocado.png?v=1594369048486")
}

function draw() {
  stroke('white');
  textSize(20);
  text('Press your mouse to start drawing!', 150, 30);
  chooseColors();
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  if (keyIsPressed === true){
    image(img, mouseX, mouseY, 110, 100)
  }
    

}

function keyPressed() {
  if (key == 'c') {
    background(95);
  }
}


function chooseColors() {
  brushHue += 6; // brushHue = brushHue + 1

  if (brushHue >= 360) {
    brushHue = 0;
  }

  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}
