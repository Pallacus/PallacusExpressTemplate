const express = require('express');
const dayjs = require('dayjs');
const fs = require('node:fs/promises');

const app = express();
app.use(express.json());

// Generic middlewares:
app.use((req, res, next) => {
    console.log(dayjs().format(`dddd - DD MMMM YYYY HH:mm`));
    next();
});
app.use(async (req, res, next) => {
    const actualDate = dayjs().format('DDD-MM-YYY HH:mm:ss')
    const info = `[${actualDate}] Method: ${req.method}. Url: ${req.url}\n`;
    await fs.appendFile('./main.log', info);
    next();
});
app.use((req, res, next) => {
    const randomNum = Math.random();
    if (randomNum > 0.2) {
        return res.end('Bad luck')
    }
    next();
});

app.use('/a', require('./routes/a'));
app.use('/b', require('./routes/b'));
app.use('/api', require('./routes/api'));

module.exports = app;