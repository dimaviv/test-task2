const ApiError = require('../error/ApiError')
const {User} = require('../models/models')

class UserController{
    async getAllFollowing(req, res, next){
        let {order_by, order_type} = req.query

        let users = await User.findAndCountAll()

        return res.json(users)
    }
    async getMaxFollowing(req, res, next){

    }
    async getNotFollowing(req, res, next){

    }

}

module.exports = new UserController()