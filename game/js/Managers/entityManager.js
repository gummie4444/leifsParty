var entityManager = 
{
	viewX : 100,
	viewY : 100,
	renderRadius : 500,
	player : undefined
}

entityManager.setPlayer = function(descr)
{
	this.player = new Player(descr);
}



entityManager.update = function(du) 
{
	if(this.player !== undefined)
	{
		this.viewX = this.player.getX();
		this.viewY = this.player.getY();
	}

	this.player.update(du);
};

entityManager.render = function(ctx) 
{
	var offsetX = this.viewX-g_canvas.width/2;
	var offsetY = this.viewY-g_canvas.height/2;
	map.render(ctx,offsetX,offsetY);
	particleManager.render(ctx,offsetX,offsetY);
	this.player.render(ctx,offsetX,offsetY);
};



entityManager.clear = function()
{
	this.viewX = 100;
	this.viewY = 100;
	this.updateRadius = 500;
	this.player = undefined;
	this.enemies = [];
	this.items = [];
	this.bullets = [];
}