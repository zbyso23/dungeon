game.htmlgen = {

    br: function()
    {
        return this._el("br");
    },

    div: function(params)
    {
        var el = this._el("div");
        el = this._addParams(el, params);
        if(params.hasOwnProperty('dataToggle')) el.setAttribute('data-toggle', params.dataToggle);
        return el;
    },
    
    span: function(params)
    {
        var el = this._el("span");
        return this._addParams(el, params);
    },
    
    i: function(params)
    {
        var el = this._el("i");
        return this._addParams(el, params);
    },
    
    h1: function(params)
    {
        return this._simple("h1", params);
    },
    
    h2: function(params)
    {
        return this._simple("h2", params);
    },
    
    h3: function(params)
    {
        return this._simple("h3", params);
    },

    label: function(params)
    {
        var el = this._simple("label", params);
        if(params.hasOwnProperty('for')) el.htmlFor = params.for;
        return el;
    },
    
    button: function(params)
    {
        return this._simple("button", params);
    },
    
    select: function(params)
    {
        var el = this._simple("select", params);
        if(params.hasOwnProperty('name')) el.name = params.name;
        if(params.hasOwnProperty('options')) 
        {
            if(params.options.length instanceof Array)
            {
                for(var i = 0; i < params.options.length; i++) 
                {
                    var subel = this.option(params.options[i])
                    el.appendChild(subel);
                }
            }
            else
            {
                for(value in params.options)
                {
                    var subel = this.option(params.options[value]);
                    el.appendChild(subel);
                }
            }
        }
        return el;
    },
    
    option: function(params)
    {
        var el = this._simple("option", params);
        if(params.hasOwnProperty('value')) el.value = params.value;
        if(params.hasOwnProperty('selected')) el.selected = true;
        return el;
    },
    
    input: function(params)
    {
        var el = this._simple("input", params);
        if(params.hasOwnProperty('name')) el.name = params.name;
        if(params.hasOwnProperty('value')) el.value = params.value;
        if(params.hasOwnProperty('type')) el.type = params.type;
        return el;
    },

    canvas: function(params)
    {
        var el = this._simple("canvas", params);
        if(params.hasOwnProperty('width')) el.width = params.width;
        if(params.hasOwnProperty('height')) el.height = params.height;
        return el;
    },

    img: function(params)
    {
        var el = this._simple("img", params);
        if(params.hasOwnProperty('src')) el.src = params.src;
        if(params.hasOwnProperty('width')) el.width = params.width;
        if(params.hasOwnProperty('height')) el.height = params.height;
        return el;
    },
    
    text: function(text)
    {
        return document.createTextNode(text);
    },

    _el: function(type)
    {
        return document.createElement(type);
    },
    
    _simple: function(type, params)
    {
        var el = this._el(type);
        if(params.hasOwnProperty('text')) 
        {
            var text = document.createTextNode(params.text);
            el.appendChild(text);
        }
        return this._addParams(el, params);
    },
    
    _addParams: function(el, params)
    {
        if(params.hasOwnProperty('class')) el.className = params.class;
        if(params.hasOwnProperty('id')) el.id = params.id;
        return el;
    }
}