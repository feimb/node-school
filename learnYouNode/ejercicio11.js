const http = require('node:http')
const fs = require("node:fs")

const [,, puerto, path] = process.argv;



const server = http.createServer(function (req, res) {
    const stream = fs.createReadStream(path, { encoding: 'utf8' })

    stream.on("data", (chunk)=>{
        res.write(chunk)
    })
    
    stream.on("end", ()=>{
        res.end()
    })
    // es lo mismo que lo de arriba
    //  fs.createReadStream(filePath).pipe(res); 
})
server.listen(puerto ,()=>{
    console.log(`servidor coerriendo en el puerto ${puerto}`)
})