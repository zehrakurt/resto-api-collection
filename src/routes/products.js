const express = require('express');
const router = express.Router();
const Product = require('../modals/products');

router.get('/', async (req, res) => {
    try {
        const products = await Product.getAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error); 
        res.status(400).json({ message: 'error' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct); 
    } catch (error) {
        console.error(error); 
        res.status(400).json({ message: 'error' });
    }
});



router.get('/:id', async (req, res) => {
    console.log('Request params ID:', req.params.id); 
    try {
        const product = await Product.getById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Kayıt Bulunamadı' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(400).json({ message: 'Hata oluştu' });
    }
});



router.patch('/:id',async (req,res)=>{
    try{
const updatedProducts=await Product.update(req.params.id,req.body)
res.json(updatedProducts)
    }catch(error){
        res.status(400).json({message:'error'})
    }
});



router.delete('/:id', async(req,res)=>{
    try {
        const deletedProducts=await Product.delete(req.params.id)
        res.json( deletedProducts)
    } catch (error) {
        res.status(400).json({message:'error'})
    }
})

module.exports = router;






