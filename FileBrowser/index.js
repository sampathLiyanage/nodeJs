var server = require("./server");
var fileManager = require ("./filemanager");
server.start(fileManager.showFileContents);
