var orm = require('../config/orm')

var burger = {
    all: function(cb) {
        orm.selectAll((res) => {
            cb(res)
        })
    },
    insert: function(insertVal, cb) {
        orm.insertOne(insertVal, res => {
            cb(res)
        })
    },
    update: function(updateVal, cb) {
        orm.updateOne(updateVal, res => {
            cb(res)
        })  
    }
}

module.exports = burger;