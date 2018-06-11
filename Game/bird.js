function Bird()
{
	//var height=500;
	this.y=height/2;
	this.x=50;

	gravity=0.5;
	this.speed = 0;
	thrust=-9;

	this.show = function()
	{
		fill(0,100,255);
		ellipse(this.x,this.y,35,35);
		fill(0,0,0);
		triangle(this.x+25, this.y, this.x+10, this.y+5, this.x+10, this.y-5);
		ellipse(this.x+2,this.y-5,5,5);
	}
	
	//console.log(height);

	this.update = function()
	{
		this.speed = this.speed + gravity;
		this.y= this.y+this.speed;
	}

	this.up = function()
	{
		this.speed = this.speed + thrust;
		
	}


}