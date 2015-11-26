(function(){
Helper.require('lib/js/AssetManagementLib.js');
var PageObject = function(params){
	// inhert non-static functionality
	AssetManagementLib.apply(this, arguments);
	/* 
 *
 *	EDITABLE:
 *	This is where any custom fields and functions go:
 *	Add them with function expressions `this.func = function(){};`
 *	And function scoped variables `this.variable = "";`
 *	Unless you really want them to be private, in which case you can
 *	Use `var _variable = ""` to make them private.
 * 	
  	*/
};


// get current script full name, split into array along path
var scriptNameArray = document.currentScript.src.split("/");
// take array, and remove file extension from file by splitting 
var scriptName = scriptNameArray[scriptNameArray.length-1].split(".")[0]; 


// Pull/Parse Setup doc from file
Helper.loadHTML('pages/setup/'+scriptName+'.json', function(data){
	var setup_params = JSON.parse(data, Helper.callbackStr2FunctionRef);
	// inherit Static functionailty
	PageObject.prototype = Object.create(AssetManagementLib.prototype);
	PageObject.prototype.constructor = PageObject;
	var pageObject = new PageObject(setup_params);
});

// Create a new instance of the Class
})();
