const readline = require('readline');
const http = require('http');
const fs = require('fs');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let port;
let html;
rl.question('Enter port for webserver: ', (answer) => {
  console.log(`Selected port: ${answer}`);

port=answer;
  rl.close();

fs.readFile('index.html', (err, data) => {
  if (err) throw err;
  html = data;
});
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.setHeader('Powered-by','NodeServer by MrCheat,Inc.');
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(html);  

});
server.listen(port);
console.log("Done! Listening on port "+port+"; Content-Type is text/html. Using index.html file for all of the requests.");





});
// set data


