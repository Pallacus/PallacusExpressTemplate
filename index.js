const http = require('node:http');

const app = require('./src/app');

require('dotenv').config();

const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port);

server.on('listening', () => {
    console.log(`Server listening on port ${port}`);
});