const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImage
var bg = "Backdrop1.png";
var score = 0;
var polygon;

function preload(){
  polygonImage = loadImage("polygon.png");
  BackgroundImage();
}

function setup() {
  createCanvas(800,400);
  //Creating Canvas and engine
  engine = Engine.create();
  world = engine.world;
  
  polygon = Bodies.circle(200,600,30);
  World.add(world, polygon);

  stand = new Stand(605,350,183,15);

  //base level blocks
  block1 = new Ground(545,335,20,20);
  block2 = new Ground(565,335,20,20);
  block3 = new Ground(585,335,20,20);
  block4 = new Ground(605,335,20,20);
  block5 = new Ground(625,335,20,20);
  block6 = new Ground(645,335,20,20);
  block7 = new Ground(665,335,20,20);
  // level 2 blocks
  block8 = new Ground(565,315,20,20);
  block9 = new Ground(585,315,20,20); 
  block10 = new Ground(605,315,20,20);
  block11 = new Ground(625,315,20,20); 
  block12 = new Ground(645,315,20,20);
  //level 3 blocks
  block13 = new Ground(585,295,20,20);
  block14 = new Ground(605,295,20,20);
  block15 = new Ground(625,295,20,20);
  //level 4 blocks 
  block16 = new Ground(605,275,20,20);

  sling = new Slingshot(this.polygon,{x:170, y:350});

  Engine.run(engine);

}

function draw() {
  if(backgroundImage){
    background(backgroundImage);
  }
  
  Engine.update(engine);


  textSize(20);
  fill("white");
  text("Drag the hexagonal stone and release it to launch it towards the blocks!",10,40);
  
  strokeWeight(2);
  stroke(15)
  fill("lightpink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("turquoise");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("lightpink");
  block13.display();
  block14.display();
  block15.display();

  fill("turquoise");
  block16.display();

  fill("white");
  stand.display();

  sling.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  imageMode(CENTER)
  image(polygonImage, polygon.position.x, polygon.position.y, 30, 30);

  drawSprites();
  text("SCORE: " + score, 670, 40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.polygon);
  }
}

async function BackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  var responsejson = await response.json();
  var dateTime = responsejson.datetime;
  var hour = dateTime.slice(11,13);

  console.log(hour);

  if(hour>=6 && hour<19){
      bg = "Backdrop1.png"
  }

  else{
      bg = "Backdrop2.jpg"
  }

  backgroundImage = loadImage(bg);
  }