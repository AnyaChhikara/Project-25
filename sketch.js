const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle;
var computerArcher,playerArcher;
var computerBase,playerBase;
var balls = [];

function preload() {


}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;

  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);
  playerArcher = new PlayerArcher(340,playerBase.body.position.y - 180,120,120);
  computerBase = new ComputerBase( width - 300, random(450, height - 300),180,150);
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);

  ComputerArcher.display();
  PlayerArcher.display();
  ComputerArrow.display();
  PlayerArrow.display();
  ComputerBase.display();
  PlayerBase.display();

  for(var i=0;i<balls.length;i++){
    showCannonBalls(balls[i],i);
  }
 
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball,index){
  ball.display();
  if(ball.body.position.x>=width || ball.body.position.y>=height-50){
    World.remove(world,ball.body);
    balls.splice(index,1);
  }

}
