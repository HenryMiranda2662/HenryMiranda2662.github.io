// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

for (let i = 0; i < 200; i ++){
  let newBall = {
    x : random(width),
    y : random (height),
    dx : random(-5, 5),
    dy : random(-5, 5),
    radius : random (10, 50),
    color : color( random(255), random(255), random(255), random(255)) ,
  };

  ballArray.push(newBall);
  }
 
}


function draw() {
  background(220);

for (let i = 0; i < ballArray.length; i++){
  //move
  ballArray[i].x += ballArray[i].dx;
  ballArray[i].y += ballArray[i].dy; 


  //display
  noStroke();
  fill(ballArray[i].color)
  ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius * 2, ballArray[i].radius * 2)

}
}