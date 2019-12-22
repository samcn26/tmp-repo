const User = require('../models/User')
/**
 * Logs user into the system
 * @param   {json} body Login form with name and password 
 * @return  {json} Return Jwt token
 */
exports.loginUser = (body) => {
    const name = body.name
    const password = body.password

}

/**
 * Find all users
 * @return {json} Return user list
 */
exports.getUserList = () => {

}

/**
 * Register user
 * @param  {json}  body User information
 */
exports.registerUser = (body) => {

}

/**
 * Update user
 * @param  {String}  userID 
 * @param  {String}  type       pwd/info/all  -> password only/ email,name/no limits
 */
exports.updateUser = (userID, type) => {

}

/**
 * Delete user
 * @param  {String}  userID
 */
exports.deleteUser = (userID) => {

}

/**
 * Delete users in bulk
 * @param  {Array}  userIDs
 */
exports.batchDeleteUser = (uesrIDs) => {

}