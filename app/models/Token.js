module.exports = function (sequelize, Sequalize) {
    var Token = sequelize.define(
      "Token",
      {
        name: {
          type: Sequalize.STRING,
          unique: true
        },
        symbol: {
          type: Sequalize.STRING,
          unique: true
        },
        address: {
          type: Sequalize.STRING,
          unique: true
        },
        actions: Sequalize.STRING,
      },
      {
        timestamps: false,
      }
    )
    Token.associate = function (models) {
    //   // A Token can have many Fronts
    //   Token.hasMany(models.Front, {
    //     foreignKey: 'tokenId',
    //     as: 'fronts'
    //   });
      
    //   // A Token can have many Snippings
    //   Token.hasMany(models.Snipping, {
    //     foreignKey: 'tokenId',
    //     as: 'snippings'
    //   });
    }
    return Token
  }
  