const express = require('express');

const app = express();
app.use(express.json());

app.use('/a', require('./routes/a'));
app.use('/b', require('./routes/b'));
app.use('/api', require('./routes/api'));

module.exports = app;