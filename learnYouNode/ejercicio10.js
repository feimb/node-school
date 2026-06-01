const net = require("node:net");

const [, , port, fecha] = process.argv;

const server = net.createServer((socket) => {


    const ahora = new Date();

    const fechaHora =
        `${ahora.getFullYear()}-` +
        `${String(ahora.getMonth() + 1).padStart(2, "0")}-` +
        `${String(ahora.getDate()).padStart(2, "0")} ` +
        `${String(ahora.getHours()).padStart(2, "0")}:` +
        `${String(ahora.getMinutes()).padStart(2, "0")}\n`;

    socket.write(fechaHora)
    socket.end();
})

server.listen(port, () => {
    console.log("servidor funcionando")
});