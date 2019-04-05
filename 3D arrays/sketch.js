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
  grid = create2DArray (gridSize, gridSize);
  cellSize = 150;
}

function draw(){
  background(200);
  displayGrid();
}

function displayGrid() {
  for (let y = 00; y < gridSize; y ++) {
    for (let x = 00; x < gridSize; x++ ) {
      rect(x * cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}

// function createRandom2DArray(cols, rows) {
//   let emptyArray = [];
//   for (let i = 0; i < rows; i++) {
//     emptyArray.push([]);
//     for (let j = 0; j < cols; j++) {
//       if(random(100) < 50 ){
//         emptyArray[i].push(0);
//       }

//       else {
//         emptyArray[i].push(1);
//       }
//     }
//   }
//   return emptyArray;
// }


// function update(){
//   let nextTurn = create2DArray(gridSize, gridSize);

//   for (let y = 0; y < gridSize; y++){
//     for (let x = 0; x < gridSize; x++){
//       let neighboor = 0;

//       for (let i = -1; i <= 1; i++){
//         for (let j = -1; j <= 1; j++){
//           if(y+i >= 0 && y+i < gridSize && x+j >= 0 && x+j < gridSize ){
//           neighboor += grid[y+i][x+j];
//           }
//         }
//       }

//       neighboor -= grid[y][x];

//       if (grid[y][x] === 1 ){
//         if (neighboor === 2 || neighboor === 3){
//           nextTurn[y][x] = 1;
//         }
//         else {
//           nextTurn[y][x] = 0;
//         }
//       }

//       if (grid[y][x] === 0){
//         if (neighboor === 3) {
//           nextTurn[y][x] = 1;
//         }
//         else {
//           nextTurn[y][x] = 0;
//         }

      
//       }

//     }
//   }

//   grid = nextTurn;

// }

// function keyPressed(){
//   if (key === " "){
//     window.clearInterval(autoPlay);
//     update();
//   }

//   if (key === "c"){
//     grid = create2DArray(gridSize, gridSize);
//   }

//   if (key === "a"){
//     autoPlay = window.setInterval(update, 50);
//   }

//   if (key === "r"){
//     grid = createRandom2DArray(gridSize, gridSize);
//   }

//   if (key === "s"){
//     saveJSON(grid, "thegrid.json");
//   }

//   if (key === "g"){
//     noLoop();
//     grid = loadJSON(assets/"glider.json", loadingComplete);
//   }
// }

// function loadingComplete(){
//   loop();
// }

// function mousePressed(){
//   let xcoord = floor(mouseX/ cellSize);
//   let ycoord = floor(mouseY/ cellSize);
  
  
//   if (grid[ycoord][xcoord] === 1){
//     grid[ycoord][xcoord] = 0;
//   }
//   else {
//     grid[ycoord][xcoord] = 1;
//   }
// }