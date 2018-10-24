const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/" , function(req,res) {
    res.redirect("/dashboard");

});

router.post("/dashboard/create", function(req, res) {
    db.myWorkouts_DB.create({
    workouts: req.body.workouts    
    })

    .then(function(myWorkouts_DB){
        console.log(myWorkouts_DB);
        res.redirect("/");
    });
});

//do we want an update function?
// router.put("/dashboard/update", function(req, res) {
//     if(req.body.workouts) {

//     }

// })


