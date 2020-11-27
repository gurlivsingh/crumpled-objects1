var ground;
var paper;
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20)
paper=new Paper(200,100,20,20)
dustbin1=new Ground(600,height-20,10,40);
dustbin2=new Ground(575,height-15,40,10);
dustbin3=new Ground(550,height-20,10,40)
	Engine.run(engine);
  
}

//function keyPressed(){
//	if(keyCode===UP_ARROW){
//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x=85,y=-85});
//	}
//}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
 
  drawSprites();
 
}
//function keyPressed(){
	//if(keyCode===UP_ARROW){
//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x=85,y=-85});
	//}
//}


