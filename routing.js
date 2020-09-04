'use strict';
const url = require('url');
const helper = require('./helper.js');

const baseActions = require('./default/default');
const routes = {
    '/': baseActions,
};

module.exports = (request, response) => {
    const parts = url.parse(request.url);
    const route = routes[parts.pathname];

    if (route) {
        route(request, response);
    } else {
        helper.sendResponse(response, "Not found", 404);
    }
}