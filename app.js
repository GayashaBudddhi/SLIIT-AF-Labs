//Q1
console.log('Hello World');

//Q2
const os = require('os');

console.log('Architecture' + os.arch());
console.log('CPUs' + os.cpus().length);
console.log('OS' + os.platform());

//Q3
const fs = require('fs');
const fileName = __dirname + '/test.txt';

//Asynchronous reading
fs.readFile(fileName, (err, data) => {
    if(err){
        console.log('Error');
    }
    console.log(data.toString());
});

//Synchronous reading
const data = fs.readFileSync(fileName);
console.log(data.toString());

//Q4
//Using Streams
const outfileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream('test.txt');
const writeStream = fs.createWriteStream('test-copy.txt');

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
})

// writing using write
writeStream.write("Node js is awesome");
writeStream.close();
writeStream.on("close", () => {
    console.log("File writing is completed");
});

// listening to data event and logs output
readStream.on("data", (data) => console.log(data.toString()));
readStream.close();
// listing to end event
readStream.on("end", () => console.log("File reading is completed"));

//Q5
const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello HTTP</h1>');
    res.end();
}).listen(3000);

http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text.html');

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000');
});
