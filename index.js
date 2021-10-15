const http = require("http")
const url = require("url")


var app = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':"text/html"});
    const q = url.parse(req.url, true).query;
    res.end(`${q.year} - ${q.month}`);

});


app.listen(8080);