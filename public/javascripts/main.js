var App = (function () {
    function logAndAlert(data) {
        console.log(data);
    }
    socket.on('acknowledged', function (data) {
        if (data && data.success) {
            window.location.href = "/chat"
        }
    });
    return {
        onNameFormSubmit: function (evt) {
            evt.preventDefault();
            if (evt.target.name && evt.target.name.value)
                socket.emit('setName', {
                    name: evt.target.name.value
                });
            return false;
        }
    };
})();