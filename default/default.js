'use strict';
const helper = require('../helper.js');

const actions = {
    'GET': (request, response) => {
        helper.sendResponse(response, 'Hello World', 200, { 'Content-Type': 'text/plain' });
    },
    'POST': (request, response) => {
        helper.collectData(request, (formattedData) => {
            // todo: store formattedData
            console.log('todo: store formattedData');
            helper.sendResponse(response, 'Success', 200, { 'Content-Type': 'text/plain' });
        });
    }
};

module.exports = (request, response) => {
    const action = actions[request.method];

    if (action) {
        action(request, response);
    } else {
        helper.sendResponse(response, "Not Found", 404);
    }
};
