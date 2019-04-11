var express = require("express");

var router = express.Router();

var burger = require('../models/burger')


router.get
("/", (req, res) => {
    burger.all(function(data) {
        var hbsObject = {
            burger_name: data
        }
        console.log(hbsObject)

    })
})

module.exports = router;