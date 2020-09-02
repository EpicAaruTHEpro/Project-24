
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(100,100);
  ground = new Ground(600,height-30,1200,20);
  lPart = new sidePart((width)-110);
  rPart = new sidePart((width)-330);
  boPart = new bPart(width-220, 650, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  lPart.display();
  rPart.display();
  boPart.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position, {x:40,y:-75});
  }
}

