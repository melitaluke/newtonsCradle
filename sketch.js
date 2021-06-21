const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,0,0,roof_options);
    World.add(world,roof);

	var bob_options={
		restitution:0.95
	}

	bob1=Bodies.circle(320,400,20,bob_options);
	World.add(world,bob1);
	bob2=Bodies.circle(360,400,20,bob_options);
	World.add(world,bob2);
	bob3=Bodies.circle(400,400,20,bob_options);
	World.add(world,bob3);
	bob4=Bodies.circle(440,400,20,bob_options);
	World.add(world,bob4);
	bob5=Bodies.circle(480,400,20,bob_options);
	World.add(world,bob5);

	Engine.run(engine);
	
	rope1=Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.01
	});
	World.add(world,rope1);

	rope2=Matter.Constraint.create({
		pointA:{x:360,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.01
	});
	World.add(world,rope2); 
	
	rope3=Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.01
	});
	World.add(world,rope3); 

	rope4=Matter.Constraint.create({
		pointA:{x:440,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.01
	});
	World.add(world,rope4); 

	rope5=Matter.Constraint.create({
		pointA:{x:480,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.01
	});
	World.add(world,rope5); 

}



function draw() {

  background("#c2f2cd");
  Engine.update(engine);
  rectMode(fill("#5452de"));
  

  rect(roof.position.x,roof.position.y,230,20);

//create ellipse shape for multiple bobs here
	ellipse(bob1.position.x,bob1.position.y,20);
	ellipse(bob2.position.x,bob2.position.y,20);
	ellipse(bob3.position.x,bob3.position.y,20);
	ellipse(bob4.position.x,bob4.position.y,20);
	ellipse(bob5.position.x,bob5.position.y,20);

	push ();
	strokeWeight(4);
	stroke("#5452de");
	line (rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y)
	line (rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y)
	line (rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y)
	line (rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y)
	line (rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y)
	pop ();



//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
}

function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.05,y:0});
	}
}
