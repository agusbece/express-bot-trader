const { Token } = require('../models');

module.exports = {
  list(req, res) {
    console.log("List token")
    Token.findAll({})
      .then((tokens) =>
        res.status(201).json({
          error: false,
          data: tokens,
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          message: error,
        })
      );
  },

  add(req, res) {
    console.log("add token")
    const { name, symbol, address } = req.body;

    Token.create({
      name: name,
      symbol: symbol,
      address: address,
    })
    .then(() => 
      res.status(201).json({
        error: false,
        message: 'Token has been added'
      })
    )
    .catch((error) => 
      res.json({
        error: true,
        message: error
      })
    );
  },

  delete(req, res) {
    const { address } = req.body;

    console.log(req.body);

    Token.destroy({
      where: {
        address: address,
      },
    })
      .then((status) =>
        res.status(201).json({
          error: false,
          message: 'token has been deleted',
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },
};
