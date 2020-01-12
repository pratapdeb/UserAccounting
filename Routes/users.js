const express = require('express');
const router = express.Router();
const { userController } = require('../Controllers/users');
//save a user
router.post('/saveUser', userController.saveUser);
//get All the users
router.get('/getAllUsers', userController.getAllUsers)
//get user by Email
router.get('/getUser', userController.getUser)
//update usee details
router.put('/updateUser', userController.updateUser)
//delete user
router.delete('/deleteUser', userController.deleteUser)
//404 handling
router.use('/',(req,res)=>{
    res.status(404).send('<html><body>Invalid API endpoint read docs</body></html>')
})
module.exports = router;