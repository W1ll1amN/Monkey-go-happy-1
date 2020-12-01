
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  
  
  monkey = createSprite(200,315,10,10)  
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
}


function draw() {
background("white")

  if(ground.x < 0){
    
    ground.x=ground.width/2
    }
  
  if (keyDown("Space")){
    
    monkey.velocityY=-10;
    
    }
  
  
  monkey.velocityY = monkey.velocityY+1

  
  monkey.collide(ground)
  
  spawnObstacles();
  spawnBananas();
  
  drawSprites()  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,320,10,40);
    obstacle.addImage(obstaceImage);
    
    //obstacle.debug = true;

    obstacle.velocityX = -(6);
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    //obstaclesGroup.add(obstacle);
    
    
  }
}


function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(300,320,40,10);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaImage);
    banana.scale = 0.12;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  }
  
}



