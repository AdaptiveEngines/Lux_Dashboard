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
					console.log(json.error);
					failure(json);
				    }else{
					success(json.data);
				    }
				    console.log(json);
				} catch(err) {
					// definitently an error
				    console.log(err);
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
		,Assets : {
			 Save : function(collection, data, success, failure){	
				var dataObj ={};
				if(data["_id"]){
					dataObj["_id"] = data["_id"];
				}
				dataObj.update = {
					'$set' : data
				};
				dataObj.collection = collection;
				console.log("DATA SENT TO SERVER");
				console.log(dataObj);
				Server.Helper.Ajax("Assets/adjust", dataObj, success, failure);
			}
			,Remove : function(collection, data, success, failure){
				var dataObj = {
					 "id" : data
					,"update" : {}
					,"remove" : "true"
				}
				dataObj.collection = "Adverts";
				Server.Helper.Ajax("Assets/adjust", dataObj, success, failure);
			}
			,Query : function(collection, data, success, failure){
				Server.Helper.Ajax("Assets/query", {"collection" : collection}, success, failure);
			}
		}
		,Files : {
			 Upload : function(collection, data, success){
				var dataObj = {
					 "file" : data.file
					,"path" : collection + "/"
					,"name" : data.file_name
				};
				Server.Helper.Ajax('Files/upload', dataObj
				,function(newData){
					Helper.alertPage("success", "Upload Successful with no error");
					data.file = undefined;
					data.file_data = newData.name;
					success(data);
				}
				,function(newData){
					Helper.alertPage("danger", "Upload Failed with error");
				});
			}
		}
	}
	,AdManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Files.Upload('Adverts', data, function(data){
				Server.Helper.Assets.Save('Adverts', data, success, failure);
				Server.Helper.Assets.Save('Files', data, success, failure);
			});
		}
		,Rename : function(data, success, failure){
		
		}
		,Remove : function(data, success, failure){
			Server.Helper.Assets.Remove('Adverts', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Assets.Query('Adverts', {}, success, failure);
		}
	}
	,FileManagement : {
		 Save : function(data, success, failure, progress){
			Server.Helper.Files.Upload('Files', data, function(data){
				Server.Helper.Assets.Save('Files', data, success, failure);
			});
		}
		,makeDirectory : function(data, success, failure){
		}
		,Rename : function(data, success, failure){
		
		}
		,Remove : function(data, success, failure){
			Server.Helper.Assets.Remove('Files', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Assets.Query('Files', {}, success, failure);
		}
	}
	,AssetManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Assets.Save("Standard", data, success, failure);
		}
		,Rename : function(data, success, failure){
		
		}
		,Remove : function(data, success, failure){
			Server.Helper.Assets.Remove("Standard", data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Assets.Query("Standard", {}, success, failure);
		}
	}
	,ContentManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Files.Upload('Files', data, function(data){
				Server.Helper.Ajax('CMS/adjust/', data, success, failure);
			});
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
	,PrizeManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Files.Upload('Files', data, function(data){
				Server.Helper.Assets.Save('Prizes', data, success, failure);
			});
		}
		,Rename : function(data, success, failure){
		}
		,Remove : function(data, success, failure){
			Server.Helper.Assets.Remote('Prizes', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Assets.Query('Prizes', {}, success, failure);
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
			Server.Helper.Assets.Save('Rules', data, success, failure);
		}
		,Rename : function(data, success, failure){
		}
		,Remove : function(data, success, failure){
			Server.Helper.Assets.Remove('Rules', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Assets.Query('Rules', {}, success, failure);
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
			Server.Helper.Ajax('Scoreboard/Metric/adjust', data, success, failure);
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
	,GroupManagement : {
		 Save : function(data, success, failure){
			Server.Helper.Ajax('Groups/adjust/', data, success, failure);
		}
		,Rename : function(data, success, failure){
			Server.Helper.Ajax('Groups/adjust/', data, success, failure);
		}
		,Remove : function(data, success, failure){
			var data = {
				 "id" : data
				,"remove" : "true"
			}
			Server.Helper.Ajax('Groups/adjust/', data, success, failure);
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax('Groups/query/', {}, success, failure);
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
