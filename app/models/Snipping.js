"use strict"
module.exports = function (sequelize, Sequalize) {
  var Snipping = sequelize.define(
    "Snipping",
    {
      status: Sequalize.STRING,
      node: Sequalize.STRING,
      wallet: Sequalize.STRING,
      key: Sequalize.STRING,
      tokenId: Sequalize.STRING,
      amount: Sequalize.STRING,
      slippage: Sequalize.STRING,
      gasprice: Sequalize.STRING,
      gaslimit: Sequalize.STRING,
    },
    {
      timestamps: false,
    }
  )
  Snipping.associate = function (models) {
    // A Snipping has many SnippingDetails
    Snipping.hasMany(models.SnippingDetail, {
      foreignKey: 'snippingId',
      as: 'details'
    });
    // A Snipping belongs to a Token
    Snipping.belongsTo(models.Token, {
      foreignKey: 'tokenId',
      as: 'tokenInfo'
    });
  }
  return Snipping
}
