const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write('hello from node.js')

  // write .end necessary!!!
  res.end(' stop!!!')
})

server.listen(3000, () => {
  console.log('server is Running...');
})