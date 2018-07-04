const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type':'text/html'
//     });
//     res.end(HTML);
// });

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, {
            'Content-type':'text/html'
        });

        let HTML = fs.readFileSync('./index.html');
        res.end(HTML);

    } else if(req.url === '/api/user') {
        res.writeHead(200, {
            'Content-type':'application/json'
        });
        const json = JSON.stringify({
            name: 'Francis',
            cars: ['Ford', 'Nissan']
        })
    
        res.end(json);
    } else {
        res.writeHead(404, {
            'Content-type':'text/plain'
        });

        res.end('404 Page Not found');
    }

    
});

let port = 8080;
server.listen(port, '127.0.0.1');
console.log('Server is running on port ' + port);