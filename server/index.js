const express = require('express');
const socketio = require ('socket.io');                         //Websockets are real-time! Fast!
const http = require('http');                                   //For websites are ok but slow!
const PORT = process.env.PORT || 5000;
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router)

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));