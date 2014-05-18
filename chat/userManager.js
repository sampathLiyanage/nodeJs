function User(id, chatRoom){
	this.id = id;
	this.name = "user" + id;
	this.chatRoom = chatRoom;
	this.chatlog = [];
}

User.prototype.setName = function(name){
	this.name = name;
	this.chatRoom.updateMassagesJson();
}

User.prototype.getName = function(){
	return this.name;
}

User.prototype.getId = function(){
	return this.id;
}

User.prototype.updateChatLog = function(message){
	this.chatlog.push(message);
}

exports.getNewUser = function(userName, chatRoom){
	return new User(userName, chatRoom);
}