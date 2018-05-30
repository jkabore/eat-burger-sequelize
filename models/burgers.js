var Sequelize = require("sequelize");
//connection to the  db
var connection= require("../config");

module.exports = function(connection) {

  var Burger = connection.define('Burgers', {
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false // This DB column may not be equal to null.
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Burgers;

};