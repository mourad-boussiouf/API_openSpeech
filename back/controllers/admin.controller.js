const express = require('express')
const app = express()

/**Import Base de données */
const pool = require('../services/database')

const adminController = {

    deleteMessage: async (req, res, next) => {

        try {

            const id_message = req.params.id

            const sql = "DELETE FROM messages WHERE id = ?"

            const [deleteMessage] = await pool.query(sql, id_message)

            return res
                .status(200)
                .json({message: "Message supprimé avec succés"})
                .end()

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = adminController