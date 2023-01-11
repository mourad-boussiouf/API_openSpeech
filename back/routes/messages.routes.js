const express = require("express")
const app = express()

const router = express.Router()

messageController = require('../controllers/messages.controller')

module.exports = router