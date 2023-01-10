const express = require('express')
const app = express()

const pool = require('../services/database')

const usersController = {
    getAll: async (req, res) => {
        try {
            
             const rows = await pool.query('SELECT firstname, lastname from users')
             res.json({
                 data: rows
             })
        } catch (error) {
            console.log(error)
            res.json({status: "error"})
        }
    }




}




module.exports = usersController