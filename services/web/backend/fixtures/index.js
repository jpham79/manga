const async = require('async');
const fs = require('fs');

module.exports.loadFixtures = callback => {
    let tasks = [];
    let path = __dirname + '/dev'

    let fixtures = fs.readdirSync(path);
    async.each(fixtures, fixture => {
        require(`${path}/${fixture}`)(callback);
    });

    console.log("Finished Loading Fixtures");

}