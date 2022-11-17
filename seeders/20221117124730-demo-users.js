'use strict';
const {faker} = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */

const genders = ['male', 'female'];

module.exports = {
  async up (queryInterface, Sequelize) {

    const users = []
    for (let i = 1; i < 200; i++){
      let gender = genders[Math.floor(Math.random() * 2)];
      users.push({id:i, first_name: faker.name.findName(undefined, undefined, gender), gender})
    }

    await queryInterface.bulkInsert(
        'users',
        users,
        {});

    const following = []
    const usersToFollow = [2,3,4,5,6,7]
    let id = 1;
    for (let i = 1; i < 10; i++){
      for (let j = 0; j < usersToFollow.length; j++){
        id++
        following.push({id,
          userId:i, followingId: usersToFollow[j]})
      }

    }
    await queryInterface.bulkInsert(
        'user_followings',
        following,
        {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
