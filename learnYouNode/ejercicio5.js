const fs = require("fs")
const path = require("path")

const [,, dirname, extension] = process.argv

fs.readdir(dirname, (error, data)=>{
    if (error){
        console.error(error);
        return
    }
    
    data
    .filter((file)=>(
        path.extname(file) === `.${extension}`
    ))
    .forEach((file)=> console.log(file))
})