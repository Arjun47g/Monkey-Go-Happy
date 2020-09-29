
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var score = 0,survivaltime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimg = loadImage("banana.png");
  stoneimg = loadImage("obstacle.png");
  
  
 
}



function setup() {
  createCanvas(600,400)
  
  ground = createSprite(300,390,600,50);
  

  monkey = createSprite(60,330,20,40)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale = 0.12;
  
  
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
}


function draw() {
background(25,175,233)
  
  if(keyWentDown("space")&& monkey.y > 325){
  monkey.velocityY = -20;
  }
  monkey.velocityY += 1;
  
  monkey.collide(ground); 
  
  
   
  survivaltime = Math.round (frameCount / 10);
  
  textSize(20);
  text("Survival Time : " + survivaltime,220,50)
  
  
  
  bananas ();
  
  rocks ();
  
  if(bananaGroup.isTouching(monkey)){
     score = score + 2;
     bananaGroup.destroyEach();
     monkey.scale += 0.01;
     }
  
   if(stoneGroup.isTouching(monkey)){
     stoneGroup.destroyEach();
    
     if( monkey.scale > 0.09 ){
         monkey.scale -= 0.01;
               
     }
   }
  
  console.log(monkey.scale);
  drawSprites();
  
  text("SCORE : "+ score,width/2-50,80 );
  
}

function bananas (){

  if (frameCount % 130 === 0) {
      
    banana = createSprite(600,200,40,40);
    banana.addImage(bananaimg);
    
    banana.scale = 0.1;
    banana.y = Math.round(random(120,220))
    
    banana.velocityX = -2;
    banana.lifetime = 300;
    
    bananaGroup.add(banana)
    
  }
}


function rocks () {

  if(frameCount % 250 === 0){
    
    stone = createSprite(600,330,40,40);
    stone.addImage(stoneimg);
    stone.scale = 0.2;
    stone.lifetime = 250;
    stone.velocityX = -4;
    stoneGroup.add(stone);
  }


  

}




