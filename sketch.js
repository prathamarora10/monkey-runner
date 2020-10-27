
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,background1,background1Image;

function preload(){
  
  
  monkey_running =                         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  background1Image = loadImage('jungle.jpg')
  
}



function setup() {
  
createCanvas(800,400);
  
  background1 = createSprite(400,100)
  background1.addImage('background',background1Image)  
  background1.velocityX = -3;
  
  monkey = createSprite(100,330);
  monkey.addAnimation('monkey',monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(380,363,800,10);
  ground.visible = false;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  score = 0;
  
}


function draw() {

  background('white')
  
  if(keyDown('space') && monkey.y>275){
    
    monkey.velocityY = -17
   
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
  if(frameCount % 300 === 0){
    
  obstacle = createSprite(800,325);
  obstacle.addImage('obstacle',obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -4;
  obstacle.lifetime = 200  
  obstacleGroup.add(obstacle)
    
  }
  
  if(frameCount % 200 === 0){
    
  banana = createSprite(800,250)
  banana.addImage('banana',bananaImage)
  banana.scale = 0.1
  banana.velocityX = -4;
  banana.lifetime = 200
  banana.y = Math.round(random(150,250))
  FoodGroup.add(banana)
    
    switch(score){
        
      case 10 : monkey.scale = 0.2
        break;
      case 20 : monkey.scale = 0.3
        break;
      case 30 : monkey.scale = 0.4
        break;
      case 40 : monkey.scale = 0.5
        break;
    }
    
  }
  
  if(obstacleGroup.isTouching(monkey)){
    score = 0
    monkey.scale = 0.1
  }
  
  
  
  if(FoodGroup.isTouching(monkey)){
    score = score + 2;
    FoodGroup.destroyEach();
  }
  
  if(background1.x<300){
    background1.x = 500
  }
  
  drawSprites();
  
  
  fill('white')
  textSize(20)
  text('score : ' + score,700,50)
}






