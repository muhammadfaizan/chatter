var App = (function () {
    /*
    socket.on('acknowledged', function (data) {
        if (data && data.success) {
            // window.location.href = "/chat"
            // alert(socket.username);
        }
        socket.emit('clientInfo', {
            data: ['username']
        })
    });
    */
    socket.on('username', function (data) {
        debugger;
        console.log(data);
    });
    return {
        onNameFormSubmit: function (evt) {
            evt.preventDefault();
            if (evt.target.name && evt.target.name.value) {
                // socket.emit('setName', {
                //     name: evt.target.name.value
                // });
                window.sessionStorage.setItem('username', evt.target.name.value.trim());
            }
            return false;
        }
    };
})();