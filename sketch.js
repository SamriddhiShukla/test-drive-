var car,wall;

var speed,weight

function setup() {
  createCanvas(1600,400);


speed=random(55,90);
width=random(400,1500);

 
car=createSprite(50,200,50,50);

car.velocityX = speed ; 

car.ShapeColor=(225);

wall=createSprite(1500,200,60,height/2);
wall.ShapeColor=(80,80,80)

}

function draw() {
  background("black");  
if(wall.x-car.x<(car.weight+wall.weight)/2){
car.velocityX=0;
var deformation=0.5*wight*speed*speed/22509;
if(deformation>180){
car.ShapeColor=color(255,0,0)
}
if(deformation<180 && deformation>100){
  car.ShapeColor=color(230,230,0)
}
if(deformation>100){
  car.ShapeColor=color(0,255,0)
}
}
  drawSprites();
}