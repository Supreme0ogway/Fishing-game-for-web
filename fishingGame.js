/****************
canvas
*****************/
//fishing game
let boatPic;
let fisherPic;
let oceanPic;
let birdPic;
let fishingHook;
let trout;
let blueFish;
//fish one
let fishX1 = -50;
let randomF1;
let fishExists1 = true;
//fish two
let fishX2 = -50;
let randomF2;
let fishExists2 = true;
let score = 0;
let gameOver;

//window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //variable instantion fishing game
  boatPic = loadImage('boat.png');
  fisherPic = loadImage('fisher.png');
  oceanPic = loadImage('ocean.png');
  birdPic = loadImage('birds.png');
  fishingHook = loadImage('fishingHook.png');
  trout = loadImage('trout.png');
  randomF1 = random(100, windowHeight);//random fish generation
  blueFish = loadImage('blueFish.png');
  randomF2 = random(100, windowHeight);//random fish generation
  gameOver = loadImage('gameOver.png');
}//canvas setup

function draw() {//runs 30x
  fishingGameGame();
  textSize(20);
  fill('black')
  text('Score: ', 20, 20);
  text(score, 85, 20);
  
  if(score == 15) {
    getEndGame();
  }
}


/*******************
fishing game
******************/
function getEndGame() {
  image(gameOver, 0, 0, windowWidth, windowHeight);
}

function fishingGameGame() {
  backgroundSea();
  boat(mouseX);
  fishingRod(mouseX, mouseY);
  
    movingFishBrown();
    movingFishBlue();
}//this calls all the functions in fishing
function backgroundSea() {
  var x = 0;
  var y = 0;
  
  background(191, 237, 255);
  noStroke();
  fill(0, 188, 209);
  rect(0, 100, windowWidth, windowHeight);
    
  //top of sea
  var arraywater = [oceanPic,oceanPic,oceanPic,oceanPic,oceanPic,oceanPic];
  for(let i = 0; i < 6; i++) {
    arraywater[i] = image(oceanPic, -20 + (i*720), 75, 730, 80);//ocean top
  }
  //image(oceanPic, -20, 75, 730, 80);//ocean top
  
  
  //birds
  var arraybirds = [birdPic,birdPic,birdPic,birdPic,birdPic,birdPic];
  for(let i = 0; i < 6; i++) {
    arraybirds[i] = image(birdPic, 130+(i*720), -50, 400, 100);//ocean top
  }
  //image(birdPic, 130, -50, 400, 100);
  
  
}//this is the bakground
function boat(x) {
  image(boatPic, x - 30, 75, 70, 50);
  image(fisherPic, x - 15, 70, 30, 30);
}//the boat
function fishingRod(x, y) {
  //fishing rod
  if(mouseY > 75) {
    stroke('black');
    line(x, 90, x, y);
    
    //fishing hook
  image(fishingHook, x - 9, y, 10, 20);
  }
}//the fishing rod
function movingFishBrown() {//moves a fish
  /**********************
  trout
  **************/
  if(mouseIsPressed && mouseX > fishX1 && mouseY > randomF1 && mouseX < fishX1+70 && mouseY < randomF1+40) {
    
      fishExists1 = false;
      fishX1 = -50;
    score++;
  }
  else {
        if(fishExists1 == false) {//resets fish height
      randomF1 = random(100, windowHeight);
      fishExists1 = true;
    }
    if(fishX1 > windowWidth+50) {//resets fish height
      fishExists1 = false;
      fishX1 = -50;
    }
  
    fishX1++;//moves fish
  
    if(fishX1 > -49 && fishX1 < windowWidth +51) {//creates new fish
      image(trout, fishX1, randomF1, 70, 40);
    
    }
  }
}
function movingFishBlue() {
  /******************
  blue fish
  *******************/
  if(mouseIsPressed && mouseX > fishX2 && mouseY > randomF2 && mouseX < fishX2+70 && mouseY < randomF2+40) {
    
      fishExists2 = false;
      fishX2 = -50;
    score++;
  }
  else {
    if(fishExists2 == false) {//resets fish height
      randomF2 = random(100, windowHeight);
      fishExists2 = true;
    }
    if(fishX2 < -50) {//resets fish height
      fishExists2 = false;
      fishX2 = windowWidth+50;
    }
  
    fishX2--;//moves fish
  
    if(fishX2 > -49 && fishX2 < windowWidth +51) {//creates new fish
      image(blueFish, fishX2, randomF2, 70, 40);
    }
  }
}
