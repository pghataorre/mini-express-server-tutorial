import http from 'http';
import bodyParser from 'body-parser';

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk
    });

    req.on('close', () => {
      if(req.headers['content-type'] === 'application/json') {
        console.log(JSON.parse(body));
      }

      console.log( 'request body ===-===== ', req);

    });

    res.writeHead(201);

    res.end('Post Request ok');

  } else {

    console.log('a get has happened ------- ');

    res.writeHead(200);
    res.end('get end')

  }
});

server.listen(port, host, () => {
  console.log(`----------------------------------------------------- `);
  console.log(`----------- Server started ${host}:${port} ----------- `);
  console.log(`----------------------------------------------------- `);
})
