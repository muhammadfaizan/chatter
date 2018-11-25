var App = (function () {
    function logAndAlert(data) {
        console.log(data);
    }

    socket.on('username', function (data) {
        console.log(data);
        if (!data.username) {
            // redirect to homepage if user doesn't have a name
            // window.location.href = "/"
        }
    });

    socket.emit('clientInfo', {
        data: ['username']
    })
    socket.on('username', function (data) {
        console.log(data);
    })
    return {
        onMessage: function (evt) {
            evt.preventDefault();

            if (evt.target.message && evt.target.message.value) {
                let messageDiv = document.createElement("div");
                messageDiv.className = "message own";
                messageDiv.innerText = evt.target.message.value;
                const roomDiv = document.getElementById('room');
                roomDiv.appendChild(messageDiv);
                roomDiv.scrollTop = roomDiv.scrollHeight;
                evt.target.message.value = '';
                evt.target.message.focus();
            }
            return false;
        }
    };
})();