function connect() {
  var socket = new WebSocket(
    "wss://localhost:8443/api/v1/message/websocket/greeting"
  );
  ws = Stomp.over(socket);

  ws.connect(
    {},
    function (frame) {
      ws.subscribe("/topic/errors", function (message) {
        alert("Error " + message.body);
      });

      ws.subscribe("/topic/reply", function (message) {
        showGreeting(message.body);
      });
    },
    function (error) {
      alert("STOMP error " + error);
    }
  );
}

function disconnect() {
  if (ws != null) {
    ws.close();
  }
  setConnected(false);
  console.log("Disconnected");
}

function sendName() {
  ws.send($("#name").val());
}

function showGreeting(message) {
  $("#greetings").append(" " + message + "");
}
