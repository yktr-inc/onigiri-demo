const Client = require('../client/userClient');
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = {
    index() {

        const user = Client.getUser();

        return {
            view: 'index',
            params: {
                user: user
            }
        };

    },
    apiResponse() {

        const UserSerializer = new JSONAPISerializer('users', {
            attributes: ['firstName', 'lastName']
        });

        const data = [{ id: 1, firstName: 'Louis', lastName: 'Harang' }];

        var users = UserSerializer.serialize(data);

        return users;

    },
    getUser(params) {
        return params;
    }
};
