// Interactive Scene
// Henry Miranda Bastidas
// Feb th, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backgroundImage;
let x1, y1, r1;
let x2, y2, r2;
let dy;
let gameOn;


function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/sound.mp3');
}

function setup(){
	createCanvas(500, 500);
	backgroundImage = loadImage("assets/bckimg.png");
  mySound.setVolume(0.1);
  mySound.play();
  gameOn = false
  x1 = width/3;
  y1 = height / 1.5;
  x2 = 100;
  y2 = height / 2;
  x3 = width / 2;
  x4 = 400;
  dy = 5.5;
  r1 = 30;
  r2 = 25;
}
 
function startGame(){
  if (gameOn === false){
    gameOn = true }
}

function draw() {
  if (gameOn === true){
    background(backgroundImage);
    enemyBalls();
		playerBall ();
  	itHit();
  }
  if (gameOn === false){
		background(160);  
  	button = createButton("Start Game");
		button.position((width/2) -75, (height/2)-25);
  	button.size (150, 50)
		button.mousePressed(startGame);
  }
}

function itHit() {
  distanceAway = int(dist(x1, y1, x2, y2));
  collition = (r1 + r2);
  distanceAway2 = int(dist(x1, y1, x3, y2));
  collition = (r1 + r2);
  distanceAway3 = int(dist(x1, y1, x4, y2));
  collition = (r1 + r2);
  if (distanceAway  <= collition ||distanceAway2 <= collition || distanceAway3  <= collition)  {
  	gameOn = false }
}

function playerBall () {
  fill(5, 0, 0)
  ellipse(x1, y1, 60);
  if (keyIsDown(RIGHT_ARROW)) {
    x1 += 4;}
  if (keyIsDown(LEFT_ARROW)) {
    x1 -= 4;}
  if ((x1 - r1) < 0) {
    x1 = x1 + r1 / 3}
  if ((x1 + r1) > 495) {
    x1 = x1 - r1 / 4}
}

function enemyBalls() {
  fill(9, 150, 250)
  
  ellipse(x2, y2, r2 * 2);
  y2 += dy
  if (y2 + r2 >= width || y2 - r2 <= 0) {
    dy = -1 * dy;}
  
  ellipse(x3, y2, r2 * 2);
  y2 += dy
  if (y2 + r2 >= width || y2 - r2 <= 0) {
    dy = -1 * dy;}
  
  ellipse(x4, y2, r2 * 2);
  y2 += dy
  if (y2 + r2 >= width || y2 - r2 <= 0) {
    dy = -1 * dy;}
}
