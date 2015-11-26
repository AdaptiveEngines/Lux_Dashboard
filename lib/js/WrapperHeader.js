function WrapperHeader(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " BOOTSTRAP CLASSES";
	
	this.placement = document.getElementById(params.placement);
	this.placement.appendChild(this.element);
	
	// Enter bootstrap stuff here
	var nav = document.createElement("nav");
	var navHeader = document.createElement("div");
	var navBar = document.createElement("div");
	
	navBar.id = "navbar";
	
	nav.className = "navbar navbar-default navbar-fixed-top";
	navHeader.className = "navbar-header";
	navBar.className = "navbar-collapse collapse";
	
	this.element.appendChild(nav);
	nav.appendChild(navHeader);
	nav.appendChild(navBar);
	
	// Nav Header
	var button = document.createElement("button");
	var spanToggle = document.createElement("span");
	var spanBar1 = document.createElement("span");
	var spanBar2 = document.createElement("span");
	var spanBar3 = document.createElement("span");
	
	button.appendChild(spanToggle);
	button.appendChild(spanBar1);
	button.appendChild(spanBar2);
	button.appendChild(spanBar3);
	
	button.type = "button";
	button.className = "navbar-toggle collapsed";
	button.dataset.toggle = "collapse";
	button.dataset.target = "#navbar";
	button.setAttribute("aria-expanded", false);
	button.setAttribute("aria-controls", "navbar");
	
	spanToggle.className = "sr-only";
	spanBar1.className = "icon-bar";
	spanBar2.className = "icon-bar";
	spanBar3.className = "icon-bar";
	
	navHeader.appendChild(button);
	navHeader.appendChild(params.logo.element);
	params.logo.element.className = "navbar-brand";
	
	// NavBar
	var ul = document.createElement("ul");
	
	ul.className = "nav navbar-nav navbar-right";
	
	navBar.appendChild(ul);
	
	for(var dropdown in params.dropdowns) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		var span = document.createElement("span");
		var innerUL = document.createElement("ul");
		var innerLi = document.createElement("li");
		var node = params.dropdowns[dropdown].element;
		
		ul.appendChild(li);
		
		a.href = "#";
		a.className = "dropdown-toggle";
		a.dataset.toggle = "dropdown";
		a.setAttribute("role", "button");
		a.setAttribute("aria-haspopup", true);
		a.setAttribute("aria-expanded", false);
		a.appendChild(document.createTextNode(node.innerHTML + " "));
		a.appendChild(span);
		
		span.className = "caret";
		
		li.className = "dropdown";
		li.appendChild(a);
		li.appendChild(innerUL);
		
		innerUL.className = "dropdown-menu";
		innerUL.appendChild(innerLi);
		innerLi.appendChild(node);
	}
	
	for(var link in params.links) {
		var li = document.createElement("li");
		var node = params.links[link].element;
		node.className = "link";
		
		ul.appendChild(li);
		li.appendChild(node);
	}
}
/* Defaults:
	{
		logo : // link object
		links : [ ] // array of link objects
		dropdowns: [ ] // array of link objects
	}
*/
