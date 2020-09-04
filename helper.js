'use strict';
module.exports.sendResponse = (response, data, statusCode, headers) => {
    response.writeHead(statusCode, headers);
    response.end(data);
};

module.exports.collectData = (request, callback) => {
    var data = '';
    request.on('data', (chunk) => {
        data += chunk;
    });
    request.on('end', () => {
        callback(data);
    });
};
