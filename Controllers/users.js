const User = require('../Models/users');
const saveUser = (req, res, next) => {
    //check user already exists
    User.findOne({ email: req.body.email })
    .then(user=>{
        if (user) {
            res.status(400).json("User Already Exists"); 
        }
        else {
            //saving user to database
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                city: req.body.city,
            })
        user.save()
        .then(saved=>{
            if (saved) {
                res.status(200).json(saved);
            }
            else{
                res.status(400).json('Failed to save User');
            }
        }).catch(err=>{
        if(err) res.status(400).json(err.message);
    })}
    })
    .catch(err=>{
        if(err) res.status(400).json('Invaid Email');
    })   
}
const getAllUsers = async (req, res, next) => {
    const allUsers = await User.find({});
    if (allUsers) {
        res.status(200).json(allUsers);
    }
    else {
        res.status(404).json('No Users found');
    }
}
const getUser = async (req, res, next) => {
    const id = req.query.id;
    if (id) {
        const user = await User.findOne({ _id: id }, err => {
            if (err) res.status(400).json('User not found');
        });
        if (user) {
            res.status(200).json(user);
        }
    }
}
const deleteUser = async (req, res, next) => {
    const id = req.query.id;
    if (id) {
        const del = await User.deleteOne({ _id: id }, err => {
            if (err) res.status(400).json('Failed to delete User : Invalid User Id');
        });
        if (del) {
            if (del.deletedCount === 0)
                res.status(404).json(`User Doesn't Exists`);
            else res.status(200).json('User Deleted Succesfully');
        }
    }
    else {
        res.status(400).josn("Please provide ID as quary parameter")
    }
}
const updateUser = async (req, res, next) => {
    const city = req.body.city;
    const email = req.body.email;
    if (email && city) {
        const updated = await User.update({ email: email }, { $set: { city: city } }, err => {
            if (err) res.status(400).json(err)
        })
        if (updated) {
            if (updated.n === 0) {
                res.status(404).json('No User found to update')
            }
            else { res.status(200).json('User Updated Sussefully') }
        }
    }
    else {
        res.status(400).josn("Please provide valid request body with email and city")
    }

}
exports.userController = {
    getAllUsers: getAllUsers,
    saveUser: saveUser,
    getUser: getUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}

