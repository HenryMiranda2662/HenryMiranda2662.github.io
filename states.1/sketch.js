// States
// Henry Miranda Bastidas
// March 25th, 2019
//
// Extra for Experts:
// Included translate on an object

//Global Variables that I will use during the code
let backgroundImage;
let mySound;
let beachImage;
let titleImage;
let state;
let playButton;
let level1Button;
let points;
let player;
let enemy1Level1;
let enemy2Level1;
let enemy3Level1;
let txt;

let abilityButton;

let gridSize = 2;
let cellSize;
let xOffset;
let yOffset;

//Pre-load sound so it begings before the actual code, also changes its name
function preload() {
  soundFormats("mp3");
  mySound = loadSound("assets/WOW.mp3");
}

function setup() {
  createCanvas(500, 500);

  //Different images which I will use later as background
  backgroundImage = loadImage("assets/bckimg.png");
  beachImage = loadImage ("assets/beach.png");
  
  titleImage = loadImage ("assets/title.png");

  //Set volume of sound, as well as plays it
  mySound.setVolume(0.4); 
  mySound.loop();

  
  state = "menu";//Sets the first state as menu

  score = 0;//Sets the score to 0 at the beginning of game

  txt = "You Finished the Game";// text that will be used later

  // Different objects that I will use during the game, such as player, enemies and different buttons
  // Each object has its won differnt attributes (x-value, y-value, width, height, etc)
  playButton = {
  x : width/2,
  y : height/1.5,
  width : 240,
  height : 75,
  image : loadImage("assets/playbutton.png"),   // Two images, which will switch back and forth when you  
  image2 : loadImage ("assets/playbutton2.png"),// hover the mouse over them
  }

  menuButton = {
  x : 250,
  y : 210,
  width : 150,
  height : 75,
  image : loadImage("assets/menu.png"),
  image2: loadImage("assets/menu2.png"),
  }

  level1Button = {
  x : width/3,
  y : height/2,
  width : 150,
  height : 80,
  image : loadImage("assets/level1.png"),
  image2 : loadImage("assets/level1-2.png"),
  }
  
  player = {
  x : 31,
  y : height / 1.5,
  radius : 30,
  }

  points = {// objects that need to be collected
  x : 480,
  y : height/1.5 ,
  width : 20,
  height : 20,
  }

  enemy1Level1 = {
  x : 100,
  y : height / 2,
  dy : 17,
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
  dy : 5,
  radius : 25,
  }

  abilityButton = {
  x : 365,
  y : 250,
  width : 120,
  height : 75,
  image : loadImage("assets/go.png"),
  image2 : loadImage("assets/go2.png")
  }
    
  cellSize = 150;
  xOffset = 50;
  yOffset = 100;
  power = "cero"
  

}
  

function draw() {
  // This state will draw the first page the user will see
  if (state === "menu") {
    menuScreen();
  }

  if (state === "grid") {
    displayGrid();
  }

  if (state === "chooseLevel") {
    choseLevelScreen(); 
  }

  if (state === "level1") {
    level1Screen();
  }

  if (state === "endScreen"){
    gameOver();
  }
}

function keyPressed(){
  if (state === "level1") {
    if (power === "uno" && key === "p") {
      level1ScreenSpeed();
    }
    if (power === "dos" && key === "p") {
      level1ScreenSlowdown();
    }
    if (power === "tres" && key === "p") {
      level1ScreenSmall();
    }
    if (power === "cuatro" && key === "p") {
      level1ScreenSmall();
    } 
  }
}

function displayGridButton() {
  //rect(abilityButton.x, abilityButton.y, abilityButton.width , abilityButton.height);
  imageMode(CORNER);
  image(abilityButton.image, abilityButton.x, abilityButton.y, abilityButton.width , abilityButton.height)
}

function displayGrid() {
  
  push();
  translate(xOffset, yOffset);
  background(0)
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  pop();

  displayGridButton();
  checkCursorAbility();
}

function menuScreen(){
  imageMode(CORNERS);
  background(backgroundImage);
  imageMode(CENTER); // Centers the x and y coordinates of the image from the upper-left corner
  image(titleImage, 250, 100, 438, 86);
  displayMenu();
  resetPositions();
  checkCursorMenu();
}

function choseLevelScreen(){
  // After mouse is clicked on "Play" button, user'll see this screen, which allows to choose a level
  background(187, 164, 234);
  chooseLevel();  
  checkCursorLevels();
}

function level1Screen(){
  //First level
  imageMode(CORNERS);
  background(beachImage);  
  createPlayerBall();
  movePlayerBall();
  itHitLevel1();
  enemyBallsLevel1();  
  noCursor();
  rectPoints();
  collectPoints();
  changeLevels();
}

function level1ScreenSpeed(){
  imageMode(CORNERS);
  background(beachImage);  
  createPlayerBall();
  movePlayerBallSpeed();
  itHitLevel1();
  enemyBallsLevel1();  
  noCursor();
  rectPoints();
  collectPoints();
  changeLevels();
}

function level1ScreenSlowdown(){
  imageMode(CORNERS);
  background(beachImage);  
  createPlayerBall();
  movePlayerBall();
  itHitLevel1();
  enemyBallsLevel1SS();
  noCursor();
  rectPoints();
  collectPoints();
  changeLevels();
}

function level1ScreenSmall(){
  imageMode(CORNERS);
  background(beachImage);  
  createPlayerBall();
  movePlayerBall();
  itHitLevel1();
  enemyBallsLevel1Small();
  noCursor();
  rectPoints();
  collectPoints();
  changeLevels();
}

function gameOver(){
  // After finishing level 2, user will see this screen
  background(170);
  writeText();
  displayEndScreen();
  checkCursorEndScreen();
}

function writeText(){
  // This function will write something on the scree, the text is already pre-determinate 
  textSize(40);
  fill(0, 102, 153);
  text(txt, 35, 130);// "txt" is the variable which holds the string, followed by x and y coordinates
}

function displayEndScreen(){
  // rectMode(CENTER);
  //rect(menuButton.x, menuButton.y, menuButton.width, menuButton.height);//Draws a rectangle
  imageMode(CENTER);
  image(menuButton.image, menuButton.x, menuButton.y, menuButton.width, menuButton.height);// Super-imposes a picture over that rectangle
}

function resetPositions() {
  // Called during "menu" state, resests variables to their original values
  player.x = 31;
  score = 0;
  enemy1Level1.y = height/2;
  enemy2Level1.y = height/2;
  enemy3Level1.y = height/2;

  enemy1Level1.dy = 17;
  enemy2Level1.dy = 9;
  enemy3Level1.dy = 5;

  enemy1Level1.radius = 25;
  enemy2Level1.radius = 25;
  enemy3Level1.radius = 25;

}

function rectPoints() {
  // Creates a rectangle on the right-side of the screen
  fill(200, 50, 200);
  //translate(p5.Vector.fromAngle(millis() / 90, 19));// Rotates the rectangle, with an axis 20 pixels away
  // rectMode(CENTER);
  rect(points.x, points.y, points.width, points.height);
}

function collectPoints(){
  // if the player ball goes with in certain distance of the rectangle (points) the score goes up by one
  if ((player.x + player.radius) >= (points.x - (points.width + 5) )){
  	score += 1;
  }
}

function changeLevels(){
  // If the player's score is 1, it will go to the next level (i.e if your in level 1, you go to level 2)
  if ((score === 1) && (state === "level1")){
    player.x = width/13;
  	state = "endScreen";
  }
}

function checkCursorMenu(){
  // During "menu", if the mouse hovers over the play button, the mouse will change from an arrow to a pointer
  // and the play button will light-up (this is due to a change of image with a lighter colour) 
	if ((mouseX > playButton.x - (playButton.width/2)) && (mouseX < playButton.x + (playButton.width/2)) && (mouseY > playButton.y - (playButton.height/2)) && (mouseY < playButton.y + (playButton.height/2))){
    cursor("pointer");
    imageMode(CENTER);
    image(playButton.image2, playButton.x, playButton.y, playButton.width, playButton.height);
  }

  else {
    cursor(ARROW); // if the mouse doesn't hover over the button, it remains an arrow
  }
}

function checkCursorEndScreen(){
  //Similar to the "menu", the mouse and button will change if you hover over the button
	if ((mouseX > menuButton.x - (menuButton.width/2)) && (mouseX < menuButton.x + (menuButton.width/2)) && (mouseY > menuButton.y - (menuButton.height/2)) && (mouseY < menuButton.y + (menuButton.height/2))){
    cursor("pointer");
    imageMode(CENTER);
    image(menuButton.image2, menuButton.x, menuButton.y, menuButton.width, menuButton.height);
  }

  else {
    cursor(ARROW);
  }
}

function checkCursorLevels(){
  //Similar to the "menu", the mouse and button will change if you hover over the button
	if ((mouseX > level1Button.x - (level1Button.width/2)) && (mouseX < level1Button.x + (level1Button.width/2)) && (mouseY > level1Button.y - (level1Button.height/2)) && (mouseY < level1Button.y + (level1Button.height/2))){
    cursor("pointer");
    imageMode(CENTER);
    image(level1Button.image2, level1Button.x, level1Button.y, level1Button.width, level1Button.height);
  }

  else {
    cursor(ARROW);
  } 
}

function checkCursorAbility(){
  //Similar to the "menu", the mouse and button will change if you hover over the button
	if ((mouseX > abilityButton.x ) && (mouseX < abilityButton.x + abilityButton.width) && (mouseY > abilityButton.y ) && (mouseY < abilityButton.y + abilityButton.height)){
    cursor("pointer");
    imageMode(CORNER);
    image(abilityButton.image2, abilityButton.x, abilityButton.y, abilityButton.width , abilityButton.height)
  }

  else {
    cursor(ARROW);
  } 
}

function chooseLevel() {
  // Creates two buttons which will allow you to choose the level during state "chooseLevel"
  // rectMode(CENTER);
  //rect(level1Button.x, level1Button.y, level1Button.width, level1Button.height);
	imageMode(CENTER);
  image(level1Button.image, level1Button.x, level1Button.y, level1Button.width, level1Button.height);
  
}

function displayMenu() {
  // Creates a button during the first screen "menu"
  // rectMode(CENTER);
  //rect(playButton.x, playButton.y, playButton.width, playButton.height);
  imageMode(CENTER);
  image(playButton.image, playButton.x, playButton.y, playButton.width, playButton.height);
}

function mousePressed() {
  //Checks the state, and also if the mouse has clicked a button during that state,
  // if so, it changes the state to a differnt, corresponding state

  checkGridPower();

  if (state === "menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "grid";
    }
  }
  
  if (state === "grid") {
    if (clickedOnButtonAbility (mouseX, mouseY) ) {
      state = "chooseLevel";
    }
  }

  if (state === "chooseLevel") {
    if (clickedOnButtonLevel1 (mouseX, mouseY) ) {
      state = "level1";
    }
  }

  if (state === "endScreen") {
    if (clickedOnButtonMenu (mouseX, mouseY) ) {
      state = "menu";
    }
  }
}

function checkGridPower(){
  let xcoord = floor((mouseX - xOffset) / cellSize);
  let ycoord = floor((mouseY - yOffset) / cellSize);
  if (state === "grid"){
    if (xcoord === 0 && ycoord === 0) {
      power = "uno";
    }

    if (xcoord === 1 && ycoord === 0) {
      power = "dos";
    }

    if (xcoord === 0 && ycoord === 1) {
      power = "tres";
    }

    if (xcoord === 1 && ycoord === 1) {
      power = "cuatro";
    } 
  }
}

function itHitLevel1() {
  // Checks distance between the player and enemies, if too close, you'll lose and go back to menu
  distanceAwayFromCenter1 = int(dist(player.x, player.y, enemy1Level1.x, enemy1Level1.y));                   
  distanceAwayFromCenter2 = int(dist(player.x, player.y, enemy2Level1.x, enemy2Level1.y));
  distanceAwayFromCenter3 = int(dist(player.x, player.y, enemy3Level1.x, enemy3Level1.y));
  
  collitionDistance1 = (player.radius + enemy1Level1.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||distanceAwayFromCenter2 <= collitionDistance1 || distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function createPlayerBall(){
  //Creates an ellipse 
  fill(5, 255, 57);
  ellipse(player.x, player.y, player.radius*2);
}

function movePlayerBall(){
  //Moves player's x-coordidate, But only if the player is within the screen boundaries
  if (keyIsDown(RIGHT_ARROW) && (player.x + player.radius <= width)) {
    player.x += 4;
  }
  
  if (keyIsDown(LEFT_ARROW) && (player.x - player.radius > 0)) {
    player.x -= 4;
  }
}

function movePlayerBallSpeed(){
  //Moves player's x-coordidate, But only if the player is within the screen boundaries
  if (keyIsDown(RIGHT_ARROW) && (player.x + player.radius <= width)) {
    player.x += 6;
  }
  
  if (keyIsDown(LEFT_ARROW) && (player.x - player.radius > 0)) {
    player.x -= 6;
  }
}
 
function enemyBallsLevel1() {
  // creates all 3 enemies of level 1
  fill(9, 150, 250);
  enemyBall1Level1();
  enemyBall2Level1();
  enemyBall3Level1();
}

function enemyBallsLevel1SS(){
  fill(9, 150, 250);
  enemyBall1Level1SS();
  enemyBall2Level1SS();
  enemyBall3Level1SS();
}

function enemyBallsLevel1Small(){
  fill(9, 150, 250);
  enemyBall1Level1Small();
  enemyBall2Level1Small();
  enemyBall3Level1Small();

}

function enemyBall1Level1() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  ellipse(enemy1Level1.x, enemy1Level1.y, enemy1Level1.radius * 2);
  enemy1Level1.y += enemy1Level1.dy;                             
  
  if (enemy1Level1.y + enemy1Level1.radius >= height || enemy1Level1.y - enemy1Level1.radius <= 0) {
    enemy1Level1.dy = -1 * enemy1Level1.dy;                        
  }
}

function enemyBall2Level1() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  ellipse(enemy2Level1.x, enemy2Level1.y, enemy2Level1.radius * 2);
  enemy2Level1.y += enemy2Level1.dy;

  if (enemy2Level1.y + enemy2Level1.radius >= height || enemy2Level1.y - enemy2Level1.radius <= 0) {
    enemy2Level1.dy = -1 * enemy2Level1.dy;
  }
}

function enemyBall3Level1() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  ellipse(enemy3Level1.x, enemy3Level1.y, enemy3Level1.radius * 2);
  enemy3Level1.y += enemy3Level1.dy;

  if (enemy3Level1.y + enemy3Level1.radius >= height || enemy3Level1.y - enemy3Level1.radius <= 0) {
    enemy3Level1.dy = -1 * enemy3Level1.dy;
  }
}

function enemyBall1Level1SS() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy1Level1.dy = 4;

  ellipse(enemy1Level1.x, enemy1Level1.y, enemy1Level1.radius * 2);
  enemy1Level1.y += enemy1Level1.dy;                             
  
  if (enemy1Level1.y + enemy1Level1.radius >= height || enemy1Level1.y - enemy1Level1.radius <= 0) {
    enemy1Level1.dy = -1 * enemy1Level1.dy;                        
  }
}

function enemyBall2Level1SS() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy2Level1.dy = 4;

  ellipse(enemy2Level1.x, enemy2Level1.y, enemy2Level1.radius * 2);
  enemy2Level1.y += enemy2Level1.dy;

  if (enemy2Level1.y + enemy2Level1.radius >= height || enemy2Level1.y - enemy2Level1.radius <= 0) {
    enemy2Level1.dy = -1 * enemy2Level1.dy;
  }
}

function enemyBall3Level1SS() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy3Level1.dy = 4;

  ellipse(enemy3Level1.x, enemy3Level1.y, enemy3Level1.radius * 2);
  enemy3Level1.y += enemy3Level1.dy;

  if (enemy3Level1.y + enemy3Level1.radius >= height || enemy3Level1.y - enemy3Level1.radius <= 0) {
    enemy3Level1.dy = -1 * enemy3Level1.dy;
  }
}

function enemyBall1Level1Small() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy1Level1.dy = 4;

  ellipse(enemy1Level1.x, enemy1Level1.y, enemy1Level1.radius);
  enemy1Level1.y += enemy1Level1.dy;                             
  
  if (enemy1Level1.y + enemy1Level1.radius >= height || enemy1Level1.y - enemy1Level1.radius <= 0) {
    enemy1Level1.dy = -1 * enemy1Level1.dy;                        
  }
}

function enemyBall2Level1Small() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy2Level1.dy = 4;

  ellipse(enemy2Level1.x, enemy2Level1.y, enemy2Level1.radius);
  enemy2Level1.y += enemy2Level1.dy;

  if (enemy2Level1.y + enemy2Level1.radius >= height || enemy2Level1.y - enemy2Level1.radius <= 0) {
    enemy2Level1.dy = -1 * enemy2Level1.dy;
  }
}

function enemyBall3Level1Small() {
  // Changes the y-coordinates of enemy, but it will bounce once it hits a wall
  enemy3Level1.dy = 4;

  ellipse(enemy3Level1.x, enemy3Level1.y, enemy3Level1.radius);
  enemy3Level1.y += enemy3Level1.dy;

  if (enemy3Level1.y + enemy3Level1.radius >= height || enemy3Level1.y - enemy3Level1.radius <= 0) {
    enemy3Level1.dy = -1 * enemy3Level1.dy;
  }
}

function clickedOnButton(x, y) {
  // Checks if user clickes on the play button, if so changes state to "choseLevel"
  return x >= playButton.x - playButton.width/2 && x <= playButton.x + playButton.width/2 && y >= playButton.y - playButton.height/2 && y <= playButton.y + playButton.height/2;
}

function clickedOnButtonAbility(x, y) {
  if (state === "grid"){
    return x >= abilityButton.x &&
     x <= abilityButton.x + abilityButton.width &&
      y >= abilityButton.y &&
      y <= abilityButton.y + abilityButton.height;
  }
}

function clickedOnButtonLevel1 (x, y) {
  // Checks if user clickes on the Level 1 button, if so changes state to "Level1"
  return x >= level1Button.x - level1Button.width/2 && x <= level1Button.x + level1Button.width/2 && y >= level1Button.y - level1Button.height/2 && y <= level1Button.y + level1Button.height/2;
}

function clickedOnButtonMenu(x, y) {
  // Checks if user clickes on the menu button, if so changes state to "menu"
  return x >= menuButton.x - menuButton.width/2 && x <= menuButton.x + menuButton.width/2 && y >= menuButton.y - menuButton.height/2 && y <= menuButton.y + menuButton.height/2;
}  
