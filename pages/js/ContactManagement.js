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
		Helper.loadHTML(path, function(data){
			var myData = JSON.parse(data);
			var leftside = document.getElementById("leftside");
			var div = document.createElement("div");
			var ul = document.createElement("ul");
		
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
			
			leftside.appendChild(div);
			div.appendChild(ul);
			div.className = "col-sm-3 col-md-2 sidebar";
			ul.className = "nav nav-sidebar";
			
			for (var i = 0; i < myData.length; i++) {
				var li = document.createElement("li");
				var a = document.createElement("a");
				
				ul.appendChild(li);
				li.appendChild(a);
				
				// Hiding my data inside my element
				a.style.cursor = "pointer";
				a.email = myData[i].email;
				a.recipients = myData[i].recipients;
				
				a.onclick = function() {
					var form = document.createElement("form");
					var emailIdLabel = document.createElement("label");
					var senderLabel = document.createElement("label");
					var emailId = document.createElement("input");
					var sender = document.createElement("input");
					
					page.insertBefore(form, leftside.nextSibling);
					form.appendChild(emailIdLabel);
					form.appendChild(senderLabel);
					emailIdLabel.appendChild(document.createTextNode("Email ID "));
					emailIdLabel.appendChild(emailId);
					senderLabel.appendChild(document.createTextNode("Sender "));
					senderLabel.appendChild(sender);
					
					emailIdLabel.style.display = "block";
					senderLabel.style.display = "block";
					
					emailId.value = this.innerHTML;
					sender.value = this.email;
					
					console.log("hi?");
					console.log(this.email);
					console.log(this.recipients);
				};
				a.appendChild(document.createTextNode(myData[i].id));
				
				//li.appendChild(document.createTextNode(myData[i].id));
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
	pageObject.getEmailList("./dummy.json");
});

// Create a new instance of the Class
})();
