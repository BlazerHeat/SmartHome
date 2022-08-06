require('dotenv').config();
require('./database/connection');

const express = require('express');
const cors = require('cors');
const path = require('path');
const { createServer } = require('http')
const { WebSocketServer } = require('ws');
const authRoute = require('./routes/auth');
const dbRoute = require('./routes/db');
const app = express();
const PORT = process.env.PORT || 8000;

const socketsMap = require('./utils/sockets.map');


app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    })
);

app.use('/', authRoute);
app.use('/db', dbRoute);

app.get('*', (req, res) => {
    res.status('202').sendFile(path.resolve(__dirname, "./client/build", "index.html"));
})


const server = createServer(app);
const ws = new WebSocketServer({ server: server, path: '/ws' });

ws.on('connection', socket => {
    socket.on('message', msg => {
        if (msg.toString().startsWith('HOME_ID:')) {
            const id = parseInt(msg.toString().slice(8));
            socket.ID = id;
            socketsMap.set(id, socket);
        }
    });

    socket.on('close', () => {
        if (socket.ID && socketsMap.has(socket.ID)) {
            socketsMap.delete(socket.ID);
        }
    });
})

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
