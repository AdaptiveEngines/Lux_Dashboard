function WrapperNav(params){
	//console.log(params);
	//console.log("please?");
	var placement = document.getElementById(params.placement);
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " col-sm-3 col-md-2 sidebar";

	this.element.appendChild(createUL(params.nav_object));
	placement.appendChild(this.element);
	
	function createUL(object){
		var ul = document.createElement("UL");
		ul.className = " nav nav-sidebar";
		
		for(link in object){
			var li = document.createElement("LI");
			li.className = "BOOTSTRAP CLASSES";

			var link_element = new Links({
				 href : "#" + object[link].base
				,alt : object[link].name
				,onclick: function(base){
						return function(){ Helper.loadPage(base) };
					}(object[link].base)
			});
			li.appendChild(link_element.element);
			ul.appendChild(li);
			if(object[link].hasOwnProperty("elements")){
				ul.appendChild(arguments.callee(object[link].elements));
			}
		}
		return ul;
	}
}
/* Defaults:
	{
		nav_object : [] // pulled from JSON file
	}
*/

