const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var dHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 460, 800, 20);

  d1 = new Division(50, 400, 20, 100);
  d2 = new Division(100, 400, 20, 100);
  d3 = new Division(250, 400, 20, 100);
  d4 = new Division(300, 400, 20, 100);
  d5 = new Division(350, 400, 20, 100);
  d6 = new Division(400, 400, 20, 100);
}
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();

  d1.display();
  d2.display();
  d3.displey();
  d4.display();
  d5.display();
  d6.display();

  ground.display();
}