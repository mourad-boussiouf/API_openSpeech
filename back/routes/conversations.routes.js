const express = require("express")
const app = express()

const router = express.Router()

const conversationsController = require("../controllers/conversations.controller")

const messageController = require("../controllers/messages.controller")

router.post('/manage', conversationsController.manageConversations)
router.get('/mine', conversationsController.getMyConversations)

router.get('/:id', conversationsController.getIndividualConversation)




module.exports = router