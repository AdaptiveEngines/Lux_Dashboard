function Links(params){
	this.href = params.href;
	this.alt = params.alt;
	this.element = Helper.createMainDiv(arguments.callee, "A");
	if(params.hasOwnProperty("icon") && params.icon != ""){
		this.icon = params.icon;
		this.img = document.createElement("IMG");
		this.img.src = this.icon;
		this.img.alt = this.alt;
		this.element.appendChild(this.img);
	}else{
		this.icon = "";
		this.element.innerHTML = this.alt;
	}
	if(params.hasOwnProperty("onclick_default") && params.onclick_default){
		this.element.onclick = function(base){
			return function(){ Helper.loadPage(base) };
		}(params.href.substr(1));
	}else if(params.hasOwnProperty("onclick") && Helper.isFunction(params.onclick)){
		this.element.onclick = params.onclick;
	}
	this.element.href = this.href;
}

/* Defaults
	{
		 icon : ""
		,href: ""
		,alt : ""
	}
*/
