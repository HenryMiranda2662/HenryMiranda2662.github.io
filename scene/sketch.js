// Interactive Scene
// Henry Miranda Bastidas
// March 4th, 2019
//
// Extra for Experts:
// Added music on the background

// Set the variables that I am going to use for this project
let backgroundImage;
let x1, y1, r1;     
let x2, y2, r2;     
let x3;
let x4;
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
  x1 = width/13;
  y1 = height / 1.5;
  x2 = 100;
  y2 = height / 2;
  x3 = width / 2;
  x4 = 400;
  dy = 6;
  r1 = 30;
  r2 = 25;
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
    if ((x1 + r1) >= 492){
      gameOn = false;
      }
  }

// If the game has not started, draws a button which allows for the game to start
  if (gameOn === false){
    background(66, 244, 119);  
    fill (250);
    rect(200, 225, 100 , 50);
    x1 = width / 13; //Makes the ball start at the same x-value from the beginnig
    if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 225 && mouseY < 275){
      gameOn = true
    }
    image(buttonImage, 200, 225, 100, 50)
  }
  
}

// Function which checks the distance between two balls, if close, it would count as a collition
function itHit() {

  distanceAway = int(dist(x1, y1, x2, y2));//checks distance of center of player ball and enemy ball
  collition = (r1 + r2);                   // Adds radii of balls 
  distanceAway2 = int(dist(x1, y1, x3, y2));
  collition = (r1 + r2);
  distanceAway3 = int(dist(x1, y1, x4, y2));
  collition = (r1 + r2);
  
  //if the distance between the centers of the balls is less than the radii added together, it is a collition
  if (distanceAway  <= collition ||distanceAway2 <= collition || distanceAway3  <= collition)  {
    gameOn = false
  }
}

// Creates player ball, and its movement
function playerBall () {
  createPlayerBall();
  
  // Moves the ball by chnaging x value of ball according to which arrow key is pressed
  if (keyIsDown(RIGHT_ARROW)) {
    x1 += 4;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    x1 -= 4;
  }
  
  //Checks if the ball is within the window boundary, if yes, the ball doesn't leave
  if ((x1 - r1) < 0) {
    x1 = x1 + r1 / 3
  }
  
  if ((x1 + r1) > 495) {
    x1 = x1 - r1 / 4
  }
}

function createPlayerBall(){
  fill(5, 0, 0)
  ellipse(x1, y1, 60);
}

function movePlayerBall(){
  
}




// Creates the enemy balls and their movement 
function enemyBalls() {
  
  fill(9, 150, 250)
  
  ellipse(x2, y2, r2 * 2);               // Creates the enemy ball
  y2 += dy                               //Makes the ball move thoughout the y-axis
  if (y2 + r2 >= width || y2 - r2 <= 0) {// check if the ball has crossed the screen boundary
    dy = -1 * dy;                        //if so it changes its direction
  }
  
  ellipse(x3, y2, r2 * 2);
  y2 += dy
  if (y2 + r2 >= width || y2 - r2 <= 0) {
    dy = -1 * dy;
  }
  
  ellipse(x4, y2, r2 * 2);
  y2 += dy
  if (y2 + r2 >= width || y2 - r2 <= 0) {
    dy = -1 * dy;
  }
}
