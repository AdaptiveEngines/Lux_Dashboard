function AssetManagementLib(params){
	// get the placement on the page from the params
	var page = document.getElementById(params.placement);

	// Creates the main div, does not put on page
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " BOOTSTRAP CLASSES";

	var createNav = function(AML, params){
		if(!params.hasOwnProperty("has_nav") || !params.has_nav){
			Helper.require('./lib/js/AssetManagementNav.js',function(){

				params.nav_params.main = AML.main; 	
				params.nav_params.placement = AML.element; 
				
				// Because there's a nav, we have to change the class of 'page' to update the offset
				page.className = "col-sm-offset-6 col-md-offset-4";

				// 'this' refers to 'window'
				this.nav = new AssetManagementNav(params.nav_params);
			});
		}
	}

	// See which main section to use (AssetManagement, Analytics, or Table)
	params.main_section_params.placement = this.element;
	var AML = this;
	switch(params.main_section_lib){
		case "AnalyticsMain":
			Helper.require('./lib/js/AnalyticsMain.js',function(){
				this.main = new AnalyticsMain(params.main_section_params);
				AML.main = this.main;
				createNav(AML, params);
			});
			break;
		case "TableMain":
			Helper.require('./lib/js/TableMain.js',function(){
				this.main = new TableMain(params.main_section_params);
				AML.main = this.main;
				createNav(AML, params);
			});
			break;
		case "GroupChatMain":
			Helper.require('./lib/js/AssetManagementMain.js',function(){
				this.main = new AssetManagementMain(params.main_section_params);;
				AML.main = this.main;
				createNav(AML, params);
			});
			break;
		default:
			Helper.require('./lib/js/AssetManagementMain.js',function(){
				this.main = new AssetManagementMain(params.main_section_params);;
				AML.main = this.main;
				createNav(AML, params);
			});
			break;
	}
	
	page.appendChild(this.element);
}

/* DEFAULT VALUES FOR EACH FIELD: 
{ All Accounted for above:
	 placement : "page_body"
	,main_section_lib : "AssetManagementMain" // others include: "AnalyticsMain" | "TableMain"
	,main_section_params: { } // See main section lib entry
	,has_nav : true
	,nav_params : { } // see nav section lib entry
}
*/ 
