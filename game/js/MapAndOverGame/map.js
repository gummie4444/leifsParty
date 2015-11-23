//Instructions
//turn mapEditorMode = true either here or do so through the terminal(preferable through terminal), mapEditorMode is a global variable
//Click to add a new mapnode, the path from the current node to the start node is red(this might change when branching will be fully implemented)

var mapEditorMode = false;

var map = {
	currents: [],
	nextBranchNumber : 0,
	firstNode : null,
	minDistBetweenNodes: 60
}


map.addNode = function(branch,type,x1,y1,x2,y2) {
	//Error: non existing branch
	if(branch>this.currents.length){console.log("Trying to create a node on a nonexisting branch");return;};

	//Error too close to the previous node
	if(this.currents.length>0&&(Math.abs(this.currents[branch].cx-x1)<this.minDistBetweenNodes&&Math.abs(this.currents[branch].cy-y1)<this.minDistBetweenNodes))
		{console.log("Node1: Trying to create a node too close to the previous node");return;};

	var newNode = new MapNode({cx:x1,cy:y1});
	if(!this.currents){this.currents = [];}

	if(this.currents.length==0)
		{this.currents[0] = newNode;
		 this.firstNode = newNode;}
	else{
		this.currents[branch].next1 = newNode;
		this.currents[branch] = newNode;
		if(x2&&y2){
			var newNode2 = new MapNode({cx:x2,cy:y2});
			this.currents[branch].next2=newNode2;
			this.currents[++this.nextBranchNumber]=newNode2;
		}
	}
}

map.render = function(ctx, offsetX, offsetY) {
	if(!this.firstNode){return;}
	this.firstNode.renderPaths(ctx,offsetX,offsetY,this.firstNode.cx,this.firstNode.cy);
	this.firstNode.renderAll(ctx, offsetX,offsetY);
}
