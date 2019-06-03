// States
// Henry Miranda Bastidas
// March 25th, 2019
//
// Extra for Experts:
// Included translate on an object

//Global Variables that I will use during the code
class Ball {
  constructor(x, y, dxSomeSpeed, dySomeSpeed) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.radius = 25;
    this.dx = dxSomeSpeed;
    this.dy = dySomeSpeed;
  }
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  move() {
    
    this.x += this.dx;
    this.y += this.dy;
    
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.dx = -1 * this.dx;
    }

    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.dy = -1 * this.dy;
    }

  }
}
class PlayerBall {
  constructor(x, y, dxSomeSpeed, dySomeSpeed){
    this.x = x;
    this.y = y;
    this.color = [5, 255, 57];
    this.radius = 30;
    this.dx = dxSomeSpeed;
    this.dy = dySomeSpeed;
  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  move() {
    if (keyIsDown(RIGHT_ARROW) && (this.x + this.radius <= width)) {
      this.x += this.dx;
    }
    
    if (keyIsDown(LEFT_ARROW) && (this.x - this.radius > 0)) {
      this.x -= this.dx;
    }
    if (keyIsDown(DOWN_ARROW) && (this.y + this.radius <= height)) {
      this.y += this.dy;
    }
    
    if (keyIsDown(UP_ARROW) && (this.y - this.radius > 0)) {
      this.y -= this.dy;
    }
  }
}

let ball1;
let ball2;
let ball3;
let player2;

function setup() {
  createCanvas(500, 500);

  ball1 = new Ball(25, 270, 12, 0);
  ball2 = new Ball(75, 270, 12, 0);
  ball3 = new Ball(125, 270, 12, 0);
  ball4 = new Ball(175, 270, 12, 0);
  ball5 = new Ball(225, 270, 12, 0);
  ball6 = new Ball(275, 270, 12, 0);
  ball7 = new Ball(325, 270, 12, 0);
  ball8 = new Ball(375, 270, 12, 0);
  ball9 = new Ball(425, 270, 12, 0);
  
  ball10 = new Ball(width/2, height/2, 0, 9);
  
  
  player2 = new PlayerBall(250, height/1.5, 4, 4);
}

function draw() {
  ball1.move();
  ball2.move();
  ball3.move();
  ball4.move();
  ball5.move();
  ball6.move();
  ball7.move();
  ball8.move();
  ball9.move();
  ball10.move();
  player2.move();
  
  background(205);
  
  player2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  
}