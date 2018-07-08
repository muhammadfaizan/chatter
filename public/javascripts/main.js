var App = (function() {
    return {
        onNameFormSubmit: function(evt) {
            evt.preventDefault();
            socket.emit('setName', {
                name: evt.target.name.value
            });
            return false;
        }
    };
})();