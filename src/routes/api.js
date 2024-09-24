const router = require('express').Router();

router.use('/c', require('./api/c'))
router.use('/d', require('./api/d'))

module.exports = router;