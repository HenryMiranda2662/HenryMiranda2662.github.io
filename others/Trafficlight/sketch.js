// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let states;
let greenLightDuration;
let yellowLightDuration;
let redLightDuration;
let timeOfLastTimeSwitch;

function setup() {
  createCanvas(600, 600);
  state = 1;
  greenLightDuration = 500;
  yellowLightDuration = 4500;
  redLightDuration = 7000;
  timeOfLastTimeSwitch = 0;
}

function draw() {
  
  background(255);
  drawOutlineOfLights();
  determineState();
  coloursOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function determineState () {
  if (state === 1 && millis() > timeOfLastTimeSwitch + greenLightDuration){
  state = 2
  timeOfLastTimeSwitch = millis();
  }
  
  if (state === 2 && millis() > timeOfLastTimeSwitch + yellowLightDuration){
    state = 3
    timeOfLastTimeSwitch = millis();
  }
  
  if (state === 3 && millis() > timeOfLastTimeSwitch + redLightDuration){
    state = 1
    timeOfLastTimeSwitch = millis();
  }

}


function coloursOfLights() {

  if (state === 1){
    fill (97, 204, 40);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }

  if (state === 2){
    fill (255, 147, 27);
    ellipse(width/2, height/2, 50, 50); //middle
  }

  if (state === 3){
    fill(232, 20, 20);
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
}
