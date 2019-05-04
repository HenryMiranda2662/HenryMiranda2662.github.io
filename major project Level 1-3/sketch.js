// MAJOR PROJECT
// Henry Miranda
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class EnemyBall {
  constructor(x, y, dxSomeSpeed, dySomeSpeed) {
    this.x = x;
    this.y = y;
    this.color = [255, 15, 30];
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

let playerBall;
let playerBall_2;
let enemyball1Level1;
let enemyball2Level1;
let enemyball3Level1;
let enemyball1Level2;
let enemyball2Level2;
let enemyball3Level2;
let enemyball1Level3;
let enemyball2Level3;
let enemyball3Level3;

function setup() {
  createCanvas(500, 500);
  state = "menu"
  level1Button = {
    x: 50,
    y: 100,
    width: 113,
    height: 75,
  }
  level2Button = {
    x: 200,
    y: 100,
    width: 113,
    height: 75,
  }
  level3Button = {
    x: 350,
    y: 100,
    width: 113,
    height: 75,
  }

  player1 = new PlayerBall(31, height / 1.5, 4, 0);
  player2 = new PlayerBall(31, height/1.5, 4, 4);

  enemyball1Level1 = new EnemyBall(100, height/2, 0, 17);
  enemyball2Level1 = new EnemyBall(width / 2, height/2, 0, 9);
  enemyball3Level1 = new EnemyBall(400, height/2, 0, 5);

  enemyball1Level2 = new EnemyBall(100, height/2, random(5, 6), random(5, 6));
  enemyball2Level2 = new EnemyBall(width / 2, height/2, random(5, 6), random(5, 6));
  enemyball3Level2 = new EnemyBall(400, height/2, random(5, 6), random(5, 6));
  
  enemyball1Level3 = new EnemyBall(width/2, 100, 12, 0);
  enemyball2Level3 = new EnemyBall(width/2, height/2, 12, 0);
  enemyball3Level3 = new EnemyBall(width/2, 400, 12, 0);
}

function draw() {
  if (state === "menu") {
    background(80, 170, 200);
    rect(level1Button.x, level1Button.y, level1Button.width, level1Button.height);
    rect(level2Button.x, level2Button.y, level2Button.width, level2Button.height);
    rect(level3Button.x, level3Button.y, level3Button.width, level3Button.height);
  }
  if (state === "Level1") {
    Level1BallMovement();
    background("white");
    Level1BallDisplay();
    
  }
  if (state === "Level2") {
    Level2BallMovement();
    background("white");
    Level2BallDisplay();
  }
  if (state === "Level3") {
    Level3BallMovement();
    background("white");
    Level3BallDisplay();
  }
}


function Level1BallMovement() {
  enemyball1Level1.move();
  enemyball2Level1.move();
  enemyball3Level1.move();
  player1.move();
}

function Level1BallDisplay(){
  enemyball1Level1.display();
  enemyball2Level1.display();
  enemyball3Level1.display();
  player1.display();

}

function Level2BallMovement() {
  enemyball1Level2.move();
  enemyball2Level2.move();
  enemyball3Level2.move();
  player1.move();
}

function Level2BallDisplay(){
  enemyball1Level2.display();
  enemyball2Level2.display();
  enemyball3Level2.display();
  player1.display();
}

function Level3BallMovement() {
  enemyball1Level3.move();
  enemyball2Level3.move();
  enemyball3Level3.move();
  player2.move();
}

function Level3BallDisplay(){
  enemyball1Level3.display();
  enemyball2Level3.display();
  enemyball3Level3.display();
  player2.display();
}


function clickedOnButtonL1(x, y) {
  return x >= level1Button.x &&
    x <= level1Button.x + level1Button.width &&
    y >= level1Button.y &&
    y <= level1Button.y + level1Button.height;
}

function clickedOnButtonL2(x, y) {
  return x >= level2Button.x &&
    x <= level2Button.x + level2Button.width &&
    y >= level2Button.y &&
    y <= level2Button.y + level2Button.height;
}

function clickedOnButtonL3(x, y) {
  return x >= level3Button.x &&
    x <= level3Button.x + level3Button.width &&
    y >= level3Button.y &&
    y <= level3Button.y + level3Button.height;
}

function mousePressed() {
  if (state === "menu") {
    if (clickedOnButtonL1(mouseX, mouseY)) {
      state = "Level1";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonL2(mouseX, mouseY)) {
      state = "Level2";
    }
  }
  
  if (state === "menu") {
    if (clickedOnButtonL3(mouseX, mouseY)) {
      state = "Level3";
    }
  }
}

