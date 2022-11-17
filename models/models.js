const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    first_name : {type: DataTypes.STRING},
    gender : {type: DataTypes.STRING}

})

User.hasMany(User, {as:'following'})
User.belongsTo(User)



module.exports = {
    User
}