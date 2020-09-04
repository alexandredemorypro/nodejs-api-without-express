'use strict';
const http = require('http');
const url = require('url');
const helper = require('./helper.js');
const port = process.env.PORT || 2990;

const baseActions = require('./default/default');
const routes = {
    '/': baseActions,
};

const server = http.createServer((request, response) => {
    const parts = url.parse(request.url);
    const route = routes[parts.pathname];

    if (route) {
        route(request, response);
    } else {
        helper.sendResponse(response, "Not found", 404);
    }
});
server.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
