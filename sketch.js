
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boat, boatI, g, gi, f, fi;


function preload()
{
	boatI=loadImage("bin-removebg-preview.png");
	gi = loadImage("garbager.png");
	fi = loadImage("leftfush.png")
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);


	engine = Engine.create();
	world = engine.world;

	
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#fff");
  fill("#000");
  textSize(20);
  strokeWeight(10)
  text("CONTROLS",650,20);
  
  textSize(15);
  strokeWeight(10)
  
  text("1. Score can be increased by collecting the garbage. You can collect garbage by just clicking on it.",10,50);
  g = createSprite(650,150,10,10);
  g.addImage(gi);
  text("2. Clicking on different types of trash will gain you different amount of coins every time.", 10,250);
  boat = createSprite(650,350,10,10);
  boat.addImage(boatI);
  boat.scale=0.5;
  text("3. If you click on the fish, you lose coins.",10,450);
  f = createSprite(650,550,10,10);
  f.addImage(fi);
  f.scale=0.5;

  drawSprites();
 
}

