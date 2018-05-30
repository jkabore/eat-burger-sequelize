'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Burgers",{

id:{
allowNull:false,
autoIncrement:true,
primaryKey:true,
type:Sequelize.INTEGER
},
burgerName:{
  type:Sequelize.STRING
},
devouredAt:{
  type:Sequelize.BOOLEAN,
  defaultValue:false
},
createdAt:{
  allowNull:false,
  type:Sequelize.DATE,
  defaultValue:new Date()


}, 
updatedAt:{
  allowNull:false,
  type:Sequelize.DATE,
  defaultValue:new Date()

}

    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    
    */
   return queryInterface.dropTable('Burgers');
  }
};
