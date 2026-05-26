const fs = require("fs")
const path = require("path")



module.exports = function devolverExtension(dirname, extension, callback) {
    fs.readdir(dirname, (error, files) => {
        if (error) return callback(error);

        const filteredFiles = files.filter(file =>
            path.extname(file) === `.${extension}`
        )

        callback(null, filteredFiles);
    })
}

// function devolverExtension(error, data){
//     if (error){
//         console.error(error);
//         return
//     }

//     data
//     .filter((file)=>(
//         path.extname(file) === `.${extension}`
//     ))
//     .forEach((file)=> console.log(file))
// }