var App = (function () {
    function logAndAlert(data) {
        console.log(data);
    }
    var username = window.sessionStorage.getItem('username');

    socket.emit('setName', {
        name: username
    });
    // socket.on('username', function (data) {
    //     console.log(data);
    //     alert(data);
    //     debugger;
    //     if (!data.username) {
    //         // redirect to homepage if user doesn't have a name
    //         // window.location.href = "/"
    //     }
    // });

    // socket.emit('clientInfo', {
    //     data: ['username']
    // })
    socket.on('room:message', function (data) {
        console.log(data);
        addMessageToRoom(createOtherMessageDiv(data));
    })
    function createPg(content, className) {
        var pg = document.createElement('p');
        pg.className = className;
        pg.innerText = content;
        return pg;
    }
    function addMessageToRoom(messageDiv) {
        var roomDiv = document.getElementById('room');
        roomDiv.appendChild(messageDiv);
        roomDiv.scrollTop = roomDiv.scrollHeight;
    }
    function createOwnMessageDiv(content) {
        var messageDiv = document.createElement("div");
        messageDiv.className = "message own";
        var contentPg = createPg(content.trim(), 'content');
        var namePg = createPg('~You', 'username');
        messageDiv.appendChild(contentPg);
        messageDiv.appendChild(namePg);
        return messageDiv;

    }

    function createOtherMessageDiv(data) {
        var messageDiv = document.createElement("div");
        messageDiv.className = "message other";
        var contentPg = createPg(data.content.trim(), 'content');
        var namePg = createPg(data.username, 'username');
        messageDiv.appendChild(contentPg);
        messageDiv.appendChild(namePg);
        return messageDiv;
    }
    function handleMessage(messageEl) {
        if (messageEl && messageEl.value) {
            var messageDiv = createOwnMessageDiv(messageEl.value);

            socket.emit('messageToRoom', {
                content: messageEl.value.trim()
            })
            addMessageToRoom(messageDiv);
            messageEl.value = '';
            messageEl.focus();
        }
        return false;
    }
    return {
        messageKeyPressHandler: function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                handleMessage(event.target); //Submit your form here
                event.preventDefault();
                return false;
            }
        },
        onMessage: function (evt) {
            evt.preventDefault();
            handleMessage(evt.target.message);
        }
    };
})();