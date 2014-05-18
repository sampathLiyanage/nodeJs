function User(name, chatRoom){
	this.name = name;
	this.chatRoom = chatRoom;
	this.chatlog = [];
}

User.prototype.setName = function(name){
	this.name = name;
}

User.prototype.getName = function(){
	return this.name;
}

User.prototype.sendMessage = function(message){
	var jsonMessage = {"date": new Date(), "message": message};
	this.chatlog.push(jsonMessage);
}

exports.getNewUser = function(userName, chatRoom){
	return new User(userName, chatRoom);
}