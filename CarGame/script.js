/* global createCanvas, background, colorMode, HSB, backgroundColor, color, fill, width, height
*     ellipse, rect, text, line, keyCode, BACKSPACE
*     textSize, random, image, loadImage, textStyle
*     UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, BOLD
*     collideLineCircle, collideRectCircle, createButton
*/

let backgroundColor, score, lives, gameIsOver, gameoverImage, riverImage;
let frogX, frogY, frogV, frogDia;
let car1X, car1Y, car1V, car1W, car1H;
let car2X, car2Y, car2V, car2W, car2H;
let car3X, car3Y, car3V, car3W, car3H;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500); // defines the canvas dimensions
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95; 
  setupFrog();
  score = 0; 
  lives = 5; 
  gameIsOver = false;
  car1X = random(width);
  car1Y = random(height);
  car1V = 5;
  car1W = 40;
  car1H = 30;
  car2X = random(width);
  car2Y = random(height);
  car2V = 5;
  car2W = 40;
  car2H = 30;
  car3X = random(width);
  car3Y = random(height);
  car3V = 5;
  car3W = 40;
  car3H = 30;
  gameoverImage = loadImage("https://cdn.glitch.com/81c08556-9cd7-4094-a71e-f6217be7cbc2%2Fgo.jpg?v=1594762154243")
  riverImage = loadImage("https://cdn.glitch.com/81c08556-9cd7-4094-a71e-f6217be7cbc2%2Frsz_river.png?v=1594772308655")
}

function setupFrog() {
  frogX = width/2; // width of frogX is random
  frogY = 450; // height of frogY is random
  frogV = 10;
  frogDia = 20
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  
  // Code for green goal line
  fill('green')
  rect(10, 185, width/2, 20);
  
  // code for river
  image(riverImage, 200, 350)
  image(riverImage, 0, 250)
  line(400, 440, 200,320)
  line(200, 390, 300, 450)
  line(-20, 200, 170, 340);
  line(-130, 200, 150, 400);


  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20);
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
}

function keyPressed() {
  if (gameIsOver) {
    return;
  }
  if (keyCode === UP_ARROW) {
    frogY -= frogV;
  } else if (keyCode === DOWN_ARROW){
    frogY += frogV;
  } else if (keyCode === LEFT_ARROW) {
    frogX -= frogV;
  } else if (keyCode === RIGHT_ARROW) {
    frogX += frogV;
  }  
}

function moveCars() {
  // Move the car
  if (gameIsOver) {
    return;
  }
  car1X += car1V;
  car2X += car2V;
  car3X += car3V;
  
  // Reset if it moves off screen
  if (car1X > width) {
    car1X = -40;
  }
  if (car2X > width) {
    car2X = -40;
  }
  if (car3X > width) {
    car3X = -40;
  }
}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  rect(car1X, car1Y, car1W, car1H);
  fill('blue')
  rect(car2X, car2Y, car2W, car2H);
  fill('purple')
  rect(car3X, car3Y, car3W, car3H);
  
  if (collideLineCircle(400, 440, 200, 320, frogX, frogY, 20) ||
     collideLineCircle(200, 390, 300, 450, frogX, frogY, 20) ||
     collideLineCircle(-20, 200, 170, 340, frogX, frogY, 20) ||
     collideLineCircle(-130, 200, 150, 400, frogX, frogY, 20)) {
    lives--;
    setupFrog();
  }
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
   if (gameIsOver) {
    return;
  }
  if (collideRectCircle(car1X, car1Y, car1W, car1H, frogX, frogY, frogDia) ||
     collideRectCircle(car2X, car2Y, car2W, car2H, frogX, frogY, frogDia) ||
     collideRectCircle(car3X, car3Y, car3W, car3H, frogX, frogY, frogDia)) {
    setupFrog();
    lives--;
  }
  
  
  // if the frog has no more lives, game over
  if (lives === 0) {
    gameIsOver = true;
  }
}
 
function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if (frogY < 50) {
    score += 5;
    setupFrog();
  } else if (frogY === 190) {
    score += 100;
    setupFrog();
  } 
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`, 10, 40);
  // display bonus score
  textSize(20)
  text("+100", 100, 185);

  // Display game over message if the game is over
  textSize(42);
  if (gameIsOver) {
    image(gameoverImage, 70, 70, 350, 350)
    }
  }
  

