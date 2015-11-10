function AssetManagementField(){
	this.element = Helper.createMainDiv(arguments.callee.name);
}

/* Default Parameters
			{
				 name : ""
				,field_name : ""		
				,description: ""
				,type: "text"
				,validator : Validators.default_validator
				,required : false
				,default_value : ""
				,hidden : false
				,exclude_if_blank: true
				,subFields : [] // each of these is a new field object
			 }
*/
