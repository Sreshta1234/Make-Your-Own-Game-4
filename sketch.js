var bg, bgImg;
var spaceship, spaceshipImg;
var starImg;
var score;
var laser, laserImg;
var laserGroup;
var laserSound;

function preload(){
  bgImg = loadImage("bg.jpg");
  spaceshipImg = loadImage("spaceship.png");
  starImg = loadImage("star.png");
  laserImg = loadImage("laser-beam.png");

  laserSound = loadSound("laser-sound.mp3");
}



function setup() {
  createCanvas(600,400);


  bg = createSprite(300, 380, 600, 20);
  bg.addImage(bgImg);
  bg.velocityX = -2;

  spaceship = createSprite(50, 350, 10, 10);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.2;

  score = 0;
  
  stars = new Group();
  laserGroup = new Group();

  
}

function draw() {
  background("black"); 
  //createStars();

  if(bg.x < 0){
    bg.x = bg.width/2;
  }

  spaceship.y = mouseY;

  /*if(spaceship.isTouching(stars)){
    stars.destroyEach();
    score += 1;
  }*/

  if(keyDown("space")){
    createLasers();
    laserSound.play();
  }

  if(frameCount % 100 == 0){
    createStars();
  }

  if(laserGroup.isTouching(stars)){
    stars.destroyEach();
    laserGroup.destroyEach();
    score += 1;
  }
  
  drawSprites();

  fill("white");
  text("Score: "+score, 500, 50);
}

function createStars(){
  /*if(frameCount % 60 == 0){
    var star = createSprite(Math.round(random(150, 800)), Math.round(random(50, 400)), 5, 5);
    star.addImage(starImg);
    star.scale = 0.06;
    star.velocityX = -2;
    stars.add(star);
  }*/
    
  var star = createSprite(Math.round(random(150, 800)), Math.round(random(50, 400)), 5, 5);
    star.addImage(starImg);
    star.scale = 0.06;
    star.velocityX = -2;
    star.lifetime = 300;
    stars.add(star);
}

function createLasers(){
  laser = createSprite(30, 310, 60, 10);
  laser.addImage(laserImg);
  laser.y = spaceship.y;
  laser.velocityX = 4;
  laser.scale = 0.3;
  laser.lifetime = 150;
  laserGroup.add(laser);
}
