require('dotenv').config();
require('./database/connection');

const express = require('express');
const cors = require('cors');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');

const authRoute = require('./routes/auth');
const dbRoute = require('./routes/db');
const socketMap = require('./utils/sockets.map');
const { homesComponentsById } = require('./handlers/dbQueries');

const app = express();
const PORT = process.env.PORT || 8000;


const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        credentials: true
    }
});


app.use(express.static(path.resolve('./client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', authRoute);
app.use('/db', dbRoute);


if (process.env.PRODUCTION) {
    app.get('*', (req, res) => {
        res.status(202).sendFile(path.resolve("./client/build", "index.html"));
    });
} else {
    app.use(
        cors({
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
            credentials: true,
        })
    );
}


io.on('connection', (socket) => {
    socket.on('HOME_ID', async ({ id }) => {
        socketMap.set(id, socket);

        const componentsData = await homesComponentsById(id)

        socket.emit("INIT", componentsData);
    });
});


server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
