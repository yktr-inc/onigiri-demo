const indexHandler = require('../handlers/indexHandler');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: indexHandler.index,
        options: {
            auth: false,
        }
    },
    {
        method: "GET",
        path: "/api",
        auth: true,
        api: {
          type: 'application/vnd.api+json',
          code: 204,
        },
        handler: indexHandler.apiResponse,
        options: {
            auth: true,
        }
    },
    {
        method: "GET",
        path: "/index/:id/:lol",
        api: {
          type: 'application/json',
          code: 200,
        },
        handler: indexHandler.getUser,
        options: {},
    },
];
