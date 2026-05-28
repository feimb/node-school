const http = require("node:http");

const [, , url, url2, url3] = process.argv

function getText(url, callback) {
    http.get(url, (response) => {

        let string = ""
        response.on("data", (chunk) => {
            string += chunk.toString();
        })
        response.on("end", () => {
            callback(string);
        })
    })
}
async function main() {
    getText(url, (text1) => {
        console.log(text1)
        getText(url2, (text2) => {
            console.log(text2)
            getText(url3, (text3) => {
                console.log(text3)
            })
        })
    })
}
main()
// getText(url2)
// getText(url3)
