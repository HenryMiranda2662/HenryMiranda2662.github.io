// Grid-based assignment (2D array) 
// Henry Miranda
// April 19th, 2019
//
// Extra for Experts:
// 

let state;
let abilityButton;

let gridSize = 2;
let cellSize;
let xOffset;
let yOffset;


function setup() {
  createCanvas(500, 500);
  background(205);
  state = "menu";

  abilityButton = {
  x : 400,
  y : 375,
  width : 50,
  height : 25,
  }
  
  cellSize = 150;
  xOffset = 50;
  yOffset = 100;
  power = "cero"

}

function draw() {
  
  if (state === "grid") {
    displayGridButton();
    
    displayGrid();
    
    
  }
  if (state === "ballBounce") {
    background("yellow")
    fill("white");
    rect (100, 100, 100, 100);    
    if (power === "uno" && keyIsPressed === true) {
      background("black")
    }
    if (power === "dos" && keyIsPressed === true) {
      background("red")
    }
    if (power === "tres" && keyIsPressed === true) {
      background("blue")
    }
    if (power === "cuatro" && keyIsPressed === true) {
      background("green")
    }
  }
}


function displayGridButton() {
  rect(abilityButton.x, abilityButton.y, abilityButton.width , abilityButton.height);
}

function clickedOnButtonAbility(x, y) {
  return x >= abilityButton.x &&
    x <= abilityButton.x + abilityButton.width &&
    y >= abilityButton.y &&
    y <= abilityButton.y + abilityButton.height;
}

function mousePressed() {
  let xcoord = floor((mouseX - xOffset) / cellSize);
  let ycoord = floor((mouseY - yOffset) / cellSize);

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

    
  
  if (state === "menu") {
    if (clickedOnButton(mouseX, mouseY)) {
      state = "ballBounce";
    }
  }
}

function displayGrid() {
  translate(xOffset, yOffset);
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}
