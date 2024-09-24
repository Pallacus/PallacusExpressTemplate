const router = require('express').Router();

// Dumb response
router.get('/', (req, res) => {
    res.end(`Route C`);
});

module.exports = router;