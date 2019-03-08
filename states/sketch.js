// States
// Henry Miranda Bastidas
// March th, 2019
//
// Extra for Experts:
// Added music on the background

// Set the variables that I am going to use for this project
let backgroundImage;
let playerX, playerY, playerRadius;     
let enemyX, enemyY, enemyRadius;     
let enemyX2;
let enemyX3;
let dy;             
let gameOn;
let button;

// Make a function which pre-loads a sound, it also allows the 
//program to find this song on two formats, mp3 or ogg, just in case
// the browser can't find one of them. It also changes the name of the sound as it looks
//for it in assets
function preload() {
  soundFormats("mp3", "ogg", );
  mySound = loadSound("assets/sound.mp3");
  }

//Set up creates the canvas, loads the background image, plays the sound and sets values for some variables
function setup(){
	createCanvas(500, 500);
  backgroundImage = loadImage("assets/bckimg.png");
  
  buttonImage = loadImage("assets/button.png");

  mySound.setVolume(0.1); // volume of the sound
  mySound.play(); // plays the sound

  gameOn = false // variable which allows me to check whether I am on the strat screen or gae screen
  
  //Variables used for the ball mechanis of the game such as coordinates and sizes
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
 

//Function which will set the game in motion as it draws the objects needed
function draw() {

 //Checks if the game has started, if so, the game screen wil be displayed
  if (gameOn === true){
    background(backgroundImage);
    enemyBalls();
		playerBall ();
    itHit();

    //When the ball hits the rigth side of the screen, the game just resets
    // that way there are no winner or losers
    if ((playerX + playerRadius) >= 492){
      gameOn = false;
    }
  }

// If the game has not started, draws a button which allows for the game to start
  if (gameOn === false){
    background(66, 244, 119);  
    fill (250);
    rect(200, 225, 100 , 50);
    playerX = width / 13; //Makes the ball start at the same x-value from the beginnig
    if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 225 && mouseY < 275){
      gameOn = true
    }
    image(buttonImage, 200, 225, 100, 50)
  } 
}

// Function which checks the distance between two balls, if close, it would count as a collition
function itHit() {

  distanceAwayFromCenter = int(dist(playerX, playerY, enemyX, enemyY));//checks distance of center of player ball and enemy ball
  collitionDistance = (playerRadius + enemyRadius);                   // Adds radii of balls 
  distanceAwayFromCenter2 = int(dist(playerX, playerY, enemyX2, enemyY));
  collitionDistance = (playerRadius + enemyRadius);
  distanceAwayFromCenter3 = int(dist(playerX, playerY, enemyX3, enemyY));
  collitionDistance = (playerRadius + enemyRadius);
  
  //if the distance between the centers of the balls is less than the radii added together, it is a collition
  if (distanceAwayFromCenter  <= collitionDistance ||distanceAwayFromCenter2 <= collitionDistance || distanceAwayFromCenter3  <= collitionDistance)  {
    gameOn = false
  }
}

// Creates player ball, and its movement
function playerBall () {
  createPlayerBall();
  movePlayerBall();
  checkWindowBoundary();
}

function createPlayerBall(){
  fill(5, 255, 57)
  ellipse(playerX, playerY, 60);
}

// Moves the ball by chnaging x value of ball according to which arrow key is pressed
function movePlayerBall(){
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 4;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 4;
  }
}

//Checks if the ball is within the window boundary, if yes, the ball doesn't leave
function checkWindowBoundary() {
  if ((playerX - playerRadius) < 0) {
    playerX = playerX + playerRadius / 3
  }
  
  if ((playerX + playerRadius) > 495) {
    playerX = playerX - playerRadius / 4
  }
}

// Creates the enemy balls and their movement 
function enemyBalls() {
  fill(9, 150, 250)
  enemyBall1();
  enemyBall2();
  enemyBall3();
}

function enemyBall1(){
  ellipse(enemyX, enemyY, enemyRadius * 2);               // Creates the enemy ball
  enemyY += dy                               //Makes the ball move thoughout the y-axis
  if (enemyY + enemyRadius >= width || enemyY - enemyRadius <= 0) {// check if the ball has crossed the screen boundary
    dy = -1 * dy;                        //if so it changes its direction
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
