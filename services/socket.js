module.exports = {
    io: null,

    setSocket(socket) {
        this.io = socket;
        return this;
    },

    handleConnectionEvent() {
        this.io.on('connection', function (socket) {
            socket.emit('news', 'hello world');
            socket.on('my other event', function (data) {
                console.log(data);
            });
        });
        return this;
    }
    
}