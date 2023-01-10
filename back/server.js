var express = require('express');
var app = express();

var cors = require('cors')

const cookieParser = require('cookie-parser');



/* Listening port */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`L'appli marche sur le port ${PORT}`)
})

app.use(cookieParser())

app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const usersRouter = require('./routes/users.routes')

app.use('/user', usersRouter)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('Home');
});
