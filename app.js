// import
const express = require('express');
const router = require('./api/product/routes');
// App
const app = express();
app.use(express.json());
app.use('/api/products', router);
const port = 8000;
app.listen(port, () => console.log(`Applicatio is running on ${port}`));
