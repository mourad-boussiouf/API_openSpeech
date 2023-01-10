const express = require("express");
const app = express();

const router = express.Router();

const userController = require("../controllers/users.controller")

const isAuth = require('../middlewares/isAuthMiddleware')

router.post('/register', userController.register);

router.post('/login', userController.login)

router.get("/:id", isAuth, userController.getAll)
//route recherche par mot clef
router.get('/search/:keyword', userController.searchUsersLikeKeyword);

router.get('/list', userController.getAll);

module.exports = router

// var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './upload/images')
//     },
//     filename: function (req, file, cb) {
//       cb(null, "img" + Date.now() + file.originalname)
//     }
// })
// var upload = multer({ storage: storage});
// upload.single('image'), 