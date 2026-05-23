let stdout = 0;
let array = process.argv
for (let  i= 2; i < array.length; i++) {
    const num = Number(array[i]);
    stdout += num;
}

console.log(stdout)