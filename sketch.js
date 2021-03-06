var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "red";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "orange";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "white";
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //if(isTouching(movingRect,gameObject3)){
    //movingRect.shapeColor = "red";
    //gameObject3.shapeColor = "purple";
  //}
  //else{
    //movingRect.shapeColor = "green";
    //gameObject3.shapeColor = "yellow";
  //}
  bounceOff(movingRect,fixedRect);

  drawSprites();
}
function bounceOff(object1,object2){
 if(object1.x - object2.x < object2.width/2 + object1.width/2
  &&object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX = object1.velocityX * (-1)
    object2.velocityX = object2.velocityX * (-1)
  }
  if(object1.y - object2.y < object2.height/2 + object1.height/2
    &&object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1)
      object2.velocityY = object2.velocityY * (-1)
    }
}
