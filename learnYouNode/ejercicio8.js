const http = require("node:http");

const [, , url] = process.argv

http.get(url, (response) => {

    let string = ""
    response.on("data", (chunk)=>{
        string += chunk.toString();
    })
    response.on("end", ()=>{
        console.log(string.length)
        console.log(string);
    })
})