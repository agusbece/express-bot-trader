module.exports = function (sequelize, Sequalize) {
  var Front = sequelize.define(
    'Front',
    {
      status: Sequalize.STRING,
      node: Sequalize.STRING,
      wallet: Sequalize.STRING,
      key: Sequalize.STRING,
      amount: Sequalize.STRING,
      percent: Sequalize.STRING,
      minbnb: Sequalize.STRING,
      maxbnb: Sequalize.STRING,
      tokenId: Sequalize.STRING,
    },
    {
      timestamps: false,
    }
  );
  Front.associate = function (models) {
    // A Front has many FrontDetails
    Front.hasMany(models.FrontDetail, {
      foreignKey: 'frontId',
      as: 'details'
    });
    // A Front belongs to a Token
    Front.belongsTo(models.Token, {
      foreignKey: 'tokenId',
      as: 'tokenInfo'
    });
  };
  return Front;
};
