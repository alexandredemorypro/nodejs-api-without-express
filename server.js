'use strict';
const http = require('http');
const routing = require('./routing');
const port = process.env.PORT || 2990;

const server = http.createServer(routing);
server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});