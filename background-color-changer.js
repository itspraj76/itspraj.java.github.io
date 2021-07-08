var box;
function setup() {
  createCanvas(400,400);
  box = createSprites(200, 200, 30, 30);
}

function draw() 
{
  if(KeyisDown(RIGHT_ARROW)) {
    background ("red");
  }

  if(KeyisDown(LEFT_ARROW)) {
    background ("blue");
  }

  if(KeyisDown(UP_ARROW)) {
    background ("yellow");
  }

  if(KeyisDown(DOWN_ARROW)) {
    background ("green");
  }
  drawSprites ();
}




