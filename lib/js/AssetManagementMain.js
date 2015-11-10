function AssetManagementMain(params){
	this.element = Helper.createMainDiv(arguments.callee.name);

}
/* Default Values:
 { 
		 auto_save : false
		,auto_save_callback : function(){}
		,save_button : true
		,save_placement : AssetManagementMain_placement.BOTTOM
		,cancel_button : true
		,cancel_placement : AssetManagementMain_placement.BOTTOM
		,populate_default_values: false
		,asset_category : undefined // when not undefined, all assets should recieve this as a hidden field
		,save_button_callback : function(){}
		,allow_arbitrary_fields : false
		,fields : []
 }
*/
