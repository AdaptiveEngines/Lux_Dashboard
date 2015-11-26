function AssetManagementField(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	this.element.className += " form-group";
	var label = document.createElement("LABEL");
	label.innerHTML = params.name;
	label.className = "BOOTSTRAP CLASSES";

	var desc = document.createElement("DIV");
	desc.innerHTML = params.description;
	desc.className = "BOOTSTRAP CLASSES";

	var input = document.createElement("INPUT");
	input.setAttribute("value", params.default_value);
	input.setAttribute("name" , params.field_name);
	input.setAttribute("type" , params.type);
	if(params.required){
		input.setAttribute("required","");
	}
	if(params.hidden == "true"){
		input.setAttribute("type","hidden");
	}
	input.className = "form-control";
	// worry about subFields............
	
	this.element.appendChild(label);	
	this.element.appendChild(desc);	
	this.element.appendChild(input);
	
	var form = document.createElement("DIV");
	for(var key in params.subFields){
		// check if data contains that item
		// create a new field, passing in the existing if possible
		var field_value = "";
		/*
		if(params.data.hasOwnProperty(params.data[params.subFields[key].field_name])){
			field_value = params.data[params.subFields[key].field_name];
		}else*/ if(params.subFields[key].hasOwnProperty("default_value")){
			field_value = params.subFields[key].default_value;
		}
		
		params.subFields[key].default_value = field_value;
		var field = (new AssetManagementField(params.subFields[key]).element);
		form.className = "BOOTSTRAP CLASSES";
		form.appendChild(field);
	}
	this.element.appendChild(form);
}

/* Default Parameters
			{
			 name : ""
			,field_name : ""		
			,description: ""
			,type: "text"
				//,validator : Validators.default_validator
			,required : false
			,default_value : ""
			,hidden : false
				//,exclude_if_blank: true
				//,subFields : [] // each of these is a new field object
			 }
*/
