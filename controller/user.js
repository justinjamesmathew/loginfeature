const User = require('./User');
exports.postSignup = async (req, res, next) => {
    //getting user data from request body
    const {id,name, passwrd, email} = req.body;
    try {
        const user = new User({id,name, email,passwrd});
        const result = await user.createUser();
        res.send(user);
    } catch (error) {
        next(error);
    }
};