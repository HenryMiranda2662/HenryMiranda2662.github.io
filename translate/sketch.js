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
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);

  }
  else {
  createCanvas(windowWidth, windowWidth);
  }
  angleMode(DEGREES);
}

function draw(){
  background(200);

  translate(width/2,height/2);

  clockSetup();
  hourTickMarks();
  minuteTickMarks();
}

function clockSetup (){
  fill(255);
  strokeWeight(8); 
  ellipse(0, 0, width*0.9, width*0.9);
  fill(0)
  strokeWeight(3);
  ellipse(0, 0, 4, 4);
}

function minuteTickMarks(){
  strokeWeight(2);
  strokeCap(SQUARE);
  for (let minuteMark = 0; minuteMark < 60; minuteMark ++){
  line (width*0.34, 0, width*0.42, 0);
  rotate (360/60);
  }
}

function hourTickMarks(){
  strokeWeight(16);
  strokeCap(SQUARE);
  for (let hourMark = 0; hourMark < 12; hourMark ++){
  line (width*0.3, 0, width*0.42, 0);
  rotate (360/12);
  }
}