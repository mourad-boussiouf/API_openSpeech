const express = require('express')
const app = express()

/**Import Base de données */
const pool = require('../services/database')

/**Import cryptage mot de passe */
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


/**
 * const usersController: Requêtes sql
 * Table: users
 * 
 */
const usersController = {

    searchUsersLikeKeyword: async (req, res, next) => {
        try {
            const keyword = req.params.keyword;
            const [rows, fields] = await pool.query(`SELECT * FROM users WHERE pseudo LIKE '%${keyword}%'`)
            res.json({
                data: rows
            })
            pool.end()
        } catch (error) {
            console.log(error)
            res.json({status: "Aucunes occurences trouvée en BDD avec le/les mot(s)-clef(s)."})
        }
    }, 
    

    getAll: async (req, res, next) => {
        try {
            const [rows, fields] = await pool.query('SELECT firstname, lastname from users')
            res.json({
                data: rows
            })
            pool.end()
        } catch (error) {
            console.log(error)
            res.json({status: "error"})
        }
    },

    register: async (req, res, next) => {

        try {
           
            const { mail, pseudo, password, firstname, lastname } = req.body

            if (!mail){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner une adresse e-mail."})
                    .end()
            } else if (!pseudo){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner un pseudo."})
                    .end()
            } else if (!password){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner un mot de passe."})
                    .end()
            } else if (!firstname){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner votre prénom."})
                    .end()
            } else if (!lastname){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner votre nom."})
                    .end()
            } else {

                if (password.length < 6){
                    return res
                        .status(400)
                        .json({message: "Le mot de passe doit contenir au moins 6 caractères."})
                        .end()
                } else if (pseudo.length < 5){
                    return res
                        .status(400)
                        .json({message: "Votre pseudo doit contenir au moins 5 caractères"})
                } else {

                    const verifEmailExist = "SELECT firstname from users where mail = ?"

                    const [findEmailExist] = await pool.query(verifEmailExist, [mail])

                    if (findEmailExist.length > 0)
                    
                        return res
                            .status(400)
                            .json({message: "L'adresse e-mail est déjà utilisée."})
                            .end()
                    
                    const verifPseudoExist = "SELECT firstname from users where pseudo = ?"

                    const [findVerifPseudo] = await pool.query(verifPseudoExist, [pseudo])

                    if (findVerifPseudo.length > 0)
                    
                        return res
                            .status(400)
                            .json({message: "Le pseudo est déjà utilisé."})
                            .end()
                    
                    const sqlRegister = "INSERT INTO users (mail, pseudo, password, firstname, lastname, id_role) values ( ?, ?, ?, ?, ?, ?)"

                    const hash = await bcrypt.genSalt()
                    const passwordHash = await bcrypt.hash(password, hash)

                    const [query] = await pool.query(sqlRegister, [mail, pseudo, passwordHash, firstname, lastname, "1"])

                    res.status(200)
                        .json({message: "Inscription effectué avec succés, bienvenue."})
                        .end()
                }
                
            }
            
        } catch (error) {
            console.log(error)
            res.json({status: "Register : erreur durant la connexion"})
        }
        
    },

    login: async (req, res, next) => {
        try {
            const {mail, password} = req.body

            if (!mail || !password){
                return res
                    .status(400)
                    .json({message: "Veuillez renseigner les champs requis."})
                    .end()
            }

            const verifAuthUser = "SELECT * from users where mail = ?"

            const [findUser] = await pool.query(verifAuthUser, [mail])

            if (findUser.length > 0){
                const correctPassword = await bcrypt.compare(
                    password,
                    findUser[0].password
                )

                if (!correctPassword){
                    return res
                        .status(401)
                        .json({message: "E-mail ou mot de passe incorrect"})
                } else {
                    const token = jwt.sign({
                        username: findUser[0].firstname,
                        userId: findUser[0].id
                    },
                    'SECRETKEY', {
                        expiresIn: '7d'
                    });

                    //send the token in an HTTP only cookie
                    res.cookie("token", token, {httpOnly: true});
                    res.cookie("id", findUser[0].id, {httpOnly: true});

                    res.status(200).send({message: "Connexion réussie", token: token, user: findUser[0]})
                }
            } else {
                return res.status(400).json({message: "Email ou mot de passe incorrect"})
            }

        } catch (error) {
            console.log(error)
        }
    }, 

    logout: async (req, res) => {
        
    }
}

module.exports = usersController