// Perlin Noise Demo

let time;
let rectWidth;
let numberOfRects;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  time = 0;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
}

function draw() {
  background(220);
  fill(0);


  rects.shift();

let rectHeight = noise(time) * height;
  let myRectangle = {
    height: rectHeight,
    width: rectWidth,
    x: width - rectWidth,
    y: height - rectHeight,
  };
  rects.push(myRectangle);

    // move along the perlin noise x-axis
  time += 0.001;



  for (let i = 0; i < rects.length; i ++) {
    //move to left

    rects[i].x -= rectWidth;
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
  }
  
}

function generateInitialTerrain() {
  for (let i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let myRectangle = {
      height: rectHeight,
      width: rectWidth,
      x: i * rectWidth,
      y: height - rectHeight,
    };
    rects.push(myRectangle);

    // move along the perlin noise x-axis
    time += 0.001;
  }
  
}