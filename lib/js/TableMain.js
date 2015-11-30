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

		//
		table.appendChild(thead);
		table.appendChild(tbody);
		return table;	
	};

	var newBody = function(data){
		var newSection = document.createElement("DIV");
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
