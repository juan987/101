console.log('hello, world');
var http = require('http');
var server = http.createServer(
    function(request, response){
        response.writeHead(200, {"Content-Type":'text/plain'});
        //response.end("hello, worl"\n);
        response.end("hello, word \n");
    }
);
server.listen(8000);
console.log("server running at http://localhost:8000");