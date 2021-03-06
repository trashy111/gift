(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
})();
 
// dimensions

console.log("You should really log into Cheryl some time.");

canvas.width = width;
canvas.height = height;

hud.width = width;
hud.height = 40;

var lastCookie = "penis";

function update() {
	var qwer = readCookie("deaths");
	qwer = parseInt(qwer);
	if(qwer != deaths){
		createCookie("deaths",""+deaths,100);
	}

	// if(itemsLoaded == itemsTotal){
	// 	console.log(currentTime);
	// }

	// playerInf.innerText  = "Pos: ("+((world[level].player.x*100|0)/100)+", "+((world[level].player.y*100|0)/100)+")";
	// playerInf.innerText += "\nVel: ("+((world[level].player.velX*100|0)/100)+", "+((world[level].player.velY*100|0)/100)+")";
	// playerInf.innerText += "\n"+((world[level].player.doubled)?"doubled":"notDoubled");
	// playerInf.innerText += "\n"+((world[level].player.grounded)?"grounded":"notGrounded");
	// playerInf.innerText += "\n"+((world[level].player.jumping)?"jumping":"notJumping");
	// Drawing the world
	ctx.clearRect(0, 0, width, height); // Clearing the entire thing
	if(level != newLevel){
		// currentBackground = (images.backgrounds.length*Math.random())|0;
		level = newLevel; // this is so that the game can continue loading the current level without changing level in the middle of animation
	}
	if(level == world.length){
		updateHud();
		ending();
		return;
	}

	if(level+1 > world.length){
		level = 0;
	}

	// Update entities handles the math/movement position of stuff
	updateEntities();
	
	// Update world handles the actual rendering of the entire world
	updateWorld();

	// Update hud handles rendering hud canvas, and updating information
	updateHud();

	// Update information handles the paragraph stuff
	updateInf();

	// FPS stuff
	if(!lastCalledTime) {
	   lastCalledTime = Date.now();
	   fps = 0;
	}else{
		delta = (new Date().getTime() - lastCalledTime)/1000;
		lastCalledTime = Date.now();
		fps = 1/delta;
	}

	// When done loading everything re-run function (basically, a frame by frame thing)
	requestAnimationFrame(update);	
}

function ending(){
	ctx.clearRect(0, 0, width, height);
	ctx.drawImage(images.backgrounds.gg, 0, 0);
	ctx.beginPath();
	ctx.fillStyle = "black";
	// Drawing borders
	for (var i=0; i < worldBorder.length; i++) {
		makeRect(worldBorder[i]);
	}
	ctx.fill();
	ctx.closePath();

	levelInf.title.innerHTML = "<3";
	levelInf.body.innerHTML = "Have fun :)<br><br><a id='tools' href='./builder/index.html'>Oh and here's a level editor, if you want.</a>";
	if(bread < 19 ){
		levelInf.bread.innerHTML = "Oh noes! It looks like you didn't get all the bread. No secret message for you :3";
	}else if(bread == 19){
		levelInf.bread.innerHTML = "YAY YOU GOT ALL THE BREAD!!! There may or may not be a gift for your new account in your old house...";
	}else if(bread == 20){
		levelInf.bread.innerHTML = "Don't forget I love you.";
	}

	return 0;
}

// Lets know if colliding at all
function simpleColCheck(shapeA, shapeB){
	if(shapeA.x > shapeB.x+shapeB.width){ // Too far to the right
		return false;
	}
	if(shapeA.y > shapeB.y+shapeB.height){ // Is above it
		return false;
	}
	if(shapeA.x+shapeA.width < shapeB.x){ // Too far to the left
		return false;
	}
	if(shapeA.y+shapeA.height < shapeB.y){ // Is below it
		return false;
	}
	return true;
}

// This is useful for when we need to deny collision, doesn't work for simple checking (understandably)
function colCheck(shapeA, shapeB) {
	// get the vectors to check against
	var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
		vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
		// add the half widths and half heights of the objects
		hWidths = (shapeA.width / 2) + (shapeB.width / 2),
		hHeights = (shapeA.height / 2) + (shapeB.height / 2),
		colDir = null;
 
	// if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
	if (Math.abs(vX) <= hWidths && Math.abs(vY) <= hHeights) { // Is this not so simple simple collision? Cool    
		// figures out on which side we are colliding (top, bottom, left, or right)         
		var oX = hWidths - Math.abs(vX),             
			oY = hHeights - Math.abs(vY);         
		if (oX >= oY) {
			if (vY > 0) {
				colDir = "t";
				shapeA.y += oY;
			} else {
				colDir = "b";
				shapeA.y -= oY;
			}
		} else {
			if (vX > 0) {
				colDir = "l";
				shapeA.x += oX;
			} else {
				colDir = "r";
				shapeA.x -= oX;
			}
		}
	}
	return colDir;
}

function makeRect(rect){
	ctx.rect(rect.x, rect.y, rect.width, rect.height);
};

function fillRect(rect){
	ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
};

function drawImage(ent){
	// console.log(ent);
	ctx.drawImage(ent.img, ent.x, ent.y);//, ent.w, ent.h);
}
 
document.body.addEventListener("keydown", function (e) {
	keyboard[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function (e) {
	keyboard[e.keyCode] = false;
});
 
window.addEventListener("load", function () {
	update();
});

function changeLevel(){
	newLevel = parseInt(document.getElementById("levelInput").value);
	document.getElementById("levelInput").value = "";
	if(newLevel==NaN || newLevel>=world.length){
		newLevel = 0;
	}
}

function writeBanner(heading,description){
	var banner = document.getElementById('banner');
	banner.className = '';
	banner.innerHTML = '';

	var title = document.createElement('h1');
	title.innerText = heading;
	banner.appendChild(title);
	if (description) {
		var paragraph = document.createElement('h3');
		paragraph.innerHTML = "<i>"+description+"</i>";
		banner.appendChild(paragraph);
	};
	var click = document.createElement('p');
	click.innerText = '(click to continue)';
	banner.appendChild(click);
};

function hideBanner() {
	var banner = document.getElementById('banner');
	banner.className = 'hidden';
};

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
};

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

deaths = readCookie("deaths");

if(!deaths){
	createCookie("deaths","0",100);
	deaths = 0;
}else{
	deaths = parseInt(deaths);
}