const express = require('express');

const app = express()

app.use('/api', require('./routes/api'));
app.use('/a', require('./routes/a'))
app.use('/b', require('./routes/b'))

module.exports = app;