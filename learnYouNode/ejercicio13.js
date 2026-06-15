const http = require('node:http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://localhost`);
    const iso = parsedUrl.searchParams.get('iso');
    if (req.method === 'GET' && parsedUrl.pathname === '/api/parsetime') {
        const date = new Date(iso);
        const result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } else if (req.method === 'GET' && parsedUrl.pathname === '/api/unixtime') {
        const date = new Date(iso);
        const result = { unixtime: date.getTime() };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));

    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(Number(process.argv[2]));
