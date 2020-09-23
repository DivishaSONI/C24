const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var pig2;
var log2;
var pig1;
var log1;
var box5;
var log3;
var log4;
var bird1;

function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,900,60,60);
    box2 = new Box(950,900,60,60);
    ground = new Ground(750,height,1500,20)
    pig1=new PIGEE(850,900);
    log1=new log(850,850,300,PI/2);
    box3= new Box(750,800,60,60);
    box4=new Box(950,800,60,60);
    pig2= new PIGEE(850,800);
    log2= new log(850,750,300,PI/2);
     box5= new Box(850,700,60,60);
     log3= new log(800,700,120,PI/4);
log4= new log(900,700,120,3*PI/4)
bird1=new bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log3.display();
    bird1.display();


}