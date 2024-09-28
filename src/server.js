const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());
const categoryRoutes = require('./routes/category'); 
const productRoutes = require('./routes/products'); 
const ingredientsRoutes = require('./routes/ingredients'); 
const product_ingredientsRoutes = require('./routes/product_ingredients'); 

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/product_ingredients', product_ingredientsRoutes);


app.listen(PORT, () => {
    console.log(`Sunucu Çalıştı`);
});
