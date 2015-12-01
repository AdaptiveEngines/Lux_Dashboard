function AssetManagementMain(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " BOOTSTRAP CLASSES";
	
	// Custom style

	var mainSection = this.element;
	var createField = function(form){
		var addButton = document.createElement("DIV");
		addButton.className = "BOOTSTRAP CLASSES btn btn-sm btn-success";
		addButton.innerHTML = "+";
		addButton.onclick = function(){
			categoryParams = {
				 name : ""
				,field_name : false		
				,description: ""
				,type: "text"
				,required : true
				,default_value : ""
				,hidden : false
			};
			var field = (new AssetManagementField(categoryParams).element);
			form.className = "BOOTSTRAP CLASSES";
			form.insertBefore(field, addButton);

		}
		return addButton;
	};
	var newBody = function(data){
		console.log(params);
		var form = document.createElement("DIV");
		// Loop through each item in array.fields
		for(var key in params.fields){
			// check if data contains that item
			// create a new field, passing in the existing if possible
			var field_value = "";
			// if the existing data has a value, use that
			if(data.hasOwnProperty(params.fields[key].field_name) && typeof data[params.fields[key].field_name] != Object){
				field_value = data[params.fields[key].field_name];
			// Otherwise use the default from the array
			}else if(params.fields[key].hasOwnProperty("default_value")){
				field_value = params.fields[key].default_value;
			}
			var oldDefaultValue = params.fields[key].default_value || "";
			params.fields[key].default_value = field_value;
			var field = (new AssetManagementField(params.fields[key]).element);
			params.fields[key].default_value = oldDefaultValue;
			form.className = "BOOTSTRAP CLASSES";
			form.appendChild(field);
		}
		if(params.hasOwnProperty("asset_category") && params.asset_category != undefined){
			// Add a new hidden field that has name:value = asset_category:params.asset_category
			categoryParams = {
				 name : ""
				,field_name : "asset_category"		
				,description: ""
				,type: "text"
				,required : true
				,default_value : params.asset_category
				,hidden : true
			};
			var field = (new AssetManagementField(categoryParams).element);
			form.className = "BOOTSTRAP CLASSES";
			form.appendChild(field);
		}

		if(params.hasOwnProperty("allow_arbitrary_fields") && params.allow_arbitrary_fields != undefined){
			form.appendChild(createField(form));
		}

		return form;
	};

	var saveSuccess = function(){
		// create alert div (role=alert, class="alert alert-success"
		Helper.alertPage("success", "Entry Successfully Saved");
	};
	var saveFail = function(){
		// create alert div (role=alert, class="alert alert-danger"
		Helper.alertPage("danger", "Entry was not saved due to an error on the page");
	};

	var createSaveButton = function(form){
		if(!params.hasOwnProperty("save_button") || params.save_button){
			var saveButton = document.createElement("DIV");
			saveButton.className = "BOOTSTRAP CLASSES btn btn-success";
			saveButton.innerHTML = "SAVE";
			saveButton.onclick = function(){
				var inputs = form.getElementsByTagName("INPUT");
				var dataOutput = {};
				for(var i =0; i < inputs.length; i++){
					if(inputs[i].getAttribute("included") != "false"){
						if(inputs[i].getAttribute("type") == "file"){
							dataOutput[inputs[i].name] = inputs[i].files[0];
						}else if(inputs[i].getAttribute("exclude_if_blank") != "true" || inputs[i].value != ""){
							dataOutput[inputs[i].name] = inputs[i].value;
						}
					}
				}
				params.save_button_callback(dataOutput, saveSuccess, saveFail);
			};
			return saveButton;
		}
	};

	this.updateHTML = function(data){
		params.placement.removeChild(this.element);
		this.element.innerHTML = "";
		var form = newBody(data);
		mainSection.appendChild(form);
		mainSection.appendChild(createSaveButton(form));
		params.placement.appendChild(this.element);
	};
}
/* Default Values:
 { 
		// auto_save : false
		//,auto_save_callback : function(){}
		//,save_placement : AssetManagementMain_placement.BOTTOM
		//,cancel_button : true
		//,cancel_placement : AssetManagementMain_placement.BOTTOM
		//,populate_default_values: false
	//,save_button : true
	//,asset_category : undefined // when not undefined, all assets should recieve this as a hidden field
	,save_button_callback : function(){}
	//,allow_arbitrary_fields : false
	//,fields : []
 }
*/
