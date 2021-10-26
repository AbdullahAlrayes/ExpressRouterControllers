// importt
const express = require('express');
const router = require('./api/product/routes');
const connectDB = require('./db/database');
// App
const app = express();
app.use(express.json());
app.use('/api/products', router);
connectDB();
const port = 8000;
app.listen(port, () => console.log(`Application is running on ${port}`));
