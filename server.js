const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 3000 });
const imgUrl = "https://source.unsplash.com/random/200x200?sig=1"
// when connect to the client, send the img url and receive the message from server


wss.on("connection", function(ws) {
  function update(){
    const timestamp = (new Date()).getTime(),
          newUrl = `${imgUrl}?_=${timestamp}`;
    ws.send(newUrl);
    setTimeout(update,1000);
  }
  update();
  ws.on("message", function(message) {
    console.log(`Received: ${message}`);
  });
});