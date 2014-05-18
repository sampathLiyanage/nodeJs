var userManager = require("./userManager");

function ChatRoom(){
	this.users = [];
	this.userCount = 0;
	this.messages = [];
}

ChatRoom.prototype.addUser = function(){
	var user = userManager.getNewUser("user" + this.userCount, this);
	this.userCount++;
	this.users.push({"id": this.userCount, "user": user});
	return user;
}

ChatRoom.prototype.sendMessage = function(user, message){
	user.sendMessage(message);
	this.messages.push({"username": user.getName(), "date": new Date, "message": message});
}

ChatRoom.prototype.getMessages = function(userName, message){
	return this.messages;
}

var chatRoom = new ChatRoom();

exports.getInstance = function(){
	return chatRoom;
}