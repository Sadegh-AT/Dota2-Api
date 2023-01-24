const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url == "/api/dota2-hero") {
    res.end("ok");
  }
});

server.listen(2000);
