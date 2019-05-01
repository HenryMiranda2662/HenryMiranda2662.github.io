// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 2;
let grid;
let cellSize;

function setup() {
  createCanvas (500, 500);
 // grid = create2DArray (gridSize, gridSize);
  cellSize = 150;
}

function draw(){
  background(200);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y ++) {
    for (let x = 0; x < gridSize; x++ ) {
      rect(x * cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

// function create2DArray(cols, rows) {
//   let emptyArray = [];
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       emptyArray.push([]);
//     }
//   }
//   return emptyArray;
// }

function mousePressed(){
  let xcoord = floor(mouseX/ cellSize);
  let ycoord = floor(mouseY/ cellSize);
  
}