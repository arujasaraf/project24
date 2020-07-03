var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground
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
	paperObject=new Paper(500,610,30)
	
    log1=new Dustbin(500,610,200,20);
     log2=new Dustbin(400,610,20,100);
log3=new Dustbin(600,610,20,100);
 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	
		
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white"
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode ===  UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	 }
   }


