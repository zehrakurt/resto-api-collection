const express = require('express');
const app = express();
const PORT = 4002;

app.use(express.json());
const categoryRoutes = require('./routes/category'); 
const productRoutes = require('./routes/products'); 
const ingredientsRoutes = require('./routes/ingredients'); 

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/ingredients', ingredientsRoutes);

app.listen(PORT, () => {
    console.log(`Sunucu Çalıştı`);
});
