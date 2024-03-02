const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
