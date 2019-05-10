class food{
	constructor()
	{	
		this.x = 20*(floor(random(0, 65)));
		this.y = 20*(floor(random(0, 30)));
	}

	drawFood()
	{
		fill(220, 20, 60);
		rect(this.x, this.y, 20, 20, 5)
	}
}