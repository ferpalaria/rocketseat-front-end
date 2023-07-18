const { Router } = require('express')
const UserController = require('../controller/UserController')

const userController = new UserController()
const userRoutes = Router()

userRoutes.post("/", userController.create)
userRoutes.get("/:user_id", userController.show)
userRoutes.put("/:user_id", userController.update)
userRoutes.delete("/:user_id", userController.delete)

module.exports = userRoutes