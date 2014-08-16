game.html = {

	config: {
		game:    game.general.html.game,
		canvas: game.general.html.canvas,
		splash: game.general.html.splash
	},


	initialize: function()
	{
		var div = game.htmlgen.div( { id: game.general.html.game.id } );
		div.appendChild(game.htmlgen.img( { id: game.general.html.splash.id, class: "loading show", src: game.general.html.splash.images.loading } ));
		document.body.appendChild(div);
	},

	showSplashLoading: function()
	{
		el = document.getElementById(this.config.splash.id);
		//if(false === game.utils.isSet(el)) 
	},

	create: function(id, el)
	{

	},

	insertAfter: function(referenceNode, newNode) 
	{
	    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	},

	insertBefore: function(referenceNode, newNode)
	{
	    referenceNode.parentNode.insertBefore(newNode, referenceNode);
	}

}