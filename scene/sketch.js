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

// Make a function which pre-loads a sound, it also allows the 
//program to find this song on two formats, mp3 or ogg, just in case
// the browser can't find one of them. It also changes the name of the sound as it looks
//for it in assets
function preload() {
  soundFormats("mp3", "ogg", "acc", "wma", "flac", "alac", "aiff", "wav", "pcm");
  mySound = loadSound("assets/sound.mp3");
}

//Set up creates the canvas, loads the background image, plays the sound
// and sets values for some variables
function setup(){
	createCanvas(500, 500);
  backgroundImage = loadImage("assets/bckimg.png");
  
  mySound.setVolume(0.1); // volume of the sound
  mySound.play(); // plays the sound

  gameOn = false // variable which allows me to check whether I am on the strat screen or gae screen
  
  //Variables used for the ball mechanis of the game such as coordinates and sizes
  x1 = width/3;
  y1 = height / 1.5;
  x2 = 100;
  y2 = height / 2;
  x3 = width / 2;
  x4 = 400;
  dy = 4.7;
  r1 = 30;
  r2 = 25;
}
 
// function which checks if the game has started or not when the button is pressed
function startGame(){
  
  if (gameOn === false){
    gameOn = true }
}


//Function which will set the game in motion as it draws the objects needed
function draw() {

//Checks if the game has started, if so, the game screen wil be displayed
  if (gameOn === true){
    background(backgroundImage);
    enemyBalls();
		playerBall ();
  	itHit();
  }

//If the game has not started, draws a button which allows for the game to start
  if (gameOn === false){
    background(160);  
  	button = createButton("Start Game");
		button.position((width/2) -75, (height/2)-25);
  	button.size (150, 50)
    button.mousePressed(startGame); // if the button is pressed, it would set 
                                    //in motion the fuction which will start the game
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
  fill(5, 0, 0)
  ellipse(x1, y1, 60);
  
  // Moves the ball by chnaging x value of ball according to whihc arrow key is pressed
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

// Creates the enemy balls and their movement 
function enemyBalls() {
  
  fill(9, 150, 250)
  
  ellipse(x2, y2, r2 * 2);               // Creates the enemy ball
  y2 += dy                               //Makes the ball move thoughout the y-axis
  if (y2 + r2 >= width || y2 - r2 <= 0) {// checkc if the ball has crossed the screen boundary
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
