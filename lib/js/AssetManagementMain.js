function AssetManagementMain(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " BOOTSTRAP CLASSES";
	
	// Custom style

	var mainSection = this.element;

	var newBody = function(data){
		var form = document.createElement("DIV");
		// Loop through each item in array.fields
		for(var key in params.fields){
			// check if data contains that item
			// create a new field, passing in the existing if possible
			var field_value = "";
			if(data.hasOwnProperty(data[params.fields[key].field_name])){
				field_value = data[params.fields[key].field_name];
			}else if(params.fields[key].hasOwnProperty("default_value")){
				field_value = params.fields[key].default_value;
			}
			params.fields[key].default_value = field_value;
			var field = (new AssetManagementField(params.fields[key]).element);
			form.className = "BOOTSTRAP CLASSES";
			form.appendChild(field);
		}
		return form;
	};

	if(params.hasOwnProperty("asset_category") && params.asset_category != undefined){
		// Add a new hidden field that has name:value = asset_category:params.asset_category
	}
	
	if(params.hasOwnProperty("allow_arbitrary_fields") && params.allow_arbitrary_fields != undefined){
		// append a button to the bottom that allows you to create new field
		// This will require linking two inputs so that anytime 1 input changes, 
		// the other ones "name" updates to match
		// the first will need to be a textarea not an input field
		//
		// Also, when allow arbitrary is on, fields not specified in the fields array 
		// should be shown here.
	}

	if(!params.hasOwnProperty("save_button") || params.save_button){
		// Save Button should cycle all input tags in form and get their name:value
		// push it into an object `update[name] = value;`
		// and pass that object to the save_button_callback(update ...);
	}

		


	this.updateHTML = function(data){
		params.placement.removeChild(this.element);
		this.element.innerHTML = "";
		mainSection.appendChild(newBody(data));
		params.placement.appendChild(this.element);
	};
}
/* Default Values:
 { 
	 auto_save : false
	,auto_save_callback : function(){}
		//,save_placement : AssetManagementMain_placement.BOTTOM
		//,cancel_button : true
		//,cancel_placement : AssetManagementMain_placement.BOTTOM
	,populate_default_values: false
	,save_button : true
	,asset_category : undefined // when not undefined, all assets should recieve this as a hidden field
	,save_button_callback : function(){}
	,allow_arbitrary_fields : false
	,fields : []
 }
*/
