Loader.addImages([
	
	{ id:"placeholder_act4_bg", src:"sprites/act4/placeholder_act4_bg.png" },
	{ id:"act4_callback", src:"sprites/act4/callback.png" },
	{ id:"al_shire", src:"sprites/act4/al_shire.png" },
	{ id:"outside_hong", src:"sprites/act4/hong_outside.png" },

	{ id:"a4_talk_1", src:"sprites/act4/talk_1.png" },
	{ id:"a4_talk_2", src:"sprites/act4/talk_2.png" },
	{ id:"a4_talk_smash", src:"sprites/act4/talk_smash.png" },

]);

Loader.addSounds([
	/*{ id:"squeak", src:"sounds/sfx/squeak.mp3" },
	{ id:"record_scratch", src:"sounds/sfx/record_scratch.mp3" },
	{ id:"shoryuken", src:"sounds/sfx/shoryuken.mp3" }*/
]);

function BG_Act4(){

	var self = this;

	// Sprites!
	self.bgSprite = new Sprite({
		image: Library.images.placeholder_act4_bg,
		grid:{ width:1, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.callbackSprite = new Sprite({
		image: Library.images.act4_callback,
		grid:{ width:2, height:1 },
		frame:{ width:400, height:200 },
		y: 347
	});
	self.alShireSprite = new Sprite({
		image: Library.images.al_shire,
		grid:{ width:4, height:1 },
		frame:{ width:360, height:360 },
		y: 192
	});
	self.outsideHongSprite = new Sprite({
		image: Library.images.outside_hong,
		grid:{ width:4, height:3 },
		frame:{ width:720, height:720 },
		y: 90
	});
	self.outsideHongSprite.gotoFrame(4);

	// Anxiety BG... WHITE MODE
	self.anxiety = new BG_Anxiety(true);

	// Talking Sprites
	self.smashSprite = new Sprite({
		image: Library.images.a4_talk_smash,
		grid:{ width:3, height:1 },
		frame:{ width:720, height:600 },
		y: 200
	});
	self.smashSprite.gotoFrame(2); // blank
	self.talk1Sprite = new Sprite({
		image: Library.images.a4_talk_1,
		grid:{ width:3, height:1 },
		frame:{ width:720, height:400 },
		y: 256
	});
	self.talk2Sprite = new Sprite({
		image: Library.images.a4_talk_2,
		grid:{ width:4, height:2 },
		frame:{ width:720, height:400 },
		y: 256
	});

	// LAYERS
	self.layers = [
		
		self.bgSprite,
		self.callbackSprite,
		self.alShireSprite,
		self.outsideHongSprite,

		self.anxiety,

		self.smashSprite,
		self.talk1Sprite,
		self.talk2Sprite

	];
	var PARALLAXES = [
		
		0.5, // placeholder bg
		0.8, // callback
		0.6, // Al Shire
		1.0, // outside Hong

		0.0, // anxiety bg

		1.0, // smash sprite
		1.0, // talk 1 sprite
		1.0, // talk 2 sprite

	];
	var ALPHAS = [

		1.0, // placeholder bg
		1.0, // callback
		1.0, // callback
		1.0, // outside Hong

		0.0, // anxiety bg

		1.0, // smash sprite
		0.0, // talk 1 sprite
		0.0, // talk 2 sprite

	];
	var OFFSETS = [
		0,
		0,
		0,
		0,

		0,

		-210,
		-210,
		-210
	]

	var parallax = 0;
	var parallaxTicker = 0;
	var PARALLAXING = null;
	var ALPHA_INDEX = 4;
	self.update = function(){

		// START PARALLAXING IN / OUT
		if(PARALLAXING!=null){
			
			if(PARALLAXING=="out"){
				parallaxTicker += 1/60; // 0 to 1 in one second
			}
			if(PARALLAXING=="in"){
				parallaxTicker -= 1/60; // 1 to 0 in one second
			}
			if(parallaxTicker>1) parallaxTicker = 1;
			if(parallaxTicker<0) parallaxTicker = 0;

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*210;

			// Anxiety Alpha
			ALPHAS[ALPHA_INDEX] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				if(STAGE==1){
					ALPHAS[6] = 1; // Talk 1
				}

				if(STAGE==3){
					ALPHAS[7] = 1; // Talk 2
				}

			}

		}

		// Anxiety BG
		if(ALPHAS[ALPHA_INDEX]>0){
			self.anxiety.update(ALPHAS[ALPHA_INDEX]);
			if(ALPHAS[ALPHA_INDEX]==1){ // if fully visible...
				ALPHAS[0] = ALPHAS[1] = ALPHAS[2] = ALPHAS[3] = 0; // hide everything under
			}else{
				ALPHAS[0] = ALPHAS[1] = ALPHAS[2] = ALPHAS[3] = 1; // hide everything under
			}
		}

	};

	self.draw = function(ctx){

		ctx.save();

		for(var i=0; i<self.layers.length; i++){
			var layer = self.layers[i];
			layer.x = PARALLAXES[i] * parallax - OFFSETS[i];
			if(ALPHAS[i]>0){
				ctx.globalAlpha = ALPHAS[i];
				layer.draw(ctx);
			}
		}

		ctx.restore();

	};

	var STAGE = 0;
	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act4-out-1", function(){

			// WHOOSH
			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh");

		}),
		subscribe("act4-in-2", function(){

			// SHOW ACTION, HIDE CHARS
			ALPHAS[6] = 0; // Bye Talk 1

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

		}),
		subscribe("act4-out-3", function(){

			// WHOOSH
			STAGE = 3;
			PARALLAXING = "out";
			sfx("whoosh");

		}),
	);

}