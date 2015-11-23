function AssetManagementNav(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	var managementNav = this;
	
	// Instantiate Main
	switch(params.main_section_lib){
		case "AnalyticsMain":
			Helper.require('./lib/js/AnalyticsMain.js',function(){
				managementNav.main = new AnalyticsMain(params.main_section_params);
			});
			break;
		case "TableMain":
			Helper.require('./lib/js/TableMain.js',function(){
				managementNav.main = new TableMain(params.main_section_params);
			});
			break;
		default:
			Helper.require('./lib/js/AssetManagementMain.js',function(){
				managementNav.main = new AssetManagementMain(params.main_section_params);
				var dupes = document.getElementsByClassName(managementNav.main.element.className);
				
				if (dupes.length == 0)
					params.placement.appendChild(managementNav.main.element);
			});
			break;
	}
	
	// Create a div tag and put it onto the page in the AssetManagementLib tag that was passed in
	params.placement.appendChild(this.element);
	
	// Look at it’s params (a sub-document of the AssetMainLib()‘s params) and find the query callback
	console.log(params);
	
	// Call that function, and get returned an array of documents.
	//params.query_callback;
	//var test = params.query_callback();
	params.query_callback(
			{} // Nothing
			,function(json) { // Success
				// Create Inner Nav
				var sidebar = document.createElement("div");
				var list = document.createElement("ul");
				
				managementNav.element.appendChild(sidebar);
				sidebar.appendChild(list);
				
				sidebar.className = "col-sm-3 col-md-2 sidebar";
				list.className = "nav nav-sidebar";
			
				// Iterate the array of documents, make a list
				if(json.hasOwnProperty("data")) {
					for (var key in json.data) {
						if(json.data[key].hasOwnProperty("email_id")) {
							var id = document.createElement("li");
							var link = document.createElement("a");
							
							list.appendChild(id);
							id.appendChild(link);
							link.appendChild(document.createTextNode(json.data[key].email_id));
							
							link.href = "#";
							link.sender = json.data[key].sender;
						}
					}
				}
			}
			,function(json) { // Failure
				if(json.hasOwnProperty("error")){
					console.error(json.error);
					console.error(json.message);
				}
			}
	);
	
	
	// Put each of the elements into the Div Tag created in step 1.
	
	// If params.nested_navigation == true then you will need to create sub-lists by grouping the documents into Arrays based on whatever is specified in params.nested_navigation_field.
}
/* Navigation Default Params
	{
		 allow_remove : true
		,remove_button_callback : function(){}
		,allow_create : true
		,create_placement : AssetManagementNav_placement.TOP
		,display_unsaved : true
		,nested_navigation : false
		,nested_naviation_field : undefined
		,allow_create_nested : false
		,allow_filter : true
		,allow_filter_field : "name"
		,filter_placement : AssetManagementNav_placement.TOP
		,allow_local_export : true
		,export_placement : AssetManagementNav_placement.BOTTOM
		,allow_rename : true
		,rename_button_callback : function(){}
		,rename_placement : AssetManagementNav_placement.BOTTOM
		,show_expired : true // allows filtering by expired values
	}
*/
