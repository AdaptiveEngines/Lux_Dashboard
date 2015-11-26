function AssetManagementNav(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " col-sm-offset-3 col-md-offset-2 col-sm-3 col-md-2 sidebar";
	
	// Custom style
	//this.element.style.backgroundColor = "lightblue";

	var makeNavLink = function(text, data){
		return (new Links({
				 icon : ""
				,href: "#"
				,alt : text
				,onclick_default: false
				,onclick: function(){
					params.main.updateHTML(data);	
				}
			})).element;
	};

	var getAlt = function(data, key){
		if(params.hasOwnProperty("navigation_field") && data[key].hasOwnProperty(params.navigation_field)){
			alt = data[key][params.navigation_field];
		}else if(data[key].hasOwnProperty("field_name")){
			alt = data[key].field_name;
		}else{
			alt = key;
		}
		return alt;
	};
	if(!params.hasOwnProperty("allow_create") || params.allow_create){
		// opens a new blank document in the Asset Management Main and allows it to be saved
		// Callback for save adds element to nav
	}

	if(!params.hasOwnProperty("allow_remove") || params.allow_remove){
		// Sends an adjust to remove this asset by name
		// Callback removes element from nav 
	}

	var createNavItem = function(wrapper, data){
		var navList = document.createElement("UL");
		navList.className = "nav nav-sidebar";
		for(var key in data){	
			var navElement = document.createElement("LI");
			var alt = "";
			if(data.hasOwnProperty(key)){
				alt = getAlt(data, key);
			}
			navElement.appendChild(makeNavLink(alt, data[key]));	
			navList.appendChild(navElement);
		}
		wrapper.element.appendChild(navList);
	};
	var AMN = this;

	Server.ContactManagement.Query({}
	,function(data){
		if(params.hasOwnProperty("allow_nested_navigation") && params.allow_nested_navigation){
			// TODO: split data into multiple arrays
			var grouped = Helper.groupBy(data, params.nested_navigation_field);
			var navList = document.createElement("UL");
			navList.className = "BOOTSTRAP CLASSES";

			for(var key in grouped){	
				var navElement = document.createElement("LI");
				navElement.innerHTML = key;
				navElement.className = "BOOTSTRAP CLASSES";

				createNavItem(navElementi, grouped[key]);
				navList.appendChild(navElement);
			}
			AMN.element.appendChild(navList);
		}else{
			createNavItem(AMN, data);
		}
	}
	,function(){});	

	// Create a div tag and put it onto the page in the AssetManagementLib tag that was passed in
	params.placement.appendChild(this.element);
	params.placement.appendChild(params.main.element);
}
/* Navigation Default Params
	{
	allow_remove : true
	,remove_button_callback : function(){}
	,allow_create : true
		//,create_placement : AssetManagementNav_placement.TOP
	,navigation_field : "field_name"
		//,display_unsaved : true
	,nested_navigation : false
	,nested_naviation_field : undefined
		//,allow_create_nested : false
		//,allow_filter : true
		//,allow_filter_field : "name"
		//,filter_placement : AssetManagementNav_placement.TOP
		//,allow_local_export : true
		//,export_placement : AssetManagementNav_placement.BOTTOM
		//,allow_rename : true
		//,rename_button_callback : function(){}
		//,rename_placement : AssetManagementNav_placement.BOTTOM
		//,show_expired : true // allows filtering by expired values
	}
*/
