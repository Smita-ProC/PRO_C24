
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = Bodies.rectangle(width/2,height-30,width,20,{isStatic:true});
	World.add(world,ground);
    
    paper = new  Paper(40,660,20);

	dustbin = new Dustbin(600,height-50,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin.display();
  rect(ground.position.x,ground.position.y,width,20);
}


function keyPressed(){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
}



