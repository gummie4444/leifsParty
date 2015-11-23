function MapNode(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}

MapNode.prototype.next1 = null;
MapNode.prototype.next2 = null;
MapNode.prototype.hasChoice = false;
MapNode.prototype.branch = false;
MapNode.prototype.halfLength = 25;


MapNode.prototype.render = function (ctx,offsetX,offsetY) {
	//console.log(""+offsetX+offsetY)
	var rx = Math.floor(this.cx - offsetX);
	var ry = Math.floor(this.cy - offsetY);
	//console.log("im being drawn");
	ctx.fillStyle="#FFF";
	//console.log(""+(rx-this.halfLength)+","+(ry-this.halfLength)+","+(rx+this.halfLength)+","+(ry+this.halfLength));
	ctx.fillRect(rx-this.halfLength,ry-this.halfLength,2*this.halfLength,2*this.halfLength);
};

MapNode.prototype.getX = function()
{return this.cx;}
MapNode.prototype.getY = function()
{return this.cy;}

MapNode.prototype.renderAll = function(ctx,offsetX,offsetY){
	this.render(ctx, offsetX, offsetY);

	if(this.next1==null)
		return;

	if(this.next2==null||this.next2.branch==this.next1.branch){
		this.next1.renderAll(ctx,offsetX,offsetY);
	} else {
		this.next1.renderAll(ctx,offsetX,offsetY);
		this.next2.renderAll(ctx,offsetX,offsetY);
	}
	
}

MapNode.prototype.renderPaths = function(ctx,offsetX,offsetY,fx,fy){
	this.renderNextPath(ctx, offsetX, offsetY);

	if(this.next1==null){
		drawLine(ctx,this.cx-offsetX,this.cy-offsetY,fx-offsetX,fy-offsetY,mapEditorMode ? "#F00":"#555",5);
		return;
	}

	if(this.next2==null||this.next2.branch==this.next1.branch){
		this.next1.renderPaths(ctx,offsetX,offsetY,fx,fy);
	} else {
		this.next1.renderPaths(ctx,offsetX,offsetY,fx,fy);
		this.next2.renderPaths(ctx,offsetX,offsetY,fx,fy);
	}
	
}

MapNode.prototype.renderNextPath = function(ctx, offsetX, offsetY){
	if(this.next1){
		drawLine(ctx,this.cx-offsetX,this.cy-offsetY,this.next1.cx-offsetX,this.next1.cy-offsetY,"#555",5);
	}
	if(this.next2){
		drawLine(ctx,this.cx-offsetX,this.cy-offsetY,this.next2.cx-offsetX,this.next2.cy-offsetY,"#555",5);
	}
}




