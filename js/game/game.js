/** @namespace */
var game = 
{
	utils:   { },
	html:    { },
	htmlgen: { },
	scene:   { },

	general: {
		html: {
			game: {
				id: "game"
			},
			canvas: {
				id: "game-canvas"
			},
			splash: {
				id: "game-splash",
				images: {
					loading: "images/game/splash/ops.svg"
				}
			}
		}
	},

	modules: ["utils", "html", "htmlgen", "scene"],

	is: {
		initialized: false,
		loaded:      false
	},

	checkModules: function()
	{
		for(i in this.modules)
		{
			var module = this[this.modules[i]];
			console.log(module);
		}
	},

	initialize: function()
	{
		this.checkModules();
		this.html.initialize();
		this.html.showSplashLoading();
		this.is.initialized = true;
	},

	run: function()
	{
		game.initialize();
	},

	loaded: function()
	{
	}
};

function gameException(message) 
{
   this.message = message;
};