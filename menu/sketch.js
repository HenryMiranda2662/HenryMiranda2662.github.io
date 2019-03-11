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

function setup() {
  createCanvas(500, 500);
  state = "menu";
  buttonX = width/2;
  buttonY = height/2;
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

}

function draw() {
  background(66, 244, 182);
  if (state === "menu") {
    displayMenu();
  }
  if (state === "chooseLevel") {
    chooseLevel();
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
    if (clickedOnButtonLeve1(mouseX, mouseY) || clickedOnButtonLeve2(mouseX, mouseY) ) {
      state = "menu";
    }
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
