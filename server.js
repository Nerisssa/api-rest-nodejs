const app = require('./app');
const http = require('http');
const port = http.PORT || 3003;
const server = http.createServer(app);

server.listen(port);
console.log('Server is running...');