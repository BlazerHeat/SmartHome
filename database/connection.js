const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const clinet = new Client({
    connectionString: process.env.DATABASE_URI,
});

clinet.connect(async (err) => {
    if (err) {
        console.error('Error Connecting database\n' + err);
        process.exit(1);
    }
    console.log('Successfully connected to database!');
    const dbStatements = fs.readFileSync(path.join(__dirname, './db.sql'), {
        encoding: 'utf-8',
    });
    try {
        await clinet.query(dbStatements);
        console.log('Executed db.sql');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});

module.exports = clinet;
