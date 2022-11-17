
const {User} = require('../models/models')

class UserController{
    async getAllFollowing(req, res, next){

        let users = await User.findAll({include: {
            model:User,
                as:'following',
                required: true
        }})

        return res.json(users)
    }
    async getMaxFollowing(req, res, next){

    }
    async getNotFollowing(req, res, next){

    }

}

module.exports = new UserController()