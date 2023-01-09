const express = require("express")
const app = express()

const router = express.Router()

const userController = require("../controllers/users.controller")

/**
 * Inscription utilisateur
 */
router.post('/inscription', userController.register)


router.get('/list', userController.getAll)

module.exports = router