// Refactor the following code
// - in other words, keep the same functionality, but improve the method used

let isFilledWithWhite = true;
let cellSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cellSize = pickCellSize();
}

function draw() {

    for (let x = 0; x < 8; x+= 1){
        for (let y = 0; y < 8; y+= 1){
        if (isFilledWithWhite){
            fill(255);
        }       
        else {
            fill(0)
        }
            rect(x*cellSize,y*cellSize,cellSize,cellSize);
            isFilledWithWhite = !isFilledWithWhite;
        }   
        isFilledWithWhite = !isFilledWithWhite;
    }

}

function pickCellSize(){
    if (width > height){
        return height/8
    }
    else {
        return width/8
    }
}

function windowResized(){
    createCanvas(windowWidth, windowHeight);
    cellSize = pickCellSize();
}


// fill(0);
// rect(0,75,75,75);


// fill(255);
// rect(0,150,75,75);
// fill(0);
// rect(0,225,75,75);
// fill(255);
// rect(0,300,75,75);
// fill(0);
// rect(0,375,75,75);
// fill(255);
// rect(0,450,75,75);
// fill(0);
// rect(0,525,75,75);
// fill(0);
// rect(75,0,75,75);
// fill(255);
// rect(75,75,75,75);
// fill(0);
// rect(75,150,75,75);
// fill(255);
// rect(75,225,75,75);
// fill(0);
// rect(75,300,75,75);
// fill(255);
// rect(75,375,75,75);
// fill(0);
// rect(75,450,75,75);
// fill(255);
// rect(75,525,75,75);
// fill(255);
// rect(150,0,75,75);
// fill(0);
// rect(150,75,75,75);
// fill(255);
// rect(150,150,75,75);
// fill(0);
// rect(150,225,75,75);
// fill(255);
// rect(150,300,75,75);
// fill(0);
// rect(150,375,75,75);
// fill(255);
// rect(150,450,75,75);
// fill(0);
// rect(150,525,75,75);
// fill(0);
// rect(225,0,75,75);
// fill(255);
// rect(225,75,75,75);
// fill(0);
// rect(225,150,75,75);
// fill(255);
// rect(225,225,75,75);
// fill(0);
// rect(225,300,75,75);
// fill(255);
// rect(225,375,75,75);
// fill(0);
// rect(225,450,75,75);
// fill(255);
// rect(225,525,75,75);
// fill(255);
// rect(300,0,75,75);
// fill(0);
// rect(300,75,75,75);
// fill(255);
// rect(300,150,75,75);
// fill(0);
// rect(300,225,75,75);
// fill(255);
// rect(300,300,75,75);
// fill(0);
// rect(300,375,75,75);
// fill(255);
// rect(300,450,75,75);
// fill(0);
// rect(300,525,75,75);
// fill(0);
// rect(375,0,75,75);
// fill(255);
// rect(375,75,75,75);
// fill(0);
// rect(375,150,75,75);
// fill(255);
// rect(375,225,75,75);
// fill(0);
// rect(375,300,75,75);
// fill(255);
// rect(375,375,75,75);
// fill(0);
// rect(375,450,75,75);
// fill(255);
// rect(375,525,75,75);
// fill(255);
// rect(450,0,75,75);
// fill(0);
// rect(450,75,75,75);
// fill(255);
// rect(450,150,75,75);
// fill(0);
// rect(450,225,75,75);
// fill(255);
// rect(450,300,75,75);
// fill(0);
// rect(450,375,75,75);
// fill(255);
// rect(450,450,75,75);
// fill(0);
// rect(450,525,75,75);
// fill(0);
// rect(525,0,75,75);
// fill(255);
// rect(525,75,75,75);
// fill(0);
// rect(525,150,75,75);
// fill(255);
// rect(525,225,75,75);
// fill(0);
// rect(525,300,75,75);
// fill(255);
// rect(525,375,75,75);
// fill(0);
// rect(525,450,75,75);
// fill(255);
// rect(525,525,75,75);
// }
