const express = require('express')
const app = express()

/**Import Base de données */
const pool = require('../services/database')

const conversationsController = {

    manageConversations: async (req, res, next) => {
        try {

            const otherParticipantId = req.body.id_participant

            var verifExistUser = "SELECT * FROM users WHERE id = ?"

            var [ExecVerifExistUser] = await pool.query(verifExistUser, otherParticipantId)

            if (ExecVerifExistUser.length === 0)
                return res  
                    .status(400)
                    .json({message: "Utilisateur introuvable"})
                    .end()
            
            var getChatOtherParticipant = 'SELECT * FROM participants WHERE user_id = ?'

            var [ExecGetChatOtherParticipant] = await pool.query(getChatOtherParticipant, otherParticipantId)

            const authUserId = req.cookies.id

            var getChatAuthUser = 'SELECT * FROM participants WHERE user_id = ?'

            var [ExecGetChatAuthUser] = await pool.query(getChatAuthUser, authUserId)

            var isExist = false
            var idChat = 0

            ExecGetChatAuthUser.map((item) => {

                let verifyExistantChat = ExecGetChatOtherParticipant.some(participant => participant.conversations_id == item.conversations_id);

                if (verifyExistantChat){
                    isExist = true
                    idChat = item.id_chat
                } 
            })

            if (isExist === true)
                return res.json({message: "Conversation existante"})

            if (isExist === false)
                return res.json({message: "Aucune conv"})

                
        } catch (error) {
            console.log(error)
        }
    },


    getMyConversations: async (req, res, next) => {
        try {

            const id = req.cookies.id

            const sql = 
            `SELECT
			    conversations.id,
                auth_user.message_read_at < messages.created_at AS has_unread_messages,
                messages.id,
                messages.content,
                messages.created_at,
                messages.user_id = ${id} AS mine,
                other_users.id,
                other_users.pseudo,
                other_users.urlAvatar
            FROM conversations
            INNER JOIN messages ON conversations.last_message_id = messages.id
            INNER JOIN participants other_participants
                ON other_participants.conversations_id = conversations.id
                    AND other_participants.user_id != ${id}
            INNER JOIN users other_users ON other_participants.user_id = other_users.id
            INNER JOIN participants auth_user
                ON auth_user.conversations_id = conversations.id
                    AND auth_user.user_id = ${id}
            ORDER BY messages.created_at DESC`

            const [ExecQuery] = await pool.query(sql)

            return res.status(200)
                .json({data: ExecQuery})
                .end()
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = conversationsController