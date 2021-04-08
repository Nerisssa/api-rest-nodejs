const app = require('./app');
const http = require('http');
const port = http.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log('Server is running...');