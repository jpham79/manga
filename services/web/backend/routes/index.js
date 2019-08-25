const fs = require('fs');

module.exports = app => {
    console.log("Setting up routing.");
    let routes = __dirname + '/paths';

    fs.readdirSync(routes).forEach(path => {
        if (path.includes('.js')) {
            require(`${routes}/${path}`)(app);
        }
    });
}