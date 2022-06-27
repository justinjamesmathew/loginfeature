const db = require('./query');
//User constructor
function User ({
  id,
  name, 
  email, 
  passwrd
 
}) {this.id = id;
    this.name = name;
    this.email = email;
    this.passwrd = passwrd;
    
};
// add a createUser method to the prototype
User.prototype.createUser = async function() {
    try {
        const { rows } = await db.query(
            `INSERT INTO users(id,name, email, passwrd) 
            VALUES ($1, $2, $3, $4)`,
            [this.id,this.name, this.email, this.passwrd]
        );
        return rows; 
    } catch (error) {
        throw error;
    }
};
module.exports = User;
