const router = require('express').Router();

router.post('/', (req, res) => {
    // console.log(req.body);
    res.end(`Create a new item: ${req.body.name}`);
});

router.get('/', (req, res) => {
    console.log(req.query);

    res.end(`Retrieve data: ${req.query.page}, ${req.query.limit}`);
});

router.put('/', (req, res) => {
    res.end('Replace an item');
});

router.patch('/', (req, res) => {
    res.end("Partial update of an item");
});

// DELETE /a/IDitem
router.delete('/:itemId', (req, res) => {

    // console.log(req.params);
    // res.end(`Delete the item ${req.params.itemId}`);

    const { itemId: id } = req.params;
    res.end(`Delete the item ${id}`);
});

module.exports = router;