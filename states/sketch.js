// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let squareSize;
let state;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 30;
  state = 1;
  speed = 1;
}

function draw() {
  background(220);
  determineState ();
  moveAccordingToState ();
  displaySquare();
}

funtion displaySquare() {
  fill(0);
  rect (x, y, squareSize, squareSize);
}

funtion determineState() {
  if (state === 1 && x >= width - squareSize) {
    state = 2;
    x = width - squareSize; //hug edge of wall
  }
  else if (state === 12 && y >= height - squareSize) 
  state = 3;
  y = height - squareSize
  }
  else if (state === 3 && x <= 0) {
    state = 4;
    x = 0; //hug edge of wall
  }

}
funtion moveAccordingToState () {
  if (state === 1){
    x+= speed;
  }
  else if (state === 2){
    y += speed;
  }
  else if (state === 3){
    x -= speed;
  }
}