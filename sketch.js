var fixedRect,moveRect,rect1,rect2;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 fixedRect.shapeColor = "blue" ;

 movingRect = createSprite(150,180,100,50);
 movingRect.shapeColor = "blue" ;

 rect1 = createSprite(700,0,50,50);
 rect1.shapeColor = "purple";
 rect1.velocityY = 3;

 rect2 = createSprite(700,400,50,50);
 rect2.shapeColor = "orange";
 rect2.velocityY = -3;

 edges = createEdgeSprites();
}

function draw() {
  background(255,255,255);  
  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "black";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "yellow";

  }

  bounceOff(rect1,rect2);
  rect1.bounceOff(edges[2]);
  rect2.bounceOff(edges[3]);
    drawSprites();
  }

  