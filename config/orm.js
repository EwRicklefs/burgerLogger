var connection = require('../config/connection')




var orm = {
    //select * from query
    selectAll: function(cb) {
        var queryString = "select * from burgers;"
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result)
        })
    },
    //inserts one value
    insertOne: function(insertVal, cb) {
        var queryString = "insert into burgers (burger_name) values ;";
        queryString += insertVal;
        queryString +=";"
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;           
            }
            cb(result)
        })
    },

    updateOne: function(updateValId, cb) {
        //update one value here, flip devoured flag
        var queryString = "update burger set devoured = true where id = ";
        queryString += updateValId;
        queryString += ";"
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;