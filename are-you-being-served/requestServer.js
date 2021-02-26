// requestServer.js file
const http = require("http");
const port = 8686;
const request = require('request');
const server = http.createServer(function(req,res){
  // handle response
request("http//:www.google.com", function(err, response, body){
if(!err && response.statusCode === 200){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(body);
}else{
console.log(err)
res.writeHead(response.statusCode,{"content-Type": "text/plain"});
res.write(err.toString());
res.end();
}
})

}).listen(port);
