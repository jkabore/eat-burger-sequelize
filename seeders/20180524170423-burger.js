'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [
      {burger_name: "Big Mac", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Whooper", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Cheezburger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Baconator", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Crispy chicken burger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Cheddar Cheese burger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Double whooper", devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ],{});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
   return queryInterface.bulkDelete('Burgers', null, {truncate : true});
}}};
