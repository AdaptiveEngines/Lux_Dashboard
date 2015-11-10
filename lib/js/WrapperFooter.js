function WrapperFooter(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.appendChild(params.logo.element);
	params.logo.element.className = "logo";
	this.placement = document.getElementById(params.placement);
	for(var dropdown in params.dropdowns){
		var node = params.dropdowns[dropdown].element;
		this.element.appendChild(node);
		node.className = "dropdown";
	}
	for(var link in params.links){
		var node = params.links[link].element;
		this.element.appendChild(node);
		node.className = "link";
	}
	this.placement.appendChild(this.element);
}
/* Defaults:
	{
		logo : // link object
		links : [ ] // array of link objects
		dropdowns: [ ] // array of link objects
	}
*/
