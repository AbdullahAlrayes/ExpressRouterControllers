const Product = require('../../db/models/Product');

exports.getProducts = async (req, res) => {
  const list = await Product.find();
  return res.json(list);
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.statusCode = 201;
    return res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res.json().end();
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = Product.findById(id);
    if (product) {
      const updatedRecord = await Product.findOneAndUpdate(
        { id: id },
        req.body
      );
      res.statusCode = 200;
      return res.json(updatedRecord);
    }
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res.json().end();
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      await product.remove();
      res.statusCode = 200;
      return res.json().end();
    }
    res.statusCode = 404;
    return res.json({ message: 'No Item Found' });
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return res.json().end();
  }
};
