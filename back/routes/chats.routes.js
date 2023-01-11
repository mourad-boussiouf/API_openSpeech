const express = require("express")
const app = express()

const router = express.Router()

const chatController = require("../controllers/chats.controller")

router.post('/user/:id', chatController.testing ,chatController.test)

module.exports = router