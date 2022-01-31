
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var left_chest;
var rigth_chest;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground =new Ground(400,700,800,20);
	left_chest = new Ground(400,650,20, 100);
	rigth_chest = new Ground(550,650,20,100);



	var ball_options = {
		isStatic: false,
		retitution: 0.3,
		friction: 0,
		density: 1.2
	}

    ball = Bodies.circle(100,100,20,ball_options);
  	World.add(world,ball);

	rectMode(CENTER);
  	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ellipse(ball.position.x, ball.position.y,20);

   
  ground.show();
  left_chest.show();
  rigth_chest.show();


  drawSprites();
  keyPressed();


  Engine.update(engine);
}



function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0 ,y:0},{x:0.5,y:-2.5});
	}
}