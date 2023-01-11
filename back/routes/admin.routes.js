const express = require("express")
const app = express()

const router = express.Router()

const adminController = require('../controllers/admin.controller')

const isAuthAdmin = require('../middlewares/isAuthAdminMiddleware')

router.delete('/message/:id', isAuthAdmin, adminController.deleteMessage)

router.patch("/user/:id", isAuthAdmin, adminController.updateUser)

module.exports = router