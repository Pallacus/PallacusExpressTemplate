const router = require('express').Router();

// Dumb response
router.get('/', (req, res) => {
    res.end(`Route D`);
});

module.exports = router;