var App = (function() {
    return {
        onNameFormSubmit: function(event) {
            event.preventDefault();
            debugger;
            socket.emit('sName', {
                name: ''
            })
        }
    };
})();