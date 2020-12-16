require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./persistence');

const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

app.use(express.json());

app.get('/', getItems);
app.post('/', addItem);
app.put('/:id', updateItem);
app.delete('/:id', deleteItem);

const port = process.env.PORT || 80;
const host = process.env.HOST || '0.0.0.0';

db.init()
    .then(() => {
        app.listen(port, host);
        console.log(`Running on http://${host}:${port}`);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
