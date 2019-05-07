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
let enemyball1Level4;
let enemyball2Level4;
let enemyball3Level4;
let enemyball1Level5;
let enemyball2Level5;
let enemyball3Level5;
let enemyball4Level5;
let enemyball5Level5;
let enemyball6Level5;

function setup() {
  createCanvas(500, 500);
  state = "menu"
  level4Button = {
    x: 50,
    y: 100,
    width: 113,
    height: 75,
  }
  level5Button = {
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

  enemyball1Level4 = new EnemyBall(width / 2, height/2, 5, -5);
  enemyball2Level4 = new EnemyBall(width / 2, height/2, 0, 9);
  enemyball3Level4 = new EnemyBall(width / 2, height/2, 5, 5);

  enemyball1Level5 = new EnemyBall(100, height/2, 0, 7);
  enemyball2Level5 = new EnemyBall(width / 2, height/2, 0, 12);
  enemyball3Level5 = new EnemyBall(400, height/2, 0, 7);
  enemyball4Level5 = new EnemyBall(width/2, 100, 12, 0);
  enemyball5Level5 = new EnemyBall(width/2, height/2, 7, 0);
  enemyball6Level5 = new EnemyBall(width/2, 400, 12, 0);
}

function draw() {
  if (state === "menu") {
    background(80, 170, 200);
    rect(level4Button.x, level4Button.y, level4Button.width, level4Button.height);
    rect(level5Button.x, level5Button.y, level5Button.width, level5Button.height);
    rect(level3Button.x, level3Button.y, level3Button.width, level3Button.height);
  }
  if (state === "Level4") {
    Level4BallMovement();
    background("white");
    Level4BallDisplay();
    itHitLevel4();
    
  }
  if (state === "Level5") {
    Level5BallMovement();
    background("white");
    Level5BallDisplay();
  }
  if (state === "Level3") {
    Level3BallMovement();
    background("white");
    Level3BallDisplay();
  }
}


function Level4BallMovement() {
  enemyball1Level4.move();
  enemyball2Level4.move();
  enemyball3Level4.move();
  player2.move();
}

function Level4BallDisplay(){
  enemyball1Level4.display();
  enemyball2Level4.display();
  enemyball3Level4.display();
  player2.display();

}

function Level5BallMovement() {
  enemyball1Level5.move();
  enemyball2Level5.move();
  enemyball3Level5.move();
  enemyball4Level5.move();
  enemyball5Level5.move();
  enemyball6Level5.move();
  player2.move();
}

function Level5BallDisplay(){
  enemyball1Level5.display();
  enemyball2Level5.display();
  enemyball3Level5.display();
  enemyball4Level5.display();
  enemyball5Level5.display();
  enemyball6Level5.display();
  player2.display();
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

function itHitLevel4() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player2.x, player2.y, enemyball1Level4.x, enemyball1Level4.y));                   
  distanceAwayFromCenter2 = int(dist(player2.x, player2.y, enemyball2Level4.x, enemyball2Level4.y));
  distanceAwayFromCenter3 = int(dist(player2.x, player2.y, enemyball3Level4.x, enemyball3Level4.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level4.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}

function itHitLevel5() {
  // Just like the other level, it checks the distance between the player, and the enemies, if they're too close
  // you lose and go back to the "menu"
  distanceAwayFromCenter1 = int(dist(player1.x, player1.y, enemyball1Level2.x, enemyball1Level2.y));                   
  distanceAwayFromCenter2 = int(dist(player1.x, player1.y, enemyball2Level2.x, enemyball2Level2.y));
  distanceAwayFromCenter3 = int(dist(player1.x, player1.y, enemyball3Level2.x, enemyball3Level2.y));
  
  collitionDistance1 = (player1.radius + enemyball1Level2.radius);
  
  if (distanceAwayFromCenter1  <= collitionDistance1 ||
      distanceAwayFromCenter2 <= collitionDistance1 || 
      distanceAwayFromCenter3  <= collitionDistance1)  {
    state = "menu";
  }
}




function clickedOnButtonL1(x, y) {
  return x >= level4Button.x &&
    x <= level4Button.x + level4Button.width &&
    y >= level4Button.y &&
    y <= level4Button.y + level4Button.height;
}

function clickedOnButtonL2(x, y) {
  return x >= level5Button.x &&
    x <= level5Button.x + level5Button.width &&
    y >= level5Button.y &&
    y <= level5Button.y + level5Button.height;
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
      state = "Level4";
    }
  }

  if (state === "menu") {
    if (clickedOnButtonL2(mouseX, mouseY)) {
      state = "Level5";
    }
  }
  
  if (state === "menu") {
    if (clickedOnButtonL3(mouseX, mouseY)) {
      state = "Level3";
    }
  }
}

