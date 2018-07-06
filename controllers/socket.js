const { io, setSocket } = require('../services/index').socket;
module.exports = {
    registerEvents: () => {
        setName: (data) => {

        }
    },
    sendSocketToService: (socket) => {
        setSocket(socket);
    },

    handleConnectionEvent: () => {
        this.io.on('connection', function (socket) {
            socket.emit('news', 'hello world');
            socket.on('my other event', function (data) {
                console.log(data);
            });
        });
        return this;
    }
}