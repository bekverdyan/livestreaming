let socket = new WebSocket("ws://javascript.ru/ws");

socket.onopen = function() {
    alert("Connection established.");
};

socket.onclose = function(event) {
    if (event.wasClean) {
        alert('Connection closed');
    } else {
        alert('Connection failure');
    }
    alert('Code: ' + event.code + ' reason: ' + event.reason);
};

socket.onmessage = function(event) {
    alert("Data received " + event.data);
};

socket.onerror = function(error) {
    alert("Error " + error.message);
};