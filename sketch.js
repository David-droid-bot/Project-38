var BananaImage,obstacleGroup,obstacleImage,background1,score,bananaGroup;
var foodGroup,backImage,ground,monkey,player_running;

function preload(){
  backImage=loadImage("jungle.png");
 player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  background1=createSprite(0,0,800,400);
  background1.addImage(backImage);
  background1.scale=3;
  background1.x=background1.width/2;
  background1.velocity=-2;
  score=0;
  ground=createSprite(400,350,800,10);
  ground.x=ground.width / 2;

  monkey=createSprite(100,340,20,50);
  monkey.addAnimation("monkey",player_running);
  monkey.scale=0.18;
  ground.visible=false;
  BananaGroup=new Group();

}

function draw() {
  background(255);
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  //if(obstacleGroup.isTouching(monkey)){
    //monkey.scale=0.2;
 // }
  if(background1.x<0){
    background1.x=background1.width/2;
  }
  if(BananaGroup.isTouching(monkey)){
    BananaGroup.destroyEach();
    score=score+2;
  }
  switch(score) {
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;
    case 30: monkey.scale=0.16;
            break;
    case 40: monkey.scale=0.18;
            break;
    default: break;
  }
  if(keyDown("space")){
    monkey.velocityY =-8;
  }
  spawnBanana();
  spawnObstacle();
  drawSprites()
  stroke ("white");
  textSize(20);
  fill ("white");
  text("score"+score,500,50);
  }


function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    //banana.depth=monkey.depth;
    monkey.depth=monkey.depth + 1;
    BananaGroup.add(banana);
    banana.lifetime=134;
  }
}
  function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var stone = createSprite(400,350,400,50);
    stone.velocityX=-3;
    stone.addImage(obstacleImage);
    stone.scale = 0.2;
    stone.lifetime=134;
  }
}

  