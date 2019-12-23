const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// service
const UserService = require('../services/UserService')

/**
 * Login
 * @route POST api/user/login
 */
router.post('/login', (req, res) => {
    const name = req.body.name
    const password = req.body.password
    User.findOne({ 'name': name }).then(user => {
        if (!user) {
            res.status(404).json('User not found')
        }
        
        // User existed, match password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const loginInfo = {
                    id: user.id,
                    name: user.name,
                    admin: user.admin,
                    email: user.email
                }
                res.status(200).json(loginInfo)
            } else {
                res.status(404).json('Invalid password')
            }
        })
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/test', (req, res) => {
    const tmp = UserService.test()
    console.log(tmp)
})

module.exports = router