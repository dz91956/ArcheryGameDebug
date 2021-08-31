const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var computer, computerBase, computerArcher;
var angle;
var arrow;
var posX = playerArcher.body.position.x;
var posY = playerArcher.body.position.y;
var angle2 = playerArcher.body.angle + PI/2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  // Player Classes
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(player.body.position.x+40, 
    player.body.position.y - 40, 100, 100, angle);
  // playerArrow = new PlayerArrow(posX, posY, 50, 10);
  // playerArrow.trajectory = [];
  // Matter.Body.setAngle(playerArrow.body, angle);
  
  // Computer Classes
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
    computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    computer.body.position.x - 40,
    computer.body.position.y - 40,
    100,
    100, angle
  );
  
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();

  computerBase.display();
  computer.display();
  
  angle = -45;
  playerArcher.display();
  playerArcher.stopRotation();
  computerArcher.display()


  playerArrow.display();
  console.log(playerArcher.body.angle);
  

  if(keyCode === 32){
    playerArrow.shoot(angle2);
    playerArrow = new PlayerArrow(posX, posY, 50, 10);
    playerArrow.trajectory = [];
    Matter.Body.setAngle(playerArrow.body, angle);
  }
}


