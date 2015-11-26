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

		}
		,Rename : function(data, success, failure){

		}
		,Remove : function(data, success, failure){
			
		}
		,Query : function(data, success, failure){
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
			Server.Helper.Ajax({},{},success);	
			
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
