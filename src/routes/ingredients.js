const express = require('express');
const router = express.Router();
const Ingredients = require('../modals/ingredients'); 

router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredients.getAll(); 
        res.json(ingredients);
    } catch (error) {
        res.status(400).json({ message: 'Hata: ' + error.message }); 
    }
});

module.exports = router;
