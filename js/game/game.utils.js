function utilsException(message) 
{
   this.message = message; 
}

game.utils = {
	isObject: function(input)
	{
		return (typeof input === "object" && Object.prototype.toString.call(input) !== '[object Array]');
	},

	has: function(input, key)
	{
		return (this.isObject(input) === true && input.hasOwnProperty(key) === true);
	},
	
	isArray: function(input)
	{
		return (typeof input === "object" && Object.prototype.toString.call(input) === '[object Array]');
	},

	isNumber: function(input)
	{
		return (typeof input === "number");
	},

	isString: function(input)
	{
		return (typeof input === "string");
	},
	
	isFloat: function(input)
	{
		return (typeof input === "number" && input !== Math.floor(input));
	},

	isInteger: function(input)
	{
		return (typeof input === "number" && input === Math.floor(input));
	},

	isSet: function(input)
	{
		return (typeof input !== "undefined");
	},

	isEmpty: function(input)
	{
		return (((Utils.isInteger(input) === true || Utils.isFloat(input)) && input === 0) || (Utils.isString(input) === true && input === '') || Utils.isSet(input) === false);
	},

	isTrue: function(input)
	{
		return (typeof input !== "undefined" && input === true);
	},
	isFalse: function(input)
	{
		return (typeof input !== "undefined" && input === false);
	},

	isNull: function(input)
	{
		return (typeof input === "object" && Object.prototype.toString.call(input) !== '[object Null]');
	},

	getRandom: function()
	{
		return Math.random();
	},

	getRandomWeight: function()
	{
		return Math.random() * 0.4 - 0.2;
	}
}