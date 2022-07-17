require('dotenv').config();
require('./database/connection');
require('./utils/autoUpdateNgrokUrl');

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');
const dbRoute = require('./routes/db');
const app = express();
const PORT = process.env.PORT || 8000;

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

app.listen(PORT, () => {
    console.log(`Sevrer started on port: ${PORT}`);
});
