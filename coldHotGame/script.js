/* global createCanvas, background, colorMode, HSB, backgroundColor, color
*     text, width, height, 
*     mouseX, mouseY, mouseIsPressed,
*     windowWidth, windowHeight, round, sqrt,
*     loadImage, image, random
*/

let backgroundColor, mousePosition;
let peppaPosition, peppa

function setup() {
  // Canvas & color settings
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;

  peppaPosition = {
    x: random(100, 900),
    y: random(70, 500)
  };
  
  peppa = loadImage("https://cdn.glitch.com/2a366648-465b-48ce-b9e0-7dbdb714a650%2FPG.png?v=1595286187268")
}

function draw() {
  background(backgroundColor);
  
  mousePosition = {
    x: mouseX,
    y: mouseY
  };
  
  let distance2 = round(computeDistance(mousePosition, peppaPosition));
  text(`The distance between the mouse and peppa is ${distance2}`, 20, 20);
  
  let distanceCategory = computeDistanceCategory(mousePosition, peppaPosition);
  text(`You're ${distanceCategory}`, 20, 40)
  
}

function computeDistance(pointA, pointB) {
  let deltaX = pointA.x - pointB.x;
  let deltaY = pointA.y - pointB.y;

  let distance = sqrt(deltaX ** 2 + deltaY ** 2);
  return distance;
}

function computeDistanceCategory(pointA, pointB) {
  let distance = computeDistance(pointA, pointB);
  
  if (distance > 200) {
    //cold
    backgroundColor = color(240, 10, 100);
    return "cold";
  } else if (distance > 50) {
    //warm
    backgroundColor = color(120, 10, 100);
    return "warm";
  } else {
    //hot
    backgroundColor = color(0, 10, 100);
    image(peppa, peppaPosition.x, peppaPosition.y, 250, 220);
    text("CONGRATS!! YOU FOUND THE PEPPA", 200, 200)
    return "hot";

  }
}
