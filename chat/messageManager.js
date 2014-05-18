function ChatMessage(id, user, message){
	this.id = id;
	this.user = user;
	this.message = message;
}

ChatMessage.prototype.getMessageJson = function(){
	return {"id":this.id, "username":this.user.getName(), "message":this.message};
}

exports.createMessage = function(id, user, message){
	return new ChatMessage(id, user, message);
}