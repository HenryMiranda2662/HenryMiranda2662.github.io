// States
// Henry Miranda Bastidas
// March 25th, 2019
//
// Extra for Experts:
// Added music on the background

let backgroundImage
let state;
let playButton;
let level1Button;
let level2Button;
let player;
let enemy1Level1;
let enemy2Level1;
let enemy3Level1;
let enemy1Level2;
let enemy2Level2;
let enemy3Level2;

function preload() {
  soundFormats("mp3");
  mySound = loadSound("assets/sound.mp3");
}

function setup() {
  createCanvas(500, 500);
  backgroundImage = loadImage("assets/bckimg.png");
  beachImage = loadImage ("assets/beach.png");
  nightImage = loadImage ("assets/nightcity.png");
  tittleImage = loadImage ("assets/tittle.png")
  mySound.setVolume(0.1); 
  mySound.play(); 

  state = "menu";

  playButton = {
  x : width/2,
  y : height/1.5,
  width : 240,
  height : 75,
  image : loadImage("assets/playbutton.png"),
  }

  level1Button = {
  x : width/3,
  y : height/2,
  width : 150,
  height : 80,
  image : loadImage("assets/level1.png"),
  }
  
  level2Button = {
  x : width/1.5,
  y : height/2,
  width : 150,
  height : 80,
  image : loadImage("assets/level2.png"),
  }

  player = {
  x : width/13,
  y : height / 1.5,
  radius : 30,
  }

  enemy1Level1 = {
  x : 100,
  y : height / 2,
  dy : 4,
  radius : 25,
  }
  
  enemy2Level1 = {
  x : width/2 ,
  y : height / 2,
  dy : 9,
  radius : 25,
  }
  
  enemy3Level1 = {
  x : 400,
  y : height / 2,
  dy : 17,
  radius : 25,
  }
  
  enemy1Level2 = {
  x : 100,
  y : height / 6,
	dx : random(4,5),
  dy : random(4,5),
  radius : 25
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
    imageMode(CORNERS)
    background(backgroundImage);
    imageMode(CENTER)
    image(tittleImage, 250, 100, 438, 86)
    displayMenu();
    resetPositions();
    checkCursorMenu();
  }

  if (state === "chooseLevel") {
    background(187, 164, 234);
    chooseLevel();  
    checkCursorLevels();
  }

  if (state === "level1"){
    imageMode(CORNERS)
    background(beachImage);  
    playerBall ();
    itHitLevel1();
    enemyBallsLevel1();  
    noCursor();
    endLevel();
  }

  if (state === "level2"){
    imageMode(CORNERS)
    background(nightImage);  
    playerBall ();
    itHitLevel2();
    enemyBallsLevel2();
    noCursor();
    endLevel();
  }
}

function resetPositions() {
  player.x = width / 13;

  enemy1Level2.x = 100;
  enemy2Level2.x = width / 2;
  enemy3Level2.x = 400;

  enemy1Level2.y = height / 6;
  enemy2Level2.y = height / 6;
  enemy3Level2.y = height / 6;
}

function endLevel (){
  if (player.x >= 469){
    state = "menu"
  }
}

function checkCursorMenu(){
	if ((mouseX > playButton.x - (playButton.width/2)) && (mouseX < playButton.x + (playButton.width/2)) && (mouseY > playButton.y - (playButton.height/2)) && (mouseY < playButton.y + (playButton.height/2))){
    cursor("pointer");
  }

  else {
    cursor(ARROW);
  }
}

function checkCursorLevels(){
	if ((mouseX > level1Button.x - (level1Button.width/2)) && (mouseX < level1Button.x + (level1Button.width/2)) && (mouseY > level1Button.y - (level1Button.height/2)) && (mouseY < level1Button.y + (level1Button.height/2))){
    cursor("pointer");
  }

  else if ((mouseX > level2Button.x - (level2Button.width/2)) && (mouseX < level2Button.x + (level2Button.width/2)) && (mouseY > level2Button.y - (level2Button.height/2)) && (mouseY < level2Button.y + (level2Button.height/2))){
  	cursor("pointer");
  }

  else {
    cursor(ARROW);
  } 
}

function chooseLevel() {
  rectMode(CENTER);
  rect(level1Button.x, level1Button.y, level1Button.width, level1Button.height);
	imageMode(CENTER);
  image(level1Button.image, level1Button.x, level1Button.y, level1Button.width, level1Button.height);
  
  rectMode(CENTER);
  rect(level2Button.x, level2Button.y, level2Button.width, level2Button.height);
	imageMode(CENTER);
  image(level2Button.image, level2Button.x, level2Button.y, level2Button.width, level2Button.height);
}

function displayMenu() {
  rectMode(CENTER);
  rect(playButton.x, playButton.y, playButton.width, playButton.height);
  imageMode(CENTER)
  image(playButton.image, playButton.x, playButton.y, playButton.width, playButton.height);
}

function mousePressed() {
  if (state === "menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "chooseLevel";
    }
  }
  
  if (state === "chooseLevel") {
    if (clickedOnButtonLevel1 (mouseX, mouseY) ) {
      state = "level1";
    }
  }

  if (state === "chooseLevel") {
    if (clickedOnButtonLevel2 (mouseX, mouseY) ) {
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
}

function createPlayerBall(){
  fill(5, 255, 57)
  ellipse(player.x, player.y, player.radius*2)
}

function movePlayerBall(){
  if (keyIsDown(RIGHT_ARROW) && (player.x + player.radius <= width)) {
    player.x += 4;
  }
  
  if (keyIsDown(LEFT_ARROW) && (player.x - player.radius > 0)) {
    player.x -= 4;
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
  return x >= playButton.x - playButton.width/2 && x <= playButton.x + playButton.width/2 && y >= playButton.y - playButton.height/2 && y <= playButton.y + playButton.height/2;
}

function clickedOnButtonLevel1 (x, y) {
  return x >= level1Button.x - level1Button.width/2 && x <= level1Button.x + level1Button.width/2 && y >= level1Button.y - level1Button.height/2 && y <= level1Button.y + level1Button.height/2;
}

function clickedOnButtonLevel2(x, y) {
  return x >= level2Button.x - level2Button.width/2 && x <= level2Button.x + level2Button.width/2 && y >= level2Button.y - level2Button.height/2 && y <= level2Button.y + level2Button.height/2;
}  