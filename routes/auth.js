const express = require('express');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/connection');
const router = express.Router();
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

router.post('/signup', async (req, res) => {
    const { user } = req.body;

    try {
        const results = await db.query(`SELECT * FROM USERS WHERE email=$1`, [
            user.email,
        ]);
        const rowsCount = results.rows.length;
        if (rowsCount > 0) {
            return res.status(409).json({ error: 'User already Exists!' });
        }

        const hashPassword = await bycrypt.hash(user.password, saltRounds);
        user.password = hashPassword;

        await db.query(
            `INSERT INTO USERS (username, email, password) VALUES ($1, $2, $3)`,
            [user.username, user.email, user.password]
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }

    res.status(202).json({ message: 'User Created!' });
});

router.post('/login', async (req, res) => {
    const { user } = req.body;
    let token = null;
    try {
        const results = await db.query(`SELECT * FROM USERS WHERE email=$1`, [
            user.email,
        ]);

        if (results.rowCount <= 0) {
            return res.status(401).json({ error: 'Wrong Credentials!' });
        }
        const data = results.rows[0];

        const match = await bycrypt.compare(user.password, data.password);
        if (!match) {
            return res.status(401).json({ error: 'Wrong Credentials!' });
        }

        delete data.password;
        token = jwt.sign(data, process.env.JWT_SECRET);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }

    res.status(202).send({ token, message: 'Logged In!' });
});

router.post('/verify', async (req, res) => {
    const { token } = req.body;

    try {
        const userInfo = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(202).send({ userInfo });
    } catch (err) {
        return res.status(401).json({ error: 'Invaild Token!' });
    }
});

module.exports = router;
