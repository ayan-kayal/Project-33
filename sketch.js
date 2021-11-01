var bgImage, snowImage;
var snow;
var character, chImage;

function preload() {
  bgImage = loadImage("snow2.jpg");
  snowImage = loadImage("snow4.webp");
  chImage = loadImage("character.png");
  
}

function setup() {
  createCanvas(800,400);

  character = createSprite(300,300,50,50);
  character.addImage(chImage);
  character.scale = 0.25;
}

function draw() {
  background(bgImage);  
  snowfall();

  if(keyIsDown(LEFT_ARROW)) {
    character.position.x -= 2;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    character.position.x += 2;
  }
  
  drawSprites();
}

function snowfall() {
  r = Math.round(random(0,800));
  if(frameCount % 50 == 0) {
    snow = createSprite(r, 0, 10, 10);
    snow.addImage("showImage",snowImage);
    snow.scale = 0.1;

    snow.velocityY = 3;
    snow.lifeTime = -1;
  
  }
}