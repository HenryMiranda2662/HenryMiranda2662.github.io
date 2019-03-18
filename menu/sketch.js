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
let backgroundImage;
let playerX, playerY, playerRadius;     
let enemyX, enemyY, enemyRadius;     
let enemyX2;
let enemyX3;
let enemyLevel1dy;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("sound.mp3");
}

function setup() {
  createCanvas(500, 500);
  backgroundImage = loadImage("assets/bckimg.png");
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
  
  player = {
  x : width/13,
  y : height / 1.5,
  radius : 30,
  }

  enemy1Level1 = {
  x : 100,
  y : height / 2,
  dy : 6,
  radius : 25,
  }
  
  enemy2Level1 = {
  x : width/2 ,
  y : height / 2,
  dy : 6,
  radius : 25,
  }
  
  enemy3Level1 = {
  x : 400,
  y : height / 2,
  dy : 6,
  radius : 25,
  }
  
  enemy1Level2 = {
  x : 100,
  y : height / 6,
	dx : random(4,5),
  dy : random(4,5),
  radius : 25,
  }
  
  enemy2Level2 = {
  x : width/2 ,
  y : height / 6,
  dx : random(4,5),
  dy : random(4,5),
  radius : 25,
  }
  
  enemy3Level2 = {
  x : 400,
  y : height / 6,
  dx : random(4,5),  
  dy : random(4,5),
  radius : 25,
  }
}

function draw() {
  
  if (state === "menu") {
    background(66, 244, 182);
    displayMenu();
    
    player.x = width / 13;
    
    enemy1Level2.x = 100;
    enemy2Level2.x = width / 2;
    enemy3Level2.x = 400;
    
    enemy1Level2.y = height / 6;
    enemy2Level2.y = height / 6;
    enemy3Level2.y = height / 6;
  }

  if (state === "chooseLevel") {
    background(69, 24, 182);
    chooseLevel();  
  }

  if (state === "level1"){
    imageMode(CORNERS)
    background(backgroundImage);  
    playerBall ();
    itHitLevel1();
    enemyBallsLevel1();  
  }

  if (state === "level2"){
    imageMode(CORNERS)
    background(backgroundImage);  
    playerBall ();
    itHitLevel2();
    enemyBallsLevel2();
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

function itHitLevel1() {

  distanceAwayFromCenter1 = int(dist(player.x, player.y, enemy1Level1.x, enemy1Level1.y));                   
  distanceAwayFromCenter2 = int(dist(player.x, player.y, enemy2Level1.x, enemy2Level1.y));
  distanceAwayFromCenter3 = int(dist(player.x, player.y, enemy3Level1.x, enemy3Level1.y));
  
  collitionDistance1 = (player.radius + enemy1Level1.radius);
  collitionDistance2 = (player.radius + enemy2Level1.radius);
  collitionDistance3 = (player.radius + enemy3Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||distanceAwayFromCenter2 <= collitionDistance1 || distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu"
  }
  if (distanceAwayFromCenter1  <= collitionDistance2 ||distanceAwayFromCenter2 <= collitionDistance2 || distanceAwayFromCenter3  <= collitionDistance2)  {
    state = "menu"
  }
  if (distanceAwayFromCenter1  <= collitionDistance3 ||distanceAwayFromCenter2 <= collitionDistance3 || distanceAwayFromCenter3  <= collitionDistance3)  {
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
  ellipse(player.x, player.y, player.radius*2)
}

function movePlayerBall(){
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 4;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 4;
  }
}

function checkWindowBoundary() {
  if ((player.x - player.radius) < 0) {
    player.x = player.x + player.radius / 3
  }
  
  if ((player.x + player.radius) > 495) {
    player.x = player.x - player.radius / 4
  }
}
 
function enemyBallsLevel1() {
  fill(9, 150, 250)
  enemyBall1Level1();
  enemyBall2Level1();
  enemyBall3Level1();
}

function enemyBall1Level1() {
  ellipse(enemy1Level1.x, enemy1Level1.y, enemy1Level1.radius * 2);
  enemy1Level1.y += enemy1Level1.dy                             
  
  if (enemy1Level1.y + enemy1Level1.radius >= height || enemy1Level1.y - enemy1Level1.radius <= 0) {
    enemy1Level1.dy = -1 * enemy1Level1.dy;                        
  }
}

function enemyBall2Level1() {
  ellipse(enemy2Level1.x, enemy2Level1.y, enemy2Level1.radius * 2);
  enemy2Level1.y += enemy2Level1.dy
  if (enemy2Level1.y + enemy2Level1.radius >= height || enemy2Level1.y - enemy2Level1.radius <= 0) {
    enemy2Level1.dy = -1 * enemy2Level1.dy;
  }
}

function enemyBall3Level1() {
  ellipse(enemy3Level1.x, enemy3Level1.y, enemy3Level1.radius * 2);
  enemy3Level1.y += enemy3Level1.dy
  if (enemy3Level1.y + enemy3Level1.radius >= height || enemy3Level1.y - enemy3Level1.radius <= 0) {
    enemy3Level1.dy = -1 * enemy3Level1.dy;
  }
}

function enemyBallsLevel2() {
  fill(9, 150, 250)
  enemyBall1Level2();
  enemyBall2Level2();
  enemyBall3Level2();
}

function enemyBall1Level2() {
  ellipse(enemy1Level2.x, enemy1Level2.y, enemy1Level2.radius * 2);
  enemy1Level2.x += enemy1Level2.dx
  enemy1Level2.y += enemy1Level2.dy    
  if (enemy1Level2.x + enemy1Level2.radius >= width || enemy1Level2.x - enemy1Level2.radius <= 0) {
    enemy1Level2.dx = -1 * enemy1Level2.dx; 
  }                        
  if (enemy1Level2.y + enemy1Level2.radius >= height || enemy1Level2.y - enemy1Level2.radius <= 0) {
    enemy1Level2.dy = -1 * enemy1Level2.dy;                        
  }
}

function enemyBall2Level2() {
   ellipse(enemy2Level2.x, enemy2Level2.y, enemy2Level2.radius * 2);
  enemy2Level2.x += enemy2Level2.dx
  enemy2Level2.y += enemy2Level2.dy    
  if (enemy2Level2.x + enemy2Level2.radius >= width || enemy2Level2.x - enemy2Level2.radius <= 0) {
    enemy2Level2.dx = -1 * enemy2Level2.dx; 
  }                        
  if (enemy2Level2.y + enemy2Level2.radius >= height || enemy2Level2.y - enemy2Level2.radius <= 0) {
    enemy2Level2.dy = -1 * enemy2Level2.dy;                        
  }
}

function enemyBall3Level2() {
   ellipse(enemy3Level2.x, enemy3Level2.y, enemy3Level2.radius * 2);
  enemy3Level2.x += enemy3Level2.dx
  enemy3Level2.y += enemy3Level2.dy    
  if (enemy3Level2.x + enemy3Level2.radius >= width || enemy3Level2.x - enemy3Level2.radius <= 0) {
    enemy3Level2.dx = -1 * enemy3Level2.dx; 
  }                        
  if (enemy3Level2.y + enemy3Level2.radius >= height || enemy3Level2.y - enemy3Level2.radius <= 0) {
    enemy3Level2.dy = -1 * enemy3Level2.dy;                        
  }
}

function itHitLevel2() {
  
  distanceAwayFromCenter1 = int(dist(player.x, player.y, enemy1Level2.x, enemy1Level2.y));                   
  distanceAwayFromCenter2 = int(dist(player.x, player.y, enemy2Level2.x, enemy2Level2.y));
  distanceAwayFromCenter3 = int(dist(player.x, player.y, enemy3Level2.x, enemy3Level2.y));
  
  collitionDistance1 = (player.radius + enemy1Level2.radius);
  collitionDistance2 = (player.radius + enemy2Level2.radius);
  collitionDistance3 = (player.radius + enemy3Level2.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||distanceAwayFromCenter2 <= collitionDistance1 || distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu"
  }
  if (distanceAwayFromCenter1  <= collitionDistance2 ||distanceAwayFromCenter2 <= collitionDistance2 || distanceAwayFromCenter3  <= collitionDistance2)  {
    state = "menu"
  }
  if (distanceAwayFromCenter1  <= collitionDistance3 ||distanceAwayFromCenter2 <= collitionDistance3 || distanceAwayFromCenter3  <= collitionDistance3)  {
    state = "menu"
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
}  