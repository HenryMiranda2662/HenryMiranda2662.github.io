// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Ball {
  constructor(x, y, someColor, someSpeed) {
    this.x = x;
    this.y = y;
    this.color = (9, 150, 250);
    this.speed = someSpeed;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 25, 25);
  }

  move() {
    this.y += this.speed;
    if (this.y + 25 >= height || this.y - 25 <= 0) {
    this.speed = -1 * this.speed;
  }
    
  }
}

let andrew;
let kenny;
let alina;

function setup() {
  createCanvas(500,500);
  background(200);
  andrew = new Ball(width/2, height/2, 5);
  kenny = new Ball(100, height/2, 5);
  alina = new Ball(400, height/2, 10);
}

function draw() {
  andrew.move();
  kenny.move();
  alina.move();

  andrew.display();
  kenny.display();
  alina.display();
}
