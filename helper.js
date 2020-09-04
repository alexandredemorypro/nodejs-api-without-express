'use strict';
module.exports.sendResponse = (response, data, statusCode, headers) => {
    response.writeHead(statusCode, headers);
    response.end(data);
};

module.exports.collectData = (request, callback) => {
    let data = '';
    request.on('data', (chunk) => {
        data += chunk;
    });
    request.on('end', () => {
        callback(data);
    });
};

module.exports.runAction = (request, response, action) => {
    if (action) {
        action(request, response);
    } else {
        helper.sendResponse(response, "Not Found", 404);
    }
};