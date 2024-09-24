const express = require('express');

const app = express()

app.use('/a', require('./routes/a.js'))
app.use('/b', require('./routes/b'))
app.use('/c', require('./routes/c'))
app.use('/d', require('./routes/d'))

module.exports = app;