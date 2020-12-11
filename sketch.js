var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = Math.round(random(233,321));
 thickness = Math.round(random(22,83));
 weight = Math.round(random(30,52));
 bullet = createSprite(0,200,100,10);
 bullet.shapeColor = color("white");
 wall=createSprite(1200,200,thickness,height/2);
}

function draw(){
  background("black");
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
   
    textSize(15);
    fill("white");
    text("Speed = " + speed , 50, 50);
   
    textSize(15);
    fill("white");
    text("weight = " + weight , 150, 50);

    textSize(15);
    fill("white");
    text("thickness = " + thickness , 250, 50);

    drawSprites();
}
