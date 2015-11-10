function AssetManagementLib(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	switch(params.main_section_lib){
		case "AnalyticsMain":
			Helper.require('./lib/js/AnalyticsMain.js',function(){
				this.main = new AnalyticsMain(params.main_section_params);
			});
			break;
		case "TableMain":
			Helper.require('./lib/js/TableMain.js',function(){
				this.main = new TableMain(params.main_section_params);
			});
			break;
		default:
			Helper.require('./lib/js/AssetManagementMain.js',function(){
				this.main = new AssetManagementMain(params.main_section_params);
			});
			break;
	}
	if(!params.hasOwnProperty("has_nav") || !params.has_nav){
		Helper.require('./lib/js/AssetManagementNav.js',function(){
			this.nav = new AssetManagementNav(params.nav_params);
		});
	}
}

/* DEFAULT VALUES FOR EACH FIELD: 
{
	 placement : "page_body"
	,main_section_lib : "AssetManagementMain" // others include: "AnalyticsMain" | "TableMain"
	,main_section_params: { } // See main section lib entry
	,has_nav : true
	,nav_params : { } // see nav section lib entry
}
*/ 
