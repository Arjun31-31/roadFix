let posX=0;
let posY=0;
function preload() {
  //load game assets
  bgImage=loadImage("images/road.jpg");
 
}
var player,target,obstacle1,obstacle2;

function setup() {
  createCanvas(600,600);
  //bg=createSprite(300,917);
  bg1=createSprite(300,0);
  player=createSprite(100,500,20,20);
  target=createSprite(500,100,20,20);
  obstacle1=createSprite(200,200,80,20);
  obstacle2=createSprite(100,400,80,20);
  
  obstacle1.velocityX=8;
  obstacle2.velocityX=-7;

  edges=createEdgeSprites();
  stroke("green");
  textSize(20);
  fill("yellow");

}

function draw() {
  background("black"); 
  bg.addImage(bgImage);
  bg.velocityY=5;
  bg1.velocityY=5;
  bg1.addImage(bgImage);
  console.log(bg.height);
  console.log(bg1.height);
  if(bg.y>bg.height*2){
    bg.y=0;
  }
  if(bg1.y>bg1.height*2){
    bg1.y=0;
  }



  obstacle1.bounceOff(edges[1]);
  obstacle1.bounceOff(edges[0]);
  obstacle2.bounceOff(edges[1]);
  obstacle2.bounceOff(edges[0]);

  player.shapeColor="blue";
  obstacle1.shapeColor="red";
  obstacle2.shapeColor="red";
  target.shapeColor="#ffd700";

  if(keyDown("left")){
    player.x=player.x+(-4);
  }
  if(keyDown("right")){
    player.x=player.x+(4);
  }
  if(keyDown("up")){
    player.y=player.y+(-4);
  }
  if(keyDown("down")){
    player.y=player.y+(4);
  }

  if(player.isTouching(obstacle1) || player.isTouching(obstacle2)){
    obstacle1.velocityX=0;
    obstacle2.velocityX=0;
    text("You lost.",300,300);
    target.destroy();
}

  if(player.isTouching(target)){
    obstacle1.velocityX=0;
    obstacle2.velocityX=0;
    obstacle2.destroy();
    obstacle1.destroy();
    text("You won.",300,300);
  }

  drawSprites();

}
