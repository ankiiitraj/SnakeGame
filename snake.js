function snake(x, y)
{
	this.x = x;
	this.y = y;
	this.xSpeed = 20;
	this.ySpeed = 0;
	this.Rcolor = floor(random(0, 10));
	this.Gcolor = floor(random(1, 20));
	this.Bcolor = floor(random(2, 30));
	this.drawSnake = function()
	{
		stroke(0);
		fill(this.Rcolor, this.Gcolor, this.Bcolor);
		rect(this.x, this.y, 20, 20, 5);
	}

	this.updateSnake = function()
	{
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
		this.hitsWall();
 	}

	this.dir = function(x, y)
	{
		this.xSpeed = x*20;
		this.ySpeed = y*20;
	}

	this.hitsWall = function()
	{
		if(this.x < 0) this.x = width - 20;
		if(this.x > width -20) this.x = 0;
		if(this.y < 0) this.y = height - 20;
		if(this.y > height -20) this.y = 0;
	}

}