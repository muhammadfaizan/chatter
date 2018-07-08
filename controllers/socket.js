const { io, setSocket } = require('../services/index').socket;
class socketEvent {
    constructor(eventName, handler) {
        this.eventName = eventName;
        this.handler = handler;
    }
}

const SocketController = {
    registerEvents: (socket) => [
        new socketEvent('setName', SocketController.setName.bind(socket))
    ].map(evt => {
        socket.on(evt.eventName, evt.handler);
    }),

    setName: (data) => {
        console.log(data);
        this.username = data.name;
    },
    
    sendSocketToService: (socketIO) => {
        const socketInstance = setSocket(socketIO);
        SocketController.handleConnectionEvent(socketInstance.io);
        return this;
    },

    handleConnectionEvent: (io) => {
        io.on('connection', (socket) => {
            SocketController.registerEvents(socket);
        });
        return this;
    }
}
module.exports = SocketController;