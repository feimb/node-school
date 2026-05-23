const fs = require("fs")

const archivo = fs.readFileSync(process.argv[2], "utf8")
const arrDelimitado = archivo.split("\n")

console.log(arrDelimitado.length - 1)