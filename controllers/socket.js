const { io, setSocket } = require('../services/index').socket;
const debug = require('debug')('chatter:controller:socket');
const R = require('ramda');

class socketEvent {
    constructor(eventName, handler) {
        this.eventName = eventName;
        this.handler = handler;
    }
}

const SocketController = {
    ClientVisibleInfo: ['username'],
    /**
     * @function registerEvents
     * @description registers all the events and their handlers in one place
     */
    registerEvents: (socket) => [
        new socketEvent('setName', SocketController.setName.bind(socket)),
        new socketEvent('clientInfo', SocketController.clientInformationHandler.bind(socket))
    ].map(evt => {
        socket.on(evt.eventName, evt.handler);
    }),

    setName: function (data) {
        this.username = data.name;
        this.emit('acknowledged', { success: true });
    },

    clientInformationHandler: function (requiredKeys) {
        const keys = R.intersection(requiredKeys.data, SocketController.ClientVisibleInfo);
        keys.forEach((key) => {
            this.emit(key, {
                [`${key}`]: this[key]
            });
        })
    },

    getName: function (data) {
        console.log(data);
        // socket.username = data.name;
        this.emit('acknowledged', { success: true });
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