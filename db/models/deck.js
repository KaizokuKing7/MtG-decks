'use strict';
module.exports = (sequelize, DataTypes) => {
  var Deck = sequelize.define('Deck', {
    name: DataTypes.STRING,
    body: DataTypes.ARRAY(DataTypes.JSON)
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
  };
  return Deck;
};