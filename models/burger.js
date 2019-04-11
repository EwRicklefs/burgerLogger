var orm = require('../config/orm')

var burger = {
    all: function(cb) {
        orm.selectAll((res) => {
            cb(res)
        })
    },
    insert: function(cb) {
        orm.insertOne(insertVal, res => {
            cb(res)
        })
    },
    update: function(cb) {
        orm.updateOne(updateVal, res => {
            cb(res)
        })  
    }
}

module.export = burger;