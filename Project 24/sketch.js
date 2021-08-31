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
var playerArrow = [];


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);


  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  // Player Classes
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(player.body.position.x+40, 
    player.body.position.y - 40, 100, 100);
  // arrow = new arrow(posX, posY, 50, 10);
  // arrow.trajectory = [];
  // Matter.Body.setAngle(arrow.body, angle);
  
  // Computer Classes
  computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);
  computer = new Computer(width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    computer.body.position.x - 40,
    computer.body.position.y - 40,
    100,
    100
  );
  
  
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  keyRelease();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();

  computerBase.display();
  computer.display();
  
  //angle = -45;
  playerArcher.display();
  playerArcher.stopRotation();
  computerArcher.display()


  //arrow.display();
  //console.log(playerArcher.body.angle);
  
  for(var i = 0; i < playerArrow.length; i++){
    showArrows(i, playerArrow);

  }
  
}



function keyPressed() {
  if(keyCode === 32){
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle2 = playerArcher.body.angle + 90;

    arrow = new PlayerArrow(posX, posY, 50, 10);
    //arrow.shoot(angle2);
    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle2);
    playerArrow.push(arrow);
  }
}

function keyRelease(){
  if (keyCode === 32){
    //call shoot() function for each arrow in playerArrow
    if (playerArrow.length){
      var angle3 = playerArcher.body.angle + 90;
      playerArrow[playerArrow.length - 1].shoot(angle3);
    }

  }
}

function showArrows(index, arrows){
  arrows[index].display();
}