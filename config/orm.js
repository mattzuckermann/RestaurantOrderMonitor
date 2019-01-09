//Connect to mysql connection
const connection = require("connection");

const orm = {
    selectAll: function () {
        connection.query();
    },
    insertONe: function () {
        connection.query();
    },
    updateOne: function () {
        connection.query();
    }
}

module.exports = orm;
