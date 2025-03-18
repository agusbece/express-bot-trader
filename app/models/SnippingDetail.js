module.exports = function (sequelize, Sequalize) {
  var SnippingDetail = sequelize.define(
    "SnippingDetail",
    {
      timestamp: Sequalize.STRING,
      token: Sequalize.STRING,
      action: Sequalize.STRING,
      price: Sequalize.STRING,
      transaction: Sequalize.STRING,
      other: Sequalize.STRING,
    },
    {
      timestamps: false,
    }
  )
  SnippingDetail.associate = function (models) {
    // A SnippingDetail belongs to a Snipping
    SnippingDetail.belongsTo(models.Snipping, {
      foreignKey: 'snippingId',
      as: 'snipping'
    });
  }
  return SnippingDetail
}
