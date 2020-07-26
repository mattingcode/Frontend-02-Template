const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk.toString())
  }).on('end', () => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Foo', 'bar');
    response.writeHead(200, { 'Content-Type': 'text/plain'  });
    response.end(
      `<html maaa=a>
      <div class="a2" text='1'>11</div>
      </html>`
    )
  });
}).listen(8080);
console.log('server satrted');
