    var http = require("http");
    var url = require('url');
    var fs = require('fs');
	var io = require("socket.io");
	var chatRoom = require("./chatroom").getInstance();
	
	
    var server = http.createServer(function(request, response){
        console.log('Connection');
		
		fs.readFile(__dirname + "/" + "chat.html", function(error, data){
				if (error){
						response.writeHead(404);
						response.write("opps this doesn't exist - 404");
				}
				else{
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(data, "utf8");
				}
				response.end();
           });
    });

    server.listen(3000);
	

	io.listen(server).on('connection', function(socket){
		
		socket.emit('messages', {'messages': chatRoom.getMessages()}); // Send message to sender
		socket.broadcast.emit('messages', {'messages': chatRoom.getMessages()}); // Send message to everyone BUT sender
		var user = chatRoom.addUser();
		socket.on('client_data', function(data){
			chatRoom.sendMessage(user, data.message);
			socket.emit('messages', {'messages': chatRoom.getMessages()}); // Send message to sender
			socket.broadcast.emit('messages', {'messages': chatRoom.getMessages()}); // Send message to everyone BUT sender
		}); 
	});
	

