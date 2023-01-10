const express = require('express')
const app = express()

/**Import Base de données */
const pool = require('../services/database')

const chatController = {

    individualChat: async (req, res, next) => {
        try {

            const idChat = req.params.id

            const getChat = "SELECT c.id as chatId, c.nom as chatNom, m.message as message, m.created_at as messageDate, m.id_user as userId, u.pseudo from chats AS c INNER JOIN messages AS m ON c.id = m.id_chat INNER JOIN users AS u ON m.id_user = u.id WHERE c.id = ? "

            const [resGetChat] = await pool.query(getChat, idChat)

            return res
                .send({data: resGetChat})

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = chatController