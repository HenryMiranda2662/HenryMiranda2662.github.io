// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 600},
  {x: 700, y: 600},
];

let depth = 0;

function setup() {
  createCanvas(800, 700);
}

function draw() {
  background(220);

  sierpinksi(triangleVertices, depth);

}

function mouseClicked(){
    depth ++;

}

function sierpinksi(points, degree){
  let theColors = ["red", "purple", "green", "orange", "pink", "blue", "yellow", "black"]
  noStroke();
  fill(theColors[degree]);

  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y);

  if (degree > 0){
    sierpinksi([points[0], 
                getMidpoint(point[0], point[1]),
                getMidpoint(point[0], point[2])],
                degree - 1);

    sierpinksi([points[1], 
                getMidpoint(point[0], point[1]),
                getMidpoint(point[1], point[2])],
                degree - 1);
    
    sierpinksi([points[2], 
                getMidpoint(point[1], point[2]),
                getMidpoint(point[0], point[2])],
                degree - 1);

  }
}

function getMidpoint(point1, point2){
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidpoint = {
    x : xDiff/2,
    y : yDiff/2,
  };
  return theMidpoint;
}
