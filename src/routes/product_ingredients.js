const express = require('express');
const router = express.Router();
const Productingredients = require('../modals/product_ingredients'); 

router.get('/', async (req, res) => {
    try {
        const product_ingredients= await Productingredients.getAll(); 
        res.json(product_ingredients);
    } catch (error) {
        res.status(400).json({ message: 'Hata: ' + error.message }); 
    }
});



router.get('/:id',async (req,res)=>{
    try{
const product_ingredients=await Productingredients.getById(req.params.id)
if(!product_ingredients){
    return res.status(404).json({message:"Kayıt Bulunamadı"})
} res.json(product_ingredients);
    }catch(error){
        res.status(400).json({message:'error'})
    }
});

router.patch('/:id',async (req,res)=>{
    try{
const updatedProduct_ingredients=await Productingredients.update(req.params.id,req.body)
res.json(updatedProduct_ingredients)
    }catch(error){
        res.status(400).json({message:'error'})
    }
});



router.delete('/:id', async(req,res)=>{
    try {
        const deletedProduct_ingredients=await Productingredients.delete(req.params.id)
        res.json(deletedProduct_ingredients)
    } catch (error) {
        res.status(400).json({message:'error'})
    }
})

module.exports = router;
