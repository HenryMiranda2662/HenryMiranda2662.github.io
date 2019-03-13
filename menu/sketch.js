// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let playButtonX, playButtonY, playButtonWidth, playButtonHeight;
let leve1ButtonX, leve1ButtonY, leve1ButtonWidth, leve1ButtonHeight;
let leve2ButtonX, leve2ButtonY, leve2ButtonWidth, leve2ButtonHeight;
let backgroundIge;
let playerX, playerY, playerRadius;     
let enemyX, enemyY, enemyRadius;     
let enemyX2;
let enemyX3;
let dy;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("assets/sound.mp3");
}

function setup() {
  createCanvas(500, 500);
  backgroundImage = loadImage("assets/bckimgng");
  mySound.setVolume(0.1); 
  mySound.play(); 

  state = "menu";
  buttonX = width/2;
  buttonY = height/1.5;
  buttonWidth = 240;
  buttonHeight = 75;
  playButtonImage = loadImage("assets/playbutton.png");
  
  leve1ButtonX = width/3;
  leve1ButtonY = height/2;
  leve1ButtonWidth = 150;
  leve1ButtonHeight = 80;
  level1Button = loadImage("assets/level1.png");
    
  leve2ButtonX = width/1.5;
  leve2ButtonY = height/2
  leve2ButtonWidth = 150;
  leve2ButtonHeight = 80;
  level2Button = loadImage("assets/level2.png");
  
  playerX = width/13;
  playerY = height / 1.5;
  enemyX = 100;
  enemyY = height / 2;
  enemyX2 = width / 2;
  enemyX3 = 400;
  dy = 2;
  playerRadius = 30;
  enemyRadius = 25;

}

function draw() {
  
  if (state === "menu") {
    background(66, 244, 182);
    //background(backgroundImage);
    displayMenu();
    playerX = width / 13;
    
  }
  if (state === "chooseLevel") {
    background(69, 24, 182);
    chooseLevel();
    
  }
  if (state === "level1"){
    
    //background(backgroundImage);  //why is the image centered??
    background(255);
    enemyBalls();
		playerBall ();
    itHit();
  }
}

function chooseLevel() {
  rectMode(CENTER);
  rect(leve1ButtonX, leve1ButtonY, leve1ButtonWidth, leve1ButtonHeight);
	imageMode(CENTER);
  image(level1Button, leve1ButtonX, leve1ButtonY, leve1ButtonWidth, leve1ButtonHeight);
  
  rectMode(CENTER);
  rect(leve2ButtonX, leve2ButtonY, leve2ButtonWidth, leve2ButtonHeight);
  imageMode(CENTER)
  image(level2Button, leve2ButtonX, leve2ButtonY, leve2ButtonWidth, leve2ButtonHeight);
}

function displayMenu() {
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  imageMode(CENTER)
  image(playButtonImage, buttonX, buttonY, buttonWidth, buttonHeight);
}

function mousePressed() {
  if (state === "menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "chooseLevel";
    }
  }
  
  if (state === "chooseLevel") {
    if (clickedOnButtonLeve1(mouseX, mouseY) ) {
      state = "level1";
    }
  }
  if (state === "chooseLevel") {
    if (clickedOnButtonLeve2(mouseX, mouseY) ) {
      state = "level2";
    }
  }
}

function itHit() {

  distanceAwayFromCenter = int(dist(playerX, playerY, enemyX, enemyY));//checks distance of center of player ball and enemy ball
  collitionDistance = (playerRadius + enemyRadius);                   // Adds radii of balls 
  distanceAwayFromCenter2 = int(dist(playerX, playerY, enemyX2, enemyY));
  collitionDistance = (playerRadius + enemyRadius);
  distanceAwayFromCenter3 = int(dist(playerX, playerY, enemyX3, enemyY));
  collitionDistance = (playerRadius + enemyRadius);
  
  //if the distance between the centers of the balls is less than the radii added together, it is a collition
  if (distanceAwayFromCenter  <= collitionDistance ||distanceAwayFromCenter2 <= collitionDistance || distanceAwayFromCenter3  <= collitionDistance)  {
    state = "menu"
  }
}

function playerBall () {
  createPlayerBall();
  movePlayerBall();
  checkWindowBoundary();
}

function createPlayerBall(){
  fill(5, 255, 57)
  ellipse(playerX, playerY, 60);
}


function movePlayerBall(){
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 4;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 4;
  }
}

function checkWindowBoundary() {
  if ((playerX - playerRadius) < 0) {
    playerX = playerX + playerRadius / 3
  }
  
  if ((playerX + playerRadius) > 495) {
    playerX = playerX - playerRadius / 4
  }
}
 
function enemyBalls() {
  fill(9, 150, 250)
  enemyBall1();
  enemyBall2();
  enemyBall3();
}

function enemyBall1(){
  ellipse(enemyX, enemyY, enemyRadius * 2);
  enemyY += dy                             
  if (enemyY + enemyRadius >= width || enemyY - enemyRadius <= 0) {
    dy = -1 * dy;                        
  }
}

function enemyBall2(){
  ellipse(enemyX2, enemyY, enemyRadius * 2);
  enemyY += dy
  if (enemyY + enemyRadius >= width || enemyY - enemyRadius <= 0) {
    dy = -1 * dy;
  }
}

function enemyBall3(){
  ellipse(enemyX3, enemyY, enemyRadius * 2);
  enemyY += dy
  if (enemyY + enemyRadius >= width || enemyY - enemyRadius <= 0) {
    dy = -1 * dy;
  }
}

function clickedOnButton(x, y) {
  return x >= buttonX - buttonWidth/2 &&
         x <= buttonX + buttonWidth/2 &&
         y >= buttonY - buttonHeight/2 &&
         y <= buttonY + buttonHeight/2;
}

function clickedOnButtonLeve1(x, y) {
  return x >= leve1ButtonX - leve1ButtonWidth/2 &&
         x <= leve1ButtonX + leve1ButtonWidth/2 &&
         y >= leve1ButtonY - leve1ButtonHeight/2 &&
         y <= leve1ButtonY + leve1ButtonHeight/2;
}

function clickedOnButtonLeve2(x, y) {
  return x >= leve2ButtonX - leve2ButtonWidth/2 &&
         x <= leve2ButtonX + leve2ButtonWidth/2 &&
         y >= leve2ButtonY - leve2ButtonHeight/2 &&
         y <= leve2ButtonY + leve2ButtonHeight/2;
}  //how to avoid the double click problem