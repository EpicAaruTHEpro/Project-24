//creates matter.js engine and its features
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creates the objects
var paper, ground, lPart, rPart, boPart;

function preload()
{
	
}

//sets up all the variables
function setup() {
  //creates canvas
	var canvas = createCanvas(800, 700);

  //creates the engine and the world in it
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies
  paper = new Paper(100,100);
  ground = new Ground(600,height-30,1200,20);
  lPart = new sidePart((width)-110);
  rPart = new sidePart((width)-330);
  boPart = new bPart(width-220, 650, 200, 20);

  //runs engine
	Engine.run(engine);
  
}

//draw function that displays the bodies
function draw() {
  //sets background color to black
  background(0);
  //updates engine
  Engine.update(engine);
  //displays the bodies
  paper.display();
  ground.display();
  lPart.display();
  rPart.display();
  boPart.display();
 
}

//function that apply force to the paper ball if up key is pressed
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position, {x:40,y:-75});
  }
}

