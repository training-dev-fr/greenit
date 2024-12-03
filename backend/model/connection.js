const { Sequelize } = require("sequelize");
const db = new Sequelize('greenit', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
const connect = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    db.sync();
}

module.exports = {connect,db}
