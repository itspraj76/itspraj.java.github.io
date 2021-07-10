var Sofia = createSprite(20, 20, 18, 18);
Sofia.shapeColor = "magenta";

var target = createSprite(385, 360, 35, 75);
target.shapeColor="turquoise";

var cardboard1 = createSprite(10, 70, 130, 20);
cardboard1.shapeColor = "darkmagenta";

var cardboard2 = createSprite(115, 5, 20, 155);
cardboard2.shapeColor = "darkmagenta";

var cardboard3 = createSprite(150, 40, 90, 20);
cardboard3.shapeColor = "darkmagenta";

var cardboard4 = createSprite(80, 130, 80, 20);
cardboard4.shapeColor = "darkmagenta";

var cardboard5 = createSprite(185, 125, 20, 100);
cardboard5.shapeColor = "darkmagenta";

var cardboard6 = createSprite(35, 194, 70, 20);
cardboard6.shapeColor = "darkmagenta";

var cardboard7 = createSprite(100, 130, 20, 20);
cardboard7.shapeColor = "darkmagenta";

var cardboard8 = createSprite(115, 250, 20, 90);
cardboard8.shapeColor = "darkmagenta";

var cardboard9 = createSprite(155, 245, 60, 20);
cardboard9.shapeColor = "darkmagenta";

var cardboard10 = createSprite(255, 75, 70, 20);
cardboard10.shapeColor = "darkmagenta";

var cardboard11 = createSprite(45, 280, 20, 80);
cardboard11.shapeColor = "darkmagenta";

var cardboard12 = createSprite(190, 345, 80, 20);
cardboard12.shapeColor = "darkmagenta";

var cardboard13 = createSprite(300, 55, 20, 120);
cardboard13.shapeColor = "darkmagenta";

var cardboard14 = createSprite(295, 150, 95, 20);
cardboard14.shapeColor = "darkmagenta";

var cardboard15 = createSprite(170, 320, 20, 65);
cardboard15.shapeColor = "darkmagenta";

var cardboard16 = createSprite(255, 285, 20, 65);
cardboard16.shapeColor = "darkmagenta";

var cardboard17 = createSprite(330, 20, 80, 20);
cardboard17.shapeColor = "darkmagenta";

var cardboard18 = createSprite(205, 370, 20, 60);
cardboard18.shapeColor = "darkmagenta";

var cardboard19 = createSprite(65, 360, 80, 20);
cardboard19.shapeColor = "darkmagenta";

var cardboard20 = createSprite(85, 150, 20, 45);  
cardboard20.shapeColor = "darkmagenta";

var cardboard21 = createSprite(375, 210, 90, 20);
cardboard21.shapeColor = "darkmagenta";

var cardboard22 = createSprite(300, 380, 20, 70);
cardboard22.shapeColor = "darkmagenta";
function draw() {
  background("white");
  
  if(keyDown("space")) {
  Sofia.velocityX=2;
  Sofia.velocityY=3;
}

if (Sofia.isTouching(target)) {
  fill(0);
  textSize(30);
  text("YOU WON!", 200, 200);
}

if (keyDown("UP_ARROW")) {
  Sofia.velocityX=0;
  Sofia.velocityY=-3;
}
if (keyDown("DOWN_ARROW")) {
  Sofia.velocityX=0;
  Sofia.velocityY=3;
}
if (keyDown("LEFT_ARROW")) {
  Sofia.velocityX=-3;
  Sofia.velocityY=0;
}
if (keyDown("RIGHT_ARROW")) {
  Sofia.velocityX=3;
  Sofia.velocityY=0;
}

createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(cardboard1);
Sofia.bounceOff(cardboard2);
Sofia.bounceOff(cardboard3);
Sofia.bounceOff(cardboard4);
Sofia.bounceOff(cardboard5);
Sofia.bounceOff(cardboard6);
Sofia.bounceOff(cardboard7);
Sofia.bounceOff(cardboard8);
Sofia.bounceOff(cardboard9);
Sofia.bounceOff(cardboard10);
Sofia.bounceOff(cardboard11);
Sofia.bounceOff(cardboard12);
Sofia.bounceOff(cardboard13);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);

  drawSprites();
}
