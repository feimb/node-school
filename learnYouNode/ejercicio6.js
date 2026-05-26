const devolverExtension = require("./aux6.js")

const [, , dirname, extension] = process.argv

devolverExtension(dirname, extension, (error, files) => {
    if(error) return console.error(error);

    files.forEach(file => {
        console.log(file)
    });
})
// fs.readdir(dirname, devolverExtension)