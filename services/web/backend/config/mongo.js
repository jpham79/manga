const Models = require('../models/Model');

const uriBuilder = config => {
    let uri = '';
    
    if (process.env.NODE_ENV === 'local') {
        uri = 'mongodb://localhost:27017/' + config.mongo.db;
    }
    else if (config.mongo.user.length > 0 && config.mongo.password > 0) {
        // username and password
        let userInfo = '';
        if (config.mongo.user) {
            userInfo += config.mongo.user;
            if (config.mongo.pass) userInfo += ':' + config.mongo.pass;
            userInfo += '@';
        }

        uri = 'mongodb://' + userInfo + config.host + '/' + config.db;
    }

    console.log('Mongodb URI: %s', uri);

    return uri;
}

module.exports = (config, callback) => {
    const uri = uriBuilder(config);
    const model = new Models(uri, {useNewUrlParser: true, promiseLibrary: global.Promise})
    model.connect(callback);
}