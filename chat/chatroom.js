var userManager = require("./userManager");
var messageManager = require("./messageManager");

function ChatRoom(){
	this.users = [];
	this.messages = [];
	this.messagesJson = [];
	this.userCount = 0;
	this.messageCount = 0;
}

ChatRoom.prototype.addUser = function(){
	var user = userManager.getNewUser(this.userCount, this);
	this.userCount++;
	this.users.push({"id": this.userCount, "user": user});
	return user;
}

ChatRoom.prototype.sendMessage = function(user, message){
	var newMessage = messageManager.createMessage(this.messageCount, user, message);
	this.messageCount++;
	this.messages.push(newMessage);
	this.messagesJson.push(newMessage.getMessageJson());
	user.updateChatLog(newMessage);
}

ChatRoom.prototype.getMessagesJson = function(){
	return this.messagesJson;
}

ChatRoom.prototype.updateMassagesJson = function(){
	this.messagesJson = [];
	for(i=0; i<this.messageCount; i++){
		this.messagesJson.push(this.messages[i].getMessageJson());
	}
}

var chatRoom = new ChatRoom();
exports.getInstance = function(){
	return chatRoom;
}