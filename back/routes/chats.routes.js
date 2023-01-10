const express = require("express")
const app = express()

const router = express.Router()

const chatController = require("../controllers/chats.controller")

router.get("/:id", chatController.individualChat)

module.exports = router