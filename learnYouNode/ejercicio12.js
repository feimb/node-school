const http = require('node:http');


const [, , port] = process.argv;

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        res.end();
        return;
    }
    let texto = "";

    req.on("data", (chunk) => {
        texto += chunk.toString()
    })
    req.on("end", () => {
        const resultado = texto.toUpperCase();
        res.end(resultado);

    });
})

server.listen(port)