function Obstacle()
{
	
	this.width1 = 60;
	this.x = width;
	this.o1_y = random(100,height/2 - 50);
	this.o2_y = random(height/2 + 50, height-100);
	
	this.show = function()
	{
		fill(255,0,0);
		rect(this.x,0,this.width1,this.o1_y);
		rect(this.x,this.o2_y, this.width1,height);
		
	}

	this.update = function()
	{
		this.x=this.x-5;
	}
	
}