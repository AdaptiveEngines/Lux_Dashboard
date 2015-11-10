function AssetManagementNav(params){
	this.element = Helper.createMainDiv(arguments.callee.name);

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
