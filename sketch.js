
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papera;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    

    
    ground = new Ground(600,height,1200,20)
    papera = new Paper(250,370,25,25)

    

    sprite1=createSprite(width/2,600,200,20)
sprite2=createSprite(310,550,20,100);
sprite3=createSprite(490,550,20,100);



	//Create the Bodies Here.

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  papera.display();
box1.display();
box2.display();
box3.display();








  drawSprites();
 
}



