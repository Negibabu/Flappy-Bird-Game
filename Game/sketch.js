var bird;
var obstacle=[];
var f=0;
var i=0;
var highscore=0;
var distance=0;

function setup() {
  // put setup code here
  createCanvas(window.innerWidth,window.innerHeight);
  bird = new Bird();

}

function draw() {
  // put drawing code here
  
  background(115,224,255);
  strokeWeight(0);

  if(f==0)
  {

  	if(distance > highscore)
  	{
  		highscore = distance;
  	}

  	distance = 0;

  	textSize(70);
  	textStyle(NORMAL);
  	text('JayDee Bird', 450, 100);
  	textSize(20);
  	textStyle(NORMAL);
  	text('HIGH SCORE : ', 550, 200);
    text('Tap SPACE to keep JayDee moving\n *******Hit the bricks;You Die!!*******', 480, height/2);
  	text(highscore,700,200);
  	textSize(50);
  	textStyle(ITALIC);
  	text('Press SPACE to start', 400, height-50);
  }

  if(f==1)
  {

  	textSize(20);
  	textStyle(NORMAL);
  	text('Distance : ', 20, 20);
  	text(distance,130,20);
  	distance = distance+1;
  	
  	for (var j = obstacle.length-1; j >= 0; j--) 
  	{
	    
	    obstacle[j].update();
	    obstacle[j].show();

	    console.log(obstacle.length);
		
		if (obstacle[j].x<-obstacle[j].width1)
		{
			obstacle.splice(j, 1);
		}

		if(bird.y<=obstacle[j].o1_y || bird.y>=obstacle[j].o2_y)
		{
			if (bird.x >= obstacle[j].x && bird.x <= obstacle[j].x + obstacle[j].width1)
			{
				f=0;
			  	bird.speed=0;
			  	bird.y=height/2;
				bird.x=50;
				obstacle=[];
			}
		}
	    
  	}
	if (frameCount % 80 == 0)
	{
		obstacle.push(new Obstacle());
	}
  	bird.update();
  }
  bird.show();

  if(bird.y<0 || bird.y>height)
  {
  	f=0;
  	bird.speed=0;
  	bird.y=height/2;
	bird.x=50;
	obstacle=[];
  }

}

function touchStarted() {
  f=1;
  bird.up();
}


function keyPressed() {
  if (key == ' ') {
    f=1;
    bird.up();
    
  } 
}