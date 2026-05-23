const fs = require("fs")

const [,, path] = process.argv

const archivo = fs.readFile(path, "utf8", (error, data)=> {
    const arrDelimitado = data.split("\n")
    console.log(arrDelimitado.length - 1)
})


