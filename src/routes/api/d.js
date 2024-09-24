const router = require('express').Router();

// Resposta de prova
router.get('/', (req, res) => {
    res.end(`Route D`);
});

module.exports = router;