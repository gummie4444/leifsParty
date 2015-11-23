function Player(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
    console.log("made player");
}

Player.prototype.halfWidth = 12;
Player.prototype.halfHeight = 12;
Player.prototype.speed = 4;

Player.prototype.update = function (du) {
    
};


Player.prototype.render = function (ctx,offsetX,offsetY) {
	var rx = Math.floor(this.cx - offsetX);
	var ry = Math.floor(this.cy - offsetY);

	this.sprite.drawCentredAt(ctx, rx ,ry,0,this.scaleX);
};

Player.prototype.getX = function()
{return this.cx;}
Player.prototype.getY = function()
{return this.cy;}

Player.prototype.useItem = function(nr){

}
