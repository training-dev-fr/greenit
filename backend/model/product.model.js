const { db } = require("./connection.js");
const {DataTypes} = require("sequelize");

const Product = db.define(
    'Product',
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(255),
        },
        price: {
            type: DataTypes.DECIMAL(7,2),
        },
        picture: {
            type: DataTypes.STRING(2000),
        },
        avgRating: {
            type: DataTypes.DECIMAL(2,1),
        },
        countRating: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "product"
    }
);

module.exports = {Product};