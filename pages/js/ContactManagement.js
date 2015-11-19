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
	var page = document.getElementById(params.placement);
	
	// I got stuck for awhile and found out I was passing a null value...
	this.sendMail = function(email_id, recipients, sender){};
	this.getEmailList = function(path){ // dummy data for now..
		Helper.Ajax(path, {}, function(){
			var leftside = document.getElementById("leftside");
		
			if (leftside == null) {
				leftside = document.createElement("nav");

				if (page.firstChild != null)
					page.insertBefore(leftside, page.firstChild);
				else
					page.appendChild(leftside);
			} else {
				while (leftside.childNodes.length > 0)
					leftside.removeChild(leftside.childNodes[0]);
			}
		});
	};
};


// get current script full name, split into array along path
var scriptNameArray = document.currentScript.src.split("/");
// take array, and remove file extension from file by splitting 
var scriptName = scriptNameArray[scriptNameArray.length-1].split(".")[0]; 


// Pull/Parse Setup doc from file
Helper.loadHTML('pages/setup/'+scriptName+'.json', function(data){
	var setup_params = JSON.parse(data, Helper.callbackStr2FunctionRef);
	// inherit Static functionailty
	PageObject.prototype = new AssetManagementLib(setup_params);	
	var pageObject = new PageObject(setup_params);
	pageObject.getEmailList("/dummy.json");
});

// Create a new instance of the Class
})();
