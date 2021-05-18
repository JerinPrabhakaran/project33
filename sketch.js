const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var backgroundimage;

var backGround ,ground;
var snow;
var kids;
var kidsImage;


function preload(){
    backgroundimage = loadImage("snow2.jpg");
     kidsImage = loadImage("kid.png");

}



function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
	world = engine.world;
  backGround = createSprite(500 ,350 ,10,10);
 backGround.addImage(backgroundimage);
  kids = createSprite(100 ,600 ,50 ,50);
  kids.addImage(kidsImage);
  kids.scale = 0.1;
 

  ground = createSprite(500 ,710 ,1000 ,10);

  snow = new Snow(500 ,10 ,100 ,100);

  Engine.run(engine);
}

function draw() {
  
  background(255,0 ,0);  

 textSize(20);
drawSprites();
fill("black")
text("Press Space to Start The Animation",100,300);
snow.display();
if(keyDown("space") && kids.y >= 600){
kids.velocityY = -3;
  snow.fall();
}
  kids.velocityY = kids.velocityY + 0.10;
  kids.collide(ground);
}