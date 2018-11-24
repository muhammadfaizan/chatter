var App = (function () {
    function logAndAlert(data) {
        console.log(data);
    }
    socket.on('acknowledged', logAndAlert);
    // socket.on('news', logAndAlert);
    return {
        onNameFormSubmit: function (evt) {
            evt.preventDefault();
            socket.emit('setName', {
                name: evt.target.name.value
            });
            return false;
        }
    };
})();