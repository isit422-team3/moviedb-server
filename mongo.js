const mongoose = require('mongoose');
const env = require('./env/environment');

const mongoUri = `mongodb://${env.dbUser}:${env.password}@ds0${env.key}.mlab.com:${env.key}/${env.name}`;

mongoose.Promise = global.Promise;

function connect() {
    return mongoose.connect(mongoUri, { useNewUrlParser: true });
}

module.exports = {
    connect
};