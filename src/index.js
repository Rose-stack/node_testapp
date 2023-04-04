const server = require('./app')
const rookout = require('rookout')
rookout.start({ 
    token: '611da17334e54f86fadb1b93971e2f201fb8237d1bfe8106d49e181ab8a591f8',
    labels: {
        env: 'dev'
    }
}).then(/*Start your application here*/)

server.start()