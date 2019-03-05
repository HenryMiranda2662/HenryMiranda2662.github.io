// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let states;
let timer;

function setup() {
  createCanvas(600, 600);
  state = 1;
  
}

function draw() {
  timer = millis() % 9000;
  background(255);
  drawOutlineOfLights();
  determineState();
  statesOfLights();
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
  if (state === 1 && timer >= 3000){
  state = 2
  console.log(millis)
  }
  
  if (state === 2 && timer >= 6000){
    state = 3
  }
  
  if (state === 2 && timer <= 9000){
    state = 1
  }

}


function statesOfLights() {
  if (state === 1){
    fill(232, 20, 20);
    ellipse(width/2, height/2 - 65, 50, 50); //top

    fill (255);
    ellipse(width/2, height/2, 50, 50); //middle
    ellipse(width/2, height/2 + 65, 50, 50); //bottom

  }

  if (state === 2){
    fill(255);
    ellipse(width/2, height/2 - 65, 50, 50); //top

    fill (198, 147, 27);
    ellipse(width/2, height/2, 50, 50); //middle

    fill (255);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom

  }

  if (state === 3){
    fill(255);
    ellipse(width/2, height/2 - 65, 50, 50); //top

    fill (255);
    ellipse(width/2, height/2, 50, 50); //middle

    fill (97, 204, 40);
    ellipse(width/2, height/2 + 65, 50, 50); //bottom

  }
  
}
