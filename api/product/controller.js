const products = require('../../products');

exports.getProducts = (req, res) => {
  return res.json(data);
};

exports.createProduct = (req, res) => {
  const body = req.body;
  res.statusCode = 201;
  return res.json(body);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.productId;
  const isExist = data.find((item) => item.id === id);
  if (isExist) {
    res.statusCode = 204;
    const updatedData = data.filter(
      (item) => item.id !== +req.params.productId
    );
    res.json(updatedData);
  } else {
    res.statusCode = 404;
    res.json({
      message: 'item not exisit',
    });
  }
};
