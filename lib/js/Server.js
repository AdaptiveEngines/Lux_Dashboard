var Server = {
	Helper: {
		Ajax : function(urlCall, data, success, failure, progress){
			var url = Helper.getJsonFromUrl();
			var http = new XMLHttpRequest();
			urlCall = '../Lux/'+urlCall + '/index.php';			

			http.onreadystatechange = function() {
			    if (http.readyState == 4 && http.status == 200) {
				try {
				   var json = JSON.parse(http.responseText);
					// possible success- need to check for error
				    if(json.hasOwnProperty("error")){
					failure(json);
				    }else{
					success(json.data);
				    }
				    console.log(json);
				} catch(err) {
					// definitently an error
				    failure({"error": "JSON Parsing error", "message": "Server-side code contains error", "code": -1});
				    console.log(http.responseText);
				}
			    }
			}
				

			if(url.hasOwnProperty("access_token")) {
			    console.log(JSON.stringify(data));
			    urlCall = urlCall + "?access_token="+url.access_token; 
			} else {
			    console.log(JSON.stringify(data));
			}
			
			if(data.file != undefined){	// file upload operation
				/* Display the progress of the upload */
				http.upload.onprogress = function(e) {
					if (e.lengthComputable) {
						var percentComplete = (e.loaded / e.total) * 100;
						console.log(percentComplete + '% uploaded');
						if(Helper.isFunction(progress)){
							progress(percentComplete);
						}
					}
				};
				var formData = new FormData();
				formData.append("file", data.file);
				formData.append("name", data.name);
				console.log(urlCall);
				http.open("POST", urlCall);
				http.send(formData);  /* Send to server */
			}else{ // Normal Operation
				console.log(urlCall);
				http.open("POST", urlCall, true);
				http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				http.send(JSON.stringify(data));
			}
		}
	}
	,AdManagement : {
		 Save : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Adverts";
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
		}
	}
	,FileManagement : {
		 Save : function(data, success, failure, progress){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
			Server.Helper.Ajax('Files/upload', data, success, failure);
		}
		,makeDirectory : function(data, success, failure){
			Server.Helper.Ajax('Files/makedir/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
			Server.Helper.Ajax('Files/mv/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			data.collection = "Files";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
			Server.Helper.Ajax('Files/rm/', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Files";
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
			Server.Helper.Ajax('Files/structure/', {}, success, failure);
		}
	}
	,AssetManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
		}
	}
	,ContentManagement : {
		//  available_data_fields : {
		//	content: {
		//		full:
		//		short: 
		//	}
		//	header:{
		//		text:
		//		sub:
		//		url_safe:
		//	}
		//	picture:{
		//		banner:
		//		other: []
		//		slideshow: []
		//	}
		//  }
		 Save : function(data, success, failure){
			// TODO: upload picture's functionality. 
			//Server.Helper.Ajax('Files/upload', data, success, failure);
			Server.Helper.Ajax('CMS/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('CMS/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('CMS/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('CMS/query/', {}, success, failure);
		}
	}
	,ExOAuthClients : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('OAuth2/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('OAuth2/query/', {}, success, failure);
		}
	}
	,MailManagement : {
		 Save : function(data, success, failure){
			data.collection = "Mail";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Mail";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			data.collection = "Mail";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Mail";
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
		}
	}
	,PrizeManagement : {
		 Save : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Prizes";
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
		}
	}
	,PlumAnalytics : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			
		}
	}
	,SystemRules : {
		 Save : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"update" : {}
				,"remove" : "true"
			}
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			data.collection = "Rules";
			Server.Helper.Ajax('Assets/query/', {}, success, failure);
		}
	}
	,APIProviderManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('API/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('API/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('API/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('API/query/', {}, success, failure);
		}
	}
	,ContactManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Contact/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Contact/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('Contact/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Contact/query/', {}, success, failure);
		}
	}
	,MailingManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Mailing/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Mailing/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('Mailing/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Mailing/query/', {}, success, failure);
		}
	}
	,ScoreboardManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Scoreboard/get/', {}, success, failure);
		}
	}
	,UserAnalytics : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			
		}
	}
	,UserAccounts : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Accounts/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Accounts/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('Accounts/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Accounts/query/', {}, success, failure);
		}
	}
	,OrderManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Orders/view/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Orders/pending/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('Orders/ship/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Orders/query/', {}, success, failure);
		}
	}
	// Add code for all of the pages/server interactions
}
