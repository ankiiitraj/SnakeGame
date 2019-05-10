let s = [], f;

function setup()
{
	createCanvas(1300, 600);
	frameRate(10);
	s.push(new snake(0, 0));
	f = new food();
}

function keyPressed()
{
	if(keyCode === LEFT_ARROW){
		console.log("y");
		if(s[0].xSpeed === 0){
			s[0].dir(-1, 0);
		}
	}else if(keyCode === RIGHT_ARROW){
		console.log("z");
		if(s[0].xSpeed === 0){
			s[0].dir(1, 0);
		}
	}else if(keyCode === UP_ARROW){
		if(s[0].ySpeed === 0){
			s[0].dir(0, -1);
		}
	}else if(keyCode === DOWN_ARROW){
		if(s[0].ySpeed === 0){
			s[0].dir(0, 1);
		}
	}
	
}

function eats()
{

	if(s[0].x === f.x && s[0].y === f.y)
	{
		f = new food();
		if(s[s.length-1].xSpeed === 0)
		{
			if(s[s.length-1].ySpeed < 0){
				s.push(new snake(s[s.length-1].x, s[s.length-1].y +20));
				s[s.length-1].xSpeed = 0;
				s[s.length-1].ySpeed = -20;
			}else{
				s.push(new snake(s[s.length-1].x, s[s.length-1].y -20));
				s[s.length-1].xSpeed = 0;
				s[s.length-1].ySpeed = 20;
			}
		}else if(s[s.length-1].ySpeed === 0){
			if(s[s.length-1].xSpeed < 0){
				s.push(new snake(s[s.length-1].x +20, s[s.length-1].y));
				s[s.length-1].xSpeed = -20;
				s[s.length-1].ySpeed = 0;
			}else{
				s.push(new snake(s[s.length-1].x -20, s[s.length-1].y));
				s[s.length-1].xSpeed = 20;
				s[s.length-1].ySpeed = 0;
			}
		}
	}
}

function draw()
{
	background(225);
	f.drawFood();
	for(var i = 0; i < s.length; i++)
	{
		s[i].drawSnake();
		s[i].updateSnake();
	}
	eats();
}