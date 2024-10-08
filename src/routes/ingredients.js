const express = require('express');
const router = express.Router();
const İngredients = require('../modals/ingredients'); 

router.get('/', async (req, res) => {
    try {
        const ingredients = await İngredients.getAll(); 
        res.json(ingredients);
    } catch (error) {
        res.status(400).json({ message: 'Hata: ' + error.message }); 
    }
});



router.get('/:id',async (req,res)=>{
    try{
const ingredients=await İngredients.getById(req.params.id)
if(!ingredients){
    return res.status(404).json({message:"Kayıt Bulunamadı"})
} res.json(ingredients);
    }catch(error){
        res.status(400).json({message:'error'})
    }
});

router.patch('/:id',async (req,res)=>{
    try{
const updatedİngredients=await İngredients.update(req.params.id,req.body)
res.json(updatedİngredients)
    }catch(error){
        res.status(400).json({message:'error'})
    }
});



router.delete('/:id', async(req,res)=>{
    try {
        const deletedİngredients=await İngredients.delete(req.params.id)
        res.json(deletedİngredients)
    } catch (error) {
        res.status(400).json({message:'error'})
    }
})

module.exports = router;
