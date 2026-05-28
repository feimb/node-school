const http = require("node:http");

const [, , url] = process.argv

http.get(url, (response) => {
    response.setEncoding("utf8")

    response.end(
        console.log(chunk))

})