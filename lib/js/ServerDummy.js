var Server = {
	Helper: {
		Ajax : function(url, data, callback){
			var dummyDataRaw = {

			   "status":{

			      "code":1,

			      "status":"OK",

			      "message":"success",

			      "request":{

				 "type":"update",

				 "code":0

			      }

			   },

			   "meta":{

			      "timestamp":1448407941,

			      "version":"4.0",

			      "API":"lux"

			   },

			   "request":{

			      "method":"GET",

			      "time":1448407941,

			      "url":"\/Lux\/CMS\/query\/",

			      "execution_time":0.45108795166016,

			      "execution_time_units":"ns"

			   },

			   "data":{

			      "55e741db4e901fddb7fa6d1c":{

				 "_id":{

				    "$id":"55e741db4e901fddb7fa6d1c"

				 },

				 "field_name":"test",

				 "content":{

				    "full":"test",

				    "short":"test"

				 },

				 "header":{

				    "text":"test",

				    "sub":"test",

				    "url_safe":"test"

				 },

				 "picture":{

				    "banner":"test",

				    "slideshow":[

				       "test"

				    ],

				    "other":[

				       "test"

				    ]

				 }

			      },

			      "5644b98d4e901fddb7fa6db4":{

				 "_id":{

				    "$id":"5644b98d4e901fddb7fa6db4"

				 }

			      },

			      "5644b9c34e901fddb7fa6db5":{

				 "_id":{

				    "$id":"5644b9c34e901fddb7fa6db5"

				 }

			      },

			      "5644ba504e901fddb7fa6db6":{

				 "_id":{

				    "$id":"5644ba504e901fddb7fa6db6"

				 }

			      },

			      "5644ba644e901fddb7fa6db7":{

				 "_id":{

				    "$id":"5644ba644e901fddb7fa6db7"

				 }

			      },

			      "5644c00f4e901fddb7fa6db8":{

				 "_id":{

				    "$id":"5644c00f4e901fddb7fa6db8"

				 }

			      },

			      "5644c0364e901fddb7fa6db9":{

				 "_id":{

				    "$id":"5644c0364e901fddb7fa6db9"

				 }

			      },

			      "5644c07c4e901fddb7fa6dba":{

				 "_id":{

				    "$id":"5644c07c4e901fddb7fa6dba"

				 }

			      },

			      "5644c0c94e901fddb7fa6dbb":{

				 "_id":{

				    "$id":"5644c0c94e901fddb7fa6dbb"

				 }

			      },

			      "5644c0f44e901fddb7fa6dbc":{

				 "_id":{

				    "$id":"5644c0f44e901fddb7fa6dbc"

				 }

			      },

			      "5644c1164e901fddb7fa6dbd":{

				 "_id":{

				    "$id":"5644c1164e901fddb7fa6dbd"

				 }

			      },

			      "5644c11c4e901fddb7fa6dbe":{

				 "_id":{

				    "$id":"5644c11c4e901fddb7fa6dbe"

				 }

			      },

			      "5644c14f4e901fddb7fa6dbf":{

				 "_id":{

				    "$id":"5644c14f4e901fddb7fa6dbf"

				 }

			      },

			      "5644c16d4e901fddb7fa6dc0":{

				 "_id":{

				    "$id":"5644c16d4e901fddb7fa6dc0"

				 }

			      },

			      "5644c19a4e901fddb7fa6dc1":{

				 "_id":{

				    "$id":"5644c19a4e901fddb7fa6dc1"

				 },

				 "field_name":"uTest",

				 "test":"uTest_field"

			      }

			   }

			};
			callback(dummyDataRaw.data);
		}
	}
	,AdManagement : {
		 Save : function(data, success, failure){
		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
		}
	}
	,FileManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,AssetManagement : {
		 Save : function(data, success, failure){
			console.log("SAVE: " );
			console.log(data);

		}
		,Rename : function(data, success, failure){
			console.log("RENAME: " );
			console.log(data);

		}
		,Remove : function(data, success, failure){
			console.log("REMOVE: " );
			console.log(data);
			
		}
		,Query : function(data, success, failure){
			console.log("QUERY: " );
			console.log(data);
			Server.Helper.Ajax({},{},success);	
		}
	}
	,ContentManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,ExOAuthClients : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,PrizeManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
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
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,SystemRules : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,APIProviderManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,ContactManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,MailingManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
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
			var dataObject = {
			  "status": {
			    "code": 1,
			    "status": "OK",
			    "message": "success",
			    "request": {
			      "type": "query",
			      "code": 1
			    }
			  },
			  "meta": {
			    "timestamp": 1448837392,
			    "version": "4.0",
			    "API": "lux"
			  },
			  "request": {
			    "method": "GET",
			    "time": 1448837392,
			    "url": "/Lux/Scoreboard/get/?access_token=5784d84499c397278f8a1bcecc9fd6e5",
			    "execution_time": 0.73003768920898,
			    "execution_time_units": "ns"
			  },
			  "response": null,
			  "data": {
			    "565b80444e901fddb7fa6dca": {
			      "_id": {
				"$id": "565b80444e901fddb7fa6dca"
			      },
			      "user_id": {
				"$id": "55e5c51b4579408541b3c9a7"
			      },
			      "assets": {
				"adsada": {
				  "quantity": 14
				},
				"aadsadassdaddsasdasdada": {
				  "quantity": 6
				}
			      },
			      "Levels": {
				"First_level": {
				  "level_id": "First_level",
				  "Metrics": {
				    "Third_metric": "4"
				  }
				},
				"Second_level": {
				  "level_id": "Second_level",
				  "Metrics": {
				    "Fourth_metric": "9"
				  },
				  "sub_levels": {
				    "First_sub_level": {
				      "sub_level_id": "First_sub_level",
				      "Metrics": {
					"SubLevel_metric": "15"
				      }
				    }
				  }
				},
				"Third_level": {
				  "level_id": "Third_level"
				},
				"Fourth_level": {
				  "level_id": "Fourth_level"
				}
			      },
			      "Metrics": {
				"First_metric": 7,
				"Second_metric": 6
			      }
			    }
			  }
			}
			
			success(dataObject.data);	
			
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
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,UserAccounts : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	,OrderManagement : {
		 Save : function(data, success, failure){

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
			Server.Helper.Ajax({},{},success);	
			
		}
	}
	// Add code for all of the pages/server interactions
}
