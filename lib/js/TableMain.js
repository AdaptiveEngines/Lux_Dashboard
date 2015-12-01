function TableMain(params){
	this.element = Helper.createMainDiv(arguments.callee.name);
	
	var createTable = function(key, data){
		var table = document.createElement("TABLE");
		table.className = "table table-hover BOOTSTRAP CLASSES"
		var thead = document.createElement("THEAD");
		var tbody = document.createElement("TBODY");
		
		var tr = document.createElement("TR");
		var td = document.createElement("TD");
		if(key !== null){
			td.innerHTML = key;
			tr.appendChild(td);
			thead.appendChild(tr);
		}
		//
		
		for(var key in data){
			if(data.hasOwnProperty(key)){
				var tr = document.createElement("TR");
				var td = document.createElement("TH");
				td.innerHTML = key;
				tr.appendChild(td);
				td = document.createElement("TD");
				if(typeof data[key] == 'object'){
					td.appendChild(createTable(null, data[key]));
				}else{
					td.innerHTML = data[key];
				}
				tr.appendChild(td);
				tbody.appendChild(tr);
			}
		}

		table.appendChild(thead);
		table.appendChild(tbody);
		return table;	
	};
	var awardPlum = function(id, plums){
		params.save_button_callback({"_id": id, "metric" : "Plums", "change" : plums}
		,function(data){
			Helper.alertPage("success", "Incremented User's Plums by " + plums);
		}
		,function(data){
			Helper.alertPage("danger", "Failed to increment Plums!");
		});
	};
	var plumChange = function(newSection, data, plums){
		var addPlum = document.createElement("DIV");
		addPlum.className = "BOOTSTRAP CLASSES btn btn-success";
		addPlum.onclick = function(){
			awardPlum(data, plums);	
		};
		addPlum.innerHTML = "Awarded " + plums + " Plum";
		newSection.appendChild(addPlum);
	};
	var plumChangeN = function(newSection, data, plums){
		var addPlum = document.createElement("DIV");
		addPlum.className = "BOOTSTRAP CLASSES btn btn-danger";
		addPlum.onclick = function(){
			awardPlum(data, plums);	
		};
		addPlum.innerHTML = "Revoked " + plums + " Plum";
		newSection.appendChild(addPlum);
	};
	var newBody = function(data){
		var newSection = document.createElement("DIV");
		
		plumChange(newSection, data["_id"], "1");
		plumChange(newSection, data["_id"], "10");
		plumChange(newSection, data["_id"], "100");
		plumChangeN(newSection, data["_id"], "-1");
		plumChangeN(newSection, data["_id"], "-10");
		plumChangeN(newSection, data["_id"], "-100");

		console.log(data);
		for(var key in data){
			if(data.hasOwnProperty(key)){
				newSection.appendChild(createTable(key, data[key]));
			}
		}
		return newSection;
	};

	var mainSection = this.element;
	this.updateHTML = function(data){
		params.placement.removeChild(this.element);
		this.element.innerHTML = "";
		var table = newBody(data);
		mainSection.appendChild(table);
		params.placement.appendChild(this.element);
	};
}
