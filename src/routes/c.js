const router = require('express').Router();

// Resposta de prova
router.get('/', (req, res) => {
    res.end(`Route C`);
});

module.exports = router;