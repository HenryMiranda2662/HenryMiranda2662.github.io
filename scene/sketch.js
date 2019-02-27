// Interactive Scene
// Henry Miranda Bastidas
// Feb th, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let backgroundImage;
let y;
let dy;
let radius;
let x;

function setup() {
  backgroundImage = loadImage("assets/bckimg.png")
  createCanvas(500, 500);
  noStroke();
  x = width / 2;
  y = height / 2;
  dy = 4;
  radius = 25;
  r = radius;
}

function draw() {
  background(backgroundImage);

  // 3 balls
  fill(9, 150, 250)

  
  ellipse(width / 2, y, r*2);
  y += dy
  if (y + radius >= width || y - r <= 0) {
    dy = -1 * dy;
  }

  ellipse(100, y, r*2);
  y += dy
  if (y + radius >= width || y - r <= 0) {
    dy = -1 * dy;
  }

  ellipse(400, y, r*2);
  y += dy
  if (y + r >= width || y - r <= 0) {
    dy = -1 * dy;
  }

  
  // player ball
  fill(5, 0, 0)
  ellipse(x, height / 1.5, 60);
  if (keyIsDown(RIGHT_ARROW)) {
    x += 4;
    
  }

  if (keyIsDown(LEFT_ARROW)) {
    x -= 4;
  }
  
  //check if it leaves the screen
   if ((x - r) < 0) {
    x = x + r / 3
  }
  if ((x + r) > 490) {
    x = x - r / 4
  }

}