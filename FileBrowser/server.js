var http = require("http");
var url = require("url");
var path = require("path");

function start(showFileContents) {
  function onRequest(request, response) {
    var my_path = url.parse(request.url).pathname;
    var full_path = path.join(process.cwd(),my_path);
    console.log("Request for " + full_path + " received.");
    
    showFileContents(my_path,full_path, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
