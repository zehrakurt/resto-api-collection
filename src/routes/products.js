const express = require('express');
const router = express.Router();
const Product = require('../modals/products'); 
router.get('/', async (req, res) => {
    try {
        const products = await Product.getAll(); 
        res.json(products);
    } catch (error) {
        res.status(400).json({ message: 'error' });
    }
});

module.exports = router;
