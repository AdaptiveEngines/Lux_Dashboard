function WrapperFooter(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " BOOTSTRAP CLASSES";

	this.element.appendChild(params.logo.element);
	params.logo.element.className += " logo BOOTSTRAP CLASSES";
	this.placement = document.getElementById(params.placement);
	for(var dropdown in params.dropdowns){
		var node = params.dropdowns[dropdown].element;
		this.element.appendChild(node);
		node.className += " dropdown BOOTSTRAP CLASSES";
	}
	for(var link in params.links){
		var node = params.links[link].element;
		this.element.appendChild(node);
		node.className += " link BOOTSTRAP CLASSES";
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
