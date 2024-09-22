require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT=3001;
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/products');
app.use('/categories' , categoryRoutes);
app.use('/products' , productRoutes);

app.listen(PORT, () => {
    console.log(`Sunucu Çalıştı`);
  });