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

let theWalkers = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++){
    let someWalkers = new Walker(width/2, height/2, color(random(255),random(255),random(255)), 5);
    theWalkers.push(someWalkers);
  }
}

function draw() {
  for (let i=0; i<theWalkers.length; i++){
    theWalkers[i].move();
    theWalkers[i].display();
  }
}
