var worldBorder = [
	{
		x: 0,
		y: 0,
		width: 10,
		height: height,
	},
	{
		x: 0,
		y: height - 10,
		width: width,
		height: 50,
	},
	{
		x: width - 10,
		y: 0,
		width: 50,
		height: height,
	},
	{
		x: 0,
		y: 0,
		width: width,
		height: 10,
	}
];

world[0] = { // Hello World
	name: "Hello World",
	background: images.backgrounds.hello_world,
	player:{
		x: width/2,
		y: height - 20,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		doubled: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: 20,
			y: height-21,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
			subQuote:"Stephen R. Covey",
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 730,
			y: 370,
			width: 270,
			height: 30,
		},
		// {
		// 	x: 820,
		// 	y: 340,
		// 	width: 180,
		// 	height: 60,
		// },
		{
			x: 910,
			y: 320,
			width: 90,
			height: 80,
		},
		{
			x: 750,
			y: 280,
			width: 100,
			height: 30,
		},
		{
			x: 300,
			y: 240,
			width: 400,
			height: 30,
		},
	],
	noJumps:[
		{
			x: 150,
			y: 150,
			width: 50,
			height: 150,
		},
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 163,
			y: 135,
			width: 24,
			height: 10,
			taken: false,
		},
	],
	doors:[],
	goal:{
		x: 301, // Error: Not Found
		y: 190,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++;
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[1] = { // Am I Right
	name: "Am I Right",
	background: images.backgrounds.right,
	player:{
		x: 50,
		y: height - 20,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: 305,
			y: height-221,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
			subQuote:"Maya Angelou",
		}
	],
	boxes:[],
	noJumps:[],
	cubes:[
		{
			x: 220,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 265,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 325,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		}
	],
	fields:[
		{
			x: 300,
			y: height-210,
			width: 20,
			height: 200,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 380,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[2] = { // Onward and Upward
	name: "Onward and Upward",
	background: images.backgrounds.onward,
	player:{
		x: width/2,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 50,
			xMax: 200,
			x: 60,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 250,
			xMax: 400,
			x: 260,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 650,
			x: 510,
			y: 205,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 20,
			y: 209,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "If you're going through hell, keep going.",
			subQuote:"Winston Churchill",
		}
	],
	boxes:[
		{
			x: 700,
			y: 130,
			width: 220,
			height: 140,
		},
		{
			x: 10,
			y: 220,
			width: 690,
			height: 50,
		}
	],
	noJumps:[],
	cubes:[
		{
			x: 220,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		}
	],
	plates:[
		{
			x: 815,
			y: 120,
			width: 20,
			height: 15,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 755,
			y: 120,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		}
	],
	fields:[
		{
			x: 790,
			y: 10,
			width: 20,
			height: 120,
			targets: [0], // Which element needs to activate it
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 700,
		y: 80,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[3] = { // Flying Snake
	name: "Flying Snake",
	background: images.backgrounds.snake,
	player:{
		x: width-30,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: 50,
			y: 24,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "The last hope of the damned is not for salvation.",
			subQuote:"...",
		}
	],
	boxes:[
		{
			x: 800,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 600,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 400,
			y: 100,
			width: 100,
			height: 300,
		},
		{
			x: 200,
			y: 0,
			width: 100,
			height: 300,
		},
		{
			x: 0,
			y: 100,
			width: 100,
			height: 300,
		}
	],
	noJumps:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 20,
		y: 50,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = width-30;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width-30;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[4] = { // It's Dangerous to go Alone
	name: "It's Dangerous to go Alone",
	background: images.backgrounds.alone,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 350,
			xMax: 500,
			x: 410,
			y: 255,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 490,
			xMax: 560,
			x: 510,
			y: 115,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 200,
			xMax: 350,
			x: 310,
			y: 375,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 530,
			y: 119,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.",
			subQuote:"J.K. Rowling",}
		,
	],
	boxes:[
		{
			x: 10,
			y: 270,
			width: 790,
			height: 20,
		},
		{
			x: 790,
			y: 280,
			width: 20,
			height: 20,
		},
		{
			x: 800,
			y: 290,
			width: 20,
			height: 20,
		},
		{
			x: 150,
			y: 130,
			width: 840,
			height: 20,
		},
		{
			x: 140,
			y: 140,
			width: 20,
			height: 20,
		},
		{
			x: 130,
			y: 150,
			width: 20,
			height: 20,
		},
		{
			x: 120,
			y: 160,
			width: 20,
			height: 20,
		},
		{
			x: 110,
			y: 170,
			width: 20,
			heihgt: 20,
		}
	],
	noJumps:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[],
	goal:{
		x: 900,
		y: 80,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

world[5] = { // Whole lotta fielding
	name: "Whole lotta fielding",
	background: images.backgrounds.fielding,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: 970,
			y: 379,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Cave furorem patientis",
			subQuote:"John Dryden",}
		,
	],
	boxes:[
		{
			x: 10,
			y: 230,
			width: 980,
			height: 20,
		}
	],
	noJumps:[],
	cubes:[
		{
			x: 50,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 0,
		},
		{
			x: 75,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 1,
		},
	],
	plates:[
		{
			x: 100,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 160,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 1,
		},
		{
			x: 220,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 2,
		},
		{
			x: 280,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 3,
		},
		{
			x: 340,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 4,
		},
		{
			x: 400,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 5,
		},
		{
			x: 560,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 6,
		},
		{
			x: 620,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 7,
		},
		{
			x: 680,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 8,
		},
		{
			x: 740,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 9,
		},
		{
			x: 800,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 10,
		},
		{
			x: 860,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 11,
		},
	],
	fields:[
		{
			x: 135,
			y: height-150,
			width: 20,
			height: 140,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		},
		{
			x: 255,
			y: height-150,
			width: 20,
			height: 140,
			targets: [2,3], // Which element needs to activate it
			opened: false,
		},
		{
			x: 375,
			y: height-150,
			width: 20,
			height: 140,
			targets: [4,5], // Which element needs to activate it
			opened: false,
		},
		{
			x: 595,
			y: height-150,
			width: 20,
			height: 140,
			targets: [6,7], // Which element needs to activate it
			opened: false,
		},
		{
			x: 715,
			y: height-150,
			width: 20,
			height: 140,
			targets: [8,9], // Which element needs to activate it
			opened: false,
		},
		{
			x: 835,
			y: height-150,
			width: 20,
			height: 140,
			targets: [10,11], // Which element needs to activate it
			opened: false,
		},
	],
	keys:[],
	doors:[],
	goal:{
		x: 470,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-20;
			resetLevel(0);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-20;
		resetLevel(1);
	},
};

/*
world[6] = { // Example key usage
	player:{
		x: width-20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 400,
			xMax: 450,
			x: 410,
			y: 240,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
		{
			xMin: 500,
			xMax: 550,
			x: 510,
			y: 140,
			height: 10,
			width: 22,
			speed: 1,
			velX: 1,
			velY: 0,
			jumping: false,
			grounded: false,
		},
	],
	bugs:[],
	bread:[
		{
			x: 20,
			y: 20,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "temp",
			subQuote:"",
		}
	],
	boxes:[ // basically platforms, what everything is currently based on
		{
			x: 20,
			y: 100,
			width: 80,
			height: 10,
		},
		{
			x: 80,
			y: 180,
			width: 80,
			height: 10
		},
		{
			x: 160,
			y: 140,
			width: 120,
			height: 10
		},
		{
			x: 310,
			y: 100,
			width: 110,
			height: 10
		}
	],
	noJumps:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 50,
			y: 70,
			width: 24,
			height: 10,
			taken: false,
		},
	],
	doors:[
		{
			x: 310,
			y: 50,
			width: 20,
			height: 50,
			opened: false,
		},
	],
	goal:{
		x: 400,
		y: 50,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};*/

world[6] = { // Simply Walls
	name: "Simply Walls",
	background: images.backgrounds.walls,
	player:{
		x: width/2,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: width-30,
			y: 280,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "It is our choices that show us who we truly are, far more than our abilities.",
			subQuote:"J.K Rowling",
		}
	],
	boxes:[
		{
			x: 10,
			y: 250,
			width: 980,
			height: 20,
		},
		{
			x: 825,
			y: 270,
			width: 20,
			height: 70,
		}
	],
	noJumps:[],
	cubes:[
		{
			x: 550,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 0,
		},
	],
	plates:[
		{
			x: 160,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 0,
		},
		{
			x: 100,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		},
		{
			x: 700,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 2,
		},
		{
			x: 760,
			y: height-20,
			width: 20,
			height: 5,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 3,
		}
	],
	fields:[
		{
			x: 135,
			y: height-130,
			width: 20,
			height: 120,
			targets: [0,1],
			opened: false,
		},
		{
			x: 735,
			y: height-130,
			width: 30,
			height: 120,
			targets: [2,3],
			opened: false,
		}
	],
	keys:[
		{
			x: 30,
			y: 375,
			width: 24,
			height: 10,
			taken: false,
		}
	],
	doors:[
		{
			x: 825,
			y: 340,
			width: 20,
			height: 50,
			opened: false,
		}
	],
	goal:{
		x: 925,
		y: 340,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[7] = { // Simply Danger
	name: "Simply Danger",
	background: images.backgrounds.simply_danger,
	player:{
		x: width/2,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 160,
			xMax: 290,
			x: 170,
			y: 375,
			height: 10,
			width: 22,
			speed: 3,
			velX: 3,
			velY: 0,
		},
		{
			xMin: 160,
			xMax: 290,
			x: 258,
			y: 375,
			height: 10,
			width: 22,
			speed: 3,
			velX: -3,
			velY: 0,
		},
		{
			xMin: 710,
			xMax: 840,
			x: 720,
			y: 375,
			height: 10,
			width: 22,
			speed: 3,
			velX: 3,
			velY: 0,
		},
		{
			xMin: 710,
			xMax: 840,
			x: 808,
			y: 375,
			height: 10,
			width: 22,
			speed: 3,
			velX: -3,
			velY: 0,
		},
	],
	bugs:[],
	bread:[
		{
			x: 855,
			y: 129,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "This too shall pass.",
			subQuote:"Nothing endures",
		}
	],
	boxes:[
		{
			x: 100,
			y: 340,
			width: 50,
			height: 50,
		},
		{
			x: 300,
			y: 340,
			width: 50,
			height: 50,
		},
		{
			x: 650,
			y: 340,
			width: 50,
			height: 50,
		},		
	],
	noJumps:[
		{
			x: 850,
			y: 140,
			width: 20,
			height: 150,
		},
		{
			x: 850,
			y: 340,
			width: 50,
			height: 50,
		},
	],
	cubes:[],
	plates:[],
	fields:[],
	keys:[
		{
			x: 38,
			y: 375	,
			width: 24,
			height: 10,
			taken: false,
		},
	],
	doors:[
		{
			x: 850,
			y: 290,
			width: 20,
			height: 50,
			opened: false,
		},
	],
	goal:{
		x: 920,
		y: 340,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = width/2;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++;
		}
	},
	reset:function(){
		world[level].player.x = width/2;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[8] = { // Timing
	name: "Timing",
	background: images.backgrounds.timing,
	player:{
		x: width-30,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[
		{
			xMin: 200,
			xMax: 400,
			x: 210,
			y: 175,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		},
		{
			xMin: 450,
			xMax: 650,
			x: 460,
			y: 175,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		},
		{
			xMin: 700,
			xMax: 900,
			x: 710,
			y: 175,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		},
		{
			xMin: 200,
			xMax: 400,
			x: 210,
			y: 375,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		},
		{
			xMin: 450,
			xMax: 650,
			x: 460,
			y: 375,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		},
		{
			xMin: 700,
			xMax: 900,
			x: 710,
			y: 375,
			height: 10,
			width: 22,
			speed: 2,
			velX: 2,
			velY: 0,
		}
	],
	bugs:[
		{
			yMin: 20,
			yMax: 180,
			x: 414,
			y: 30,
			height: 20,
			width: 20,
			speed: 2,
			velX: 0,
			velY: 2,
		},
		{
			yMin: 20,
			yMax: 180,
			x: 674,
			y: 30,
			height: 20,
			width: 20,
			speed: 2,
			velX: 0,
			velY: 2,
		},
		{
			yMin: 220,
			yMax: 380,
			x: 414,
			y: 230,
			height: 20,
			width: 20,
			speed: 2,
			velX: 0,
			velY: 2,
		},
		{
			yMin: 220,
			yMax: 380,
			x: 674,
			y: 230,
			height: 20,
			width: 20,
			speed: 2,
			velX: 0,
			velY: 2,
		}
	],
	bread:[
		{
			x: 45,
			y: 89,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Give a man a mask and he will show his true face.",
			subQuote:"Oscar Wilde",
		}
	],
	boxes:[
		{
			x: 200,
			y: 190,
			width: 790,
			height: 20,
		},
		{
			x: 10,
			y: 100,
			width: 100,
			height: 20,
		},
		{
			x: 90,
			y: 10,
			width: 20,
			height: 40,
		}
	],
	noJumps:[],
	cubes:[],
	plates:[],
	fields:[],
	keys:[],
	doors:[
		{
			x: 90,
			y: 50,
			width: 20,
			height: 50,
			opened: false,
		},
	],
	goal:{
		x: 920,
		y: 140,
		width: 51,
		height: 50,
		action: function(){
			world[level].player.x = width-30;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++;
		}
	},
	reset:function(){
		world[level].player.x = width-30;
		world[level].player.y = height-60;
		resetLevel(true);
	}
};

world[9] = { // Leapfrog
	name: "Leapfrog",
	background: images.backgrounds.leapfrog,
	player:{
		x: 20,
		y: height-60,
		width: 16,
		height: 45,
		speed: 3,
		velX: 0,
		velY: 0,
		jumping: false,
		grounded: false,
		hasCube: -1,
	},
	critters:[],
	bugs:[],
	bread:[
		{
			x: width-30,
			y: height-21,
			width: 11,
			height: 11,
			pickedUp: false,
			quote: "Everyone is Player 1, and to them everyone else is an NPC",
			subQuote:"",
		}
	],
	boxes:[],
	noJumps:[],
	cubes:[
		{
			x: 50,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1, // ie on a plate
			id: 0,
		},
		{
			x: 80,
			y: height-30,
			width: 20,
			height: 20,
			pickedUp: false,
			placed: -1,
			id: 1,
		}
	],
	plates:[
		{
			x: 250,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1, // which cube it's holding
			playerStillIn: false,
			id: 0,
		},
		{
			x: 310,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 1,
		},
		{
			x: 650,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 2,
		},
		{
			x: 710,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 3,
		},
		{
			x: 850,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 4,
		},
		{
			x: 910,
			y: height-20,
			width: 20,
			height: 15,
			activated: false,
			cube: -1,
			playerStillIn: false,
			id: 5,
		}
	],
	fields:[
		{
			x: 285,
			y: 10,
			width: 20,
			height: 380,
			targets: [0,1], // Which element needs to activate it
			opened: false,
		},
		{
			x: 685,
			y: 10,
			width: 20,
			height: 380,
			targets: [2,3],
			opened: false,
		},
		{
			x: 885,
			y: 10,
			width: 20,
			height: 380,
			targets: [4,5],
			opened: false,
		}
	],
	keys:[],
	doors:[],
	goal:{
		x: 770,
		y: height-60,
		width: 51,
		height: 50,
		action: function (){
			world[level].player.x = 20;
			world[level].player.y = height-60;
			resetLevel(false);
			newLevel++; // Or bonus level or something
		}
	},
	reset:function(){
		world[level].player.x = 20;
		world[level].player.y = height-60;
		resetLevel(true);
	},
};

// Don't trip
world[10] = {name: 'Don\'t Trip',background:images.backgrounds.dont_trip, player:{x:30,y:200,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:30,y:200,width:50,height:50},critters:[{xMin:450,xMax:700,x:450,y:105,height:10,width:22,speed:1,velX:1},{xMin:750,xMax:980,x:750,y:105,height:10,width:22,speed:1,velX:1},{xMin:330,xMax:460,x:330,y:375,height:10,width:22,speed:1,velX:10},{xMin:520,xMax:650,x:520,y:375,height:10,width:22,speed:1,velX:10},{xMin:710,xMax:840,x:710,y:375,height:10,width:22,speed:1,velX:10},],bugs:[{yMin:170,yMax:390,x:385,y:170,height:20,width:20,speed:1,velY:1},{yMin:170,yMax:390,x:575,y:170,height:20,width:20,speed:1,velY:1},{yMin:170,yMax:390,x:765,y:170,height:20,width:20,speed:1,velY:1},],bread:[{x:950,y:109,width:11,height:11,pickedUp:false,quote:'Assumption is the mother of all fuckups',subQuote:''},],boxes:[{x:10,y:250,width:300,height:140},{x:860,y:320,width:130,height:70},{x:420,y:120,width:570,height:50},],noJumps:[{x:310,y:250,width:20,height:140},{x:460,y:300,width:60,height:90},{x:650,y:350,width:60,height:40},{x:840,y:320,width:20,height:70},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:900,y:270,width:51,height:50,action:function(){world[level].player.x=30;world[level].player.y=200;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=30;world[level].player.y=200;resetLevel(true);}}

world[11] = {name: 'Jumping',background:images.backgrounds.jumping,player:{x:20,y:50,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:50,width:50,height:50},critters:[{xMin:400,xMax:600,x:400,y:115,height:10,width:22,speed:1,velX:1},{xMin:400,xMax:600,x:578,y:10,height:10,width:22,speed:1,velX:-1},{xMin:800,xMax:990,x:800,y:115,height:10,width:22,speed:1,velX:1},{xMin:800,xMax:990,x:968,y:205,height:10,width:22,speed:1,velX:-1},{xMin:800,xMax:990,x:800,y:295,height:10,width:22,speed:1,velX:1},],bugs:[{yMin:160,yMax:390,x:650,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:530,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:270,x:390,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:250,y:160,height:20,width:20,speed:1,velY:1},{yMin:160,yMax:390,x:110,y:160,height:20,width:20,speed:1,velY:1},],bread:[{x:395,y:259,width:11,height:11,pickedUp:false,quote:'A society grows great when old men plant trees whose shade they know they shall never sit in.',subQuote:'Greek Proverb'},],boxes:[{x:10,y:100,width:390,height:60},{x:400,y:130,width:200,height:30},{x:600,y:100,width:200,height:60},{x:760,y:160,width:40,height:150},{x:800,y:180,width:40,height:20},{x:950,y:180,width:40,height:20},{x:800,y:270,width:40,height:20},{x:950,y:270,width:40,height:20},{x:380,y:270,width:40,height:40},{x:240,y:160,width:10,height:110},{x:100,y:270,width:10,height:120},{x:520,y:160,width:10,height:110},{x:640,y:270,width:10,height:130},{x:130,y:270,width:10,height:120},{x:270,y:160,width:10,height:110},{x:550,y:160,width:10,height:110},{x:670,y:270,width:10,height:120},],noJumps:[{x:110,y:270,width:20,height:10},{x:250,y:260,width:20,height:10},{x:530,y:260,width:20,height:10},{x:650,y:270,width:20,height:10},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:30,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(true);}}

world[12] = {name: 'Christmas',background:images.backgrounds.christmas,player:{x:475,y:20,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:475,y:20,width:50,height:50},critters:[],bugs:[{yMin:10,yMax:250,x:90,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:190,x:190,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:130,x:290,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:130,x:690,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:190,x:790,y:10,height:20,width:20,speed:1,velY:1},{yMin:10,yMax:250,x:890,y:10,height:20,width:20,speed:1,velY:1},],bread:[{x:450,y:179,width:11,height:11,pickedUp:false,quote:'I read once that the Ancient Egyptians had fifty words for sand and the Eskimos had a hundred for snow. I wish I had a thousand words for love, but all that comes to mind is the way you move against me while you sleep.	And there are no words for that.',subQuote:''},],boxes:[{x:400,y:70,width:200,height:60},{x:300,y:130,width:140,height:60},{x:200,y:190,width:240,height:60},{x:100,y:250,width:340,height:60},{x:560,y:130,width:140,height:60},{x:560,y:190,width:240,height:60},{x:560,y:250,width:340,height:60},{x:440,y:190,width:70,height:20},{x:490,y:260,width:70,height:20},{x:560,y:310,width:20,height:80},],noJumps:[],cubes:[],plates:[],fields:[],keys:[{x:600,y:360,width:24,height:10,taken:false},],doors:[{x:490,y:210,width:24,height:10,opened:false},],goal:{x:500,y:340,width:51,height:50,action:function(){world[level].player.x=475;world[level].player.y=20;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=475;world[level].player.y=20;resetLevel(true);}}

world[13] = {name: 'Life is one way',background:images.backgrounds.one_way,player:{x:20,y:50,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:50,width:50,height:50},critters:[{xMin:20,xMax:230,x:20,y:375,height:10,width:22,speed:1,velX:10},{xMin:20,xMax:230,x:208,y:375,height:10,width:22,speed:1,velX:-10},{xMin:450,xMax:500,x:450,y:375,height:10,width:22,speed:1,velX:0},{xMin:750,xMax:950,x:750,y:75,height:10,width:22,speed:1,velX:.25},],bugs:[],bread:[{x:960,y:80,width:11,height:11,pickedUp:false,quote:'First they laugh at you, then they ignore you, then they fight you, and then you win.',subQuote:'Ghandi'},],boxes:[{x:10,y:100,width:90,height:60},{x:200,y:10,width:40,height:200},{x:240,y:260,width:200,height:130},{x:340,y:90,width:200,height:50},{x:740,y:90,width:240,height:50},],noJumps:[{x:100,y:100,width:10,height:60},{x:190,y:10,width:10,height:200},{x:230,y:260,width:10,height:130},{x:10,y:160,width:100,height:10},{x:10,y:160,width:10,height:230},{x:980,y:10,width:10,height:380},{x:730,y:90,width:10,height:50},{x:440,y:260,width:10,height:130},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:800,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=50;resetLevel(true);}}

world[14] = {name: '',player:{x:20,y:340,width:16,height:45,speed:3,velX:0,velY:0,jumping:false,grounded:false,hasCube:-1},spawn:{x:20,y:340,width:50,height:50},critters:[{xMin:330,xMax:400,x:330,y:275,height:10,width:22,speed:1,velX:1},{xMin:330,xMax:400,x:330,y:315,height:10,width:22,speed:1,velX:1.3333},{xMin:330,xMax:400,x:330,y:355,height:10,width:22,speed:1,velX:1.6666},{xMin:610,xMax:680,x:610,y:355,height:10,width:22,speed:1,velX:1.125},{xMin:610,xMax:680,x:610,y:315,height:10,width:22,speed:1,velX:1.375},{xMin:610,xMax:680,x:610,y:275,height:10,width:22,speed:1,velX:1.625},],bugs:[{yMin:20,yMax:50,x:380,y:20,height:20,width:20,speed:1,velY:0.5},{yMin:80,yMax:110,x:380,y:80,height:20,width:20,speed:1,velY:0.5},{yMin:20,yMax:50,x:610,y:20,height:20,width:20,speed:1,velY:0.5},{yMin:80,yMax:110,x:610,y:80,height:20,width:20,speed:1,velY:0.5},],bread:[],boxes:[{x:130,y:250,width:120,height:40},{x:190,y:150,width:40,height:100},{x:160,y:110,width:120,height:40},{x:220,y:10,width:40,height:100},{x:350,y:110,width:70,height:40},{x:400,y:10,width:20,height:100},{x:590,y:10,width:20,height:100},{x:590,y:110,width:70,height:40},{x:320,y:250,width:100,height:20},{x:750,y:250,width:120,height:40},{x:730,y:110,width:120,height:40},{x:750,y:10,width:40,height:100},{x:780,y:150,width:40,height:100},{x:370,y:100,width:10,height:10},{x:370,y:40,width:10,height:50},{x:370,y:70,width:30,height:10},{x:260,y:10,width:490,height:10},{x:370,y:20,width:10,height:10},{x:380,y:50,width:20,height:10},{x:590,y:250,width:100,height:20},{x:400,y:270,width:20,height:120},{x:590,y:270,width:20,height:120},{x:330,y:290,width:90,height:20},{x:330,y:330,width:90,height:20},{x:590,y:290,width:90,height:20},{x:590,y:330,width:90,height:20},{x:320,y:370,width:80,height:20},{x:610,y:370,width:80,height:20},{x:630,y:100,width:10,height:10},{x:630,y:40,width:10,height:50},{x:630,y:20,width:10,height:10},{x:610,y:50,width:20,height:10},{x:610,y:70,width:20,height:10},],noJumps:[{x:380,y:60,width:20,height:10},{x:320,y:270,width:10,height:100},{x:680,y:270,width:10,height:100},{x:610,y:60,width:20,height:10},],cubes:[],plates:[],fields:[],keys:[],doors:[],goal:{x:930,y:340,width:51,height:50,action:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(false);newLevel++;}},reset:function(){world[level].player.x=20;world[level].player.y=340;resetLevel(true);}};