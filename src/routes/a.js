const router = require('express').Router();

router.post('/', (req, res) => {
    res.end(`Create a new item`);
});

router.get('/', (req, res) => {
    res.end("Retrieve all data");
});

router.put('/', (req, res) => {
    res.end('Replace an item');
});

router.patch('/', (req, res) => {
    res.end("Partial update of an item");
});

router.delete('/', (req, res) => {
    res.end("Delete an item");
});

module.exports = router;