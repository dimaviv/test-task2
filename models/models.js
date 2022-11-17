const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    first_name : {type: DataTypes.STRING},
    gender : {type: DataTypes.STRING},


}, {timestamps:false})

const UserFollowing = sequelize.define('user_following',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    userId : {type: DataTypes.INTEGER},
    followingId : {type: DataTypes.INTEGER}


}, {timestamps:false})

// User.hasMany(User, {as:'following'});
// User.belongsTo(User, {as: 'followers'});
// //User.hasMany(User, {as:'following'})
User.belongsToMany(User, {as:'following', through:UserFollowing})



module.exports = {
    User,
    UserFollowing
}