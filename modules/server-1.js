var http = require('http');
var fs = require('fs');

let app = http.createServer(function (req, res) {
    fs.readFile('./demo-file-1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
})


app.listen(8080);