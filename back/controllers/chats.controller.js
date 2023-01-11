const express = require('express')
const app = express()

/**Import Base de données */
const pool = require('../services/database')

const chatController = {

    test: async (req, res, next) => {

        const getChat = await pool.query('SELECT * FROM chats')

        return res
            .status(200)
            .json({message: getChat})
            .end()
    }, 

    testing: async (req, res, next) => {

        const id_userTo = req.params.id

        var verifExistUser = 'SELECT * FROM users where id = ?'

        var [sqlVerifExistUser] = await pool.query(verifExistUser, id_userTo)

        if (sqlVerifExistUser.length <= 0)
            return res
                .status(400)
                .json({message: "Utilisateur inexistant"})
                .end()

        var getChatTo = 'SELECT * FROM users_chats WHERE id_user = ?'

        var [sqlGetChatTo] = await pool.query(getChatTo, id_userTo)


        const id_userFrom = req.cookies.id

        var getChatFrom = 'SELECT * FROM users_chats WHERE id_user = ?'

        var [sqlGetChatFrom] = await pool.query(getChatFrom, id_userFrom)

        sqlGetChatFrom.map((item, index) => {

            let test = sqlGetChatTo.some(chat => chat.id_chat == item.id_chat);

            if (test){

                console.log("Chat existant")

            } else {

                console.log("Création d'un chat")
                
            }
        })


        next()
    }
}

module.exports = chatController