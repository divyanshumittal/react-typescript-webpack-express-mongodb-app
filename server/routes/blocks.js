const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('getting blocks from db');
    res.status(200).json([{ id: 1, name: 'block1'}, { id: 2, name: 'block2'}]);
});

module.exports = router;