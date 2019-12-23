const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000



// user body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
const db = require('./config/mongo.js').mongoURI
const User = require('./models/User')

mongoose.connect(db,
    { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// import routes
const user = require('./routes/user')

// Use routes
app.use('/api/user',user)

app.get('/user', (req, res) => {
    const newUser = new User({
        name: "admin",
        email: "admin@gmail.com",
        password: "admin",
        admin: true,
        note: "This is a admin account"
    })

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            if (err) throw err
            // Store hash in your password DB.
            newUser.password = hash
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        });
    });

})

app.get('/user/:pwd', (req, res) => {
    // query in path
    const password = req.params.pwd
    // query in param
    const name = req.query.name
    console.log(`pwd: ${password}, name: ${name}`)
    User.findOne({ name }).then(user => {
        if (!user) {
            res.status(404).json("User not found")
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                console.log("Right pwd")
            }
        })
    })

})


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))