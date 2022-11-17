const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')


router.get('/', userController.getAllFollowing)
//router.get('/max-following', userController.getMaxFollowing)
router.get('/not-following',userController.getNotFollowing)



module.exports = router