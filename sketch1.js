function preload() {
    //load game assets
    wormImage=loadImage("images/worm.png");
    swampImage=loadImage("images/swampImg.png");
    frogImage=loadImage("images/frog.png");
  }
  var player,target,obstacle1,obstacle2;
  var wormGroup;
  var score = 0;

  function setup() {
    createCanvas(600,600);
    bg=createSprite(300,300);
    bg.addImage(swampImage);
    bg.scale=2.5;
    player=createSprite(100,400,20,20);
    player.addImage(frogImage);
    player.scale=0.5;
    wormGroup=new Group();
}
  
  function draw() {
    background("black"); 
    console.log(frameCount);
    worms();
    player.x=mouseX;
    player.y=mouseY
    for(let i = 1;i<wormGroup.length;i++){
        var temp=wormGroup.get(i);
        if(player.isTouching(temp)){
            temp.destroy();
            score++;
            temp=null;
        }
    }
    drawSprites();
    strokeWeight(5);
    stroke("yellow");
    fill("white");
    textSize(50);
    text("Score: "+score, 150,150); 
  }

function worms(){
    if(frameCount%16===0){
    var worm=createSprite(random(80,380),random(80,380),40,5);
    worm.addImage(wormImage);
    worm.scale=random(0.1,0.4);
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
    }

}