// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor(x, y, someColor, someSpeed) {
    this.x = x;
    this.y = y;
    this.colour = someColor;
    this.speed = someSpeed;
  }

  display (){
    fill(this.colour);
    stroke(this.colour);
    ellipse(this.x, this.y, 2, 2);
  }

  move () {
    let choise = random(100);
    if (choise < 25) {
      this.y -= this.speed;
    }
    else if (choise < 50) {
      this.y += this.speed;
    }
    else if (choise < 75) {
      this.x -= this.speed;
    }
    else if (choise <= 100) {
      this.x += this.speed;
    }
  }
}

let andrew;
let kenny;

function setup() {
  createCanvas(windowWidth, windowHeight);
  andrew = new Walker(width/2, height/2, "purple", 8);
  kenny = new Walker(100, 100, "black", 6);
}

function draw() {
  andrew.move();
  andrew.display();


  kenny.move();
  kenny.display();
 
}
