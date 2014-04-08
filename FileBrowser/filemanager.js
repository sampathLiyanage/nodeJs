var path = require("path");
var filesys = require("fs");  

function showFileContents(relativepath, filePath, response){

function showDirectory(err,files){
        if (err){
            response.writeHeader(404, {"Content-Type": "text/plain"});    
            response.write("404 Not Found\n");    
            response.end(); 
        }
        else {
            response.writeHeader(200);    
            response.write(getHtmlForDir(files).toString(), "binary");    
            response.end(); 
        }
}

function getHtmlForDir(files){
        html = "<html><body>";
        for (i = 0; i<files.length; i++){
                file = files[i];
                if (relativepath == "/")
                        relativepath = "";
                a = "<a href='" + relativepath + "/"  + file + "' >" + file + "</a><br>";
                html = html + a;
        }
        html = html + "</body></html>";
        return html;
}

path.exists(filePath,function(exists){  
        if(!exists){
            response.writeHeader(404, {"Content-Type": "text/plain"});    
            response.write("404 Not Found\n");    
            response.end(); 
        }  
        else{  
            filesys.readFile(filePath, "binary", function(err, file) {    
                 if(err) {    
                     
            filesys.readdir(filePath, showDirectory);
                 
                 }    
                 else{  
                    response.writeHeader(200);    
                    response.write(file, "binary");    
                    response.end();  
                }  
                       
            });  
        }  
    });  
    
}

exports.showFileContents = showFileContents;
