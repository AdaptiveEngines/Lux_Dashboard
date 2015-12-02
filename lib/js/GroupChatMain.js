function GroupChatMain(params){
	this.element = params.element;
	this.placement = document.getElementById("Barter");
	/*try{
		this.placement.removeChild(this.element);
		socket.disconnect(2);
	} catch (err) {}
	this.element.innerHTML = "";
	*/
	this.placement.appendChild(this.element);

	if(socket){
		socket.emit('disconnect', {});	
	}
	var socket = io("http://ec2-52-25-154-39.us-west-2.compute.amazonaws.com:3000");
	var _this = this;
	var url = Helper.getJsonFromUrl();	
	
	var previousMessage = "root";

	this.chatBox = document.createElement("INPUT");
/*
	this.chatBox.onchange(function(){
		socket.emit('typing', {group_id : "XXXX"});
	});
*/

	this.sendButton = document.createElement("DIV");
	this.sendButton.className = "btn btn-success btn-md BOOTSTRAP CLASSES";
	this.sendButton.innerHTML = "Send Message";
	this.sendButton.onclick = function(){
		socket.emit('message', {message_id : previousMessage, group_id : params.id, message : _this.chatBox.value});
		_this.chatBox.value = "";
	}


	this.whoButton = document.createElement("DIV");
	this.whoButton.className = "btn btn-warning btn-md BOOTSTRAP CLASSES";
	this.whoButton.innerHTML = "Who is Online";
	this.whoButton.onclick = function(){
		socket.emit('who', {});
	}
	//_this.element.appendChild(this.whoButton);

	socket.on('who', function(data){
		console.log(data);
	});

	
	socket.on('message', function(data){
		var newMessage = document.createElement("DIV");
		console.log(data);
		newMessage.innerHTML = data.value.creator + " : " + data.value.message.body;
		try{
			_this.element.insertBefore(newMessage, _this.chatBox);
		}catch (err) {}
		previousMessage = data.value["_id"];
		socket.emit('recieved', {message_id : data.value["_id"], group_id : params.id});
		socket.emit('read', {message_id : data.value["_id"], group_id : params.id});
	});


	// inhert non-static functionality
	socket.on('connect', function(data){
		console.log("connected to socket");
		console.log(url.access_token);
		console.log("connected to socket");
		console.log(url.access_token);
		socket.emit('register', {access_token : url.access_token});
		_this.element.appendChild(_this.chatBox);
		_this.element.appendChild(_this.sendButton);
	});


	socket.on('connect_error', function(data){
		console.log("disconnected");
		console.log(data);
	});
};

/* Default Values:
 { 
		// auto_save : false
		//,auto_save_callback : function(){}
		//,save_placement : AssetManagementMain_placement.BOTTOM
		//,cancel_button : true
		//,cancel_placement : AssetManagementMain_placement.BOTTOM
		//,populate_default_values: false
	//,save_button : true
	//,asset_category : undefined // when not undefined, all assets should recieve this as a hidden field
	,save_button_callback : function(){}
	//,allow_arbitrary_fields : false
	//,fields : []
 }
*/
