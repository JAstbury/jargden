var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "/Users/dan/Projects/makers/week-7/notes");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
