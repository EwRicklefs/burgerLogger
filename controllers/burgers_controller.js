var express = require("express");

var router = express.Router();

var burger = require('../models/burger')


router.get
("/", (req, res) => {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject), 
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", (req, res) => {
    burger.insert(req.body.name, 
        (result) => {
            res.json({ id: result.id})
        })
    }
)

router.put("/api/burgers/:id", (req, res) => {
    burger.update(req.params.id, (result) => {
        if(result.changedRows===0) {
            return res.status(404).end()
        } else {
            res.status(200).end();        
        }
    })
})

module.exports = router;