
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var papper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     box1=new BOX(400,650,20,100)

	 Engine.run(engine);
  
}


function draw() {
 
  background("black");
  box1.display();
 
 
}



