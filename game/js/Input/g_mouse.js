function handleMouseWheel(e)
{
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
}

function handleMouse(evt) {

	g_mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(g_canvas.offsetLeft);
	g_mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(g_canvas.offsetLeft) + 1;

	// If no button is being pressed, then bail
	if (!evt.which) return;

	

	if(evt.which==1 && mapEditorMode)
	map.addNode(0,"normal",g_mouseX-g_canvas.width/2+entityManager.viewX,g_mouseY-g_canvas.height/2+entityManager.viewY)

	if(evt.which==2){
		console.log("-------------------------");
		console.log("Without Offset:")
		console.log("x: "+g_mouseX+", y: "+g_mouseY);
		console.log("With Offset:")
		console.log("x: "+(g_mouseX-g_canvas.width/2+entityManager.viewX)+", y: " + (g_mouseY-g_canvas.height/2+entityManager.viewY));
	}
}

// Handle "down" and "move" events the same way.
window.addEventListener("mousewheel", handleMouseWheel);
window.addEventListener("mousedown", handleMouse);
window.addEventListener("mousemove", handleMouse);