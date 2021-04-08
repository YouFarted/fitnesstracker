const router = require("express").Router();
const { json } = require("express");
const db = require("../models");

router.get("/api/workouts", async function (req, res) {
    const allWorkouts = await db.Workout.find({});

    const lastone = allWorkouts[allWorkouts.length-1];
    res.json(allWorkouts);    
});

router.post("/api/workouts", async function (req, res) {
    

    console.log("got a POST to /api/workouts.");
    console.log("req.body:", req.body);
    res.json({sure: "gotit"});

})

router.put("/api/workouts/:id", async function (req, res) {
    try{
    console.log(`PUT is done to ${req.params.id}`);
    console.log("PUT body is ",req.body);
    console.log("typeof PUT body is ",typeof(req.body));

    const found = await db.Workout.findById(req.params.id)

    console.log("found: ", found);

     const verifiedBody = {
         etype: req.body.type,
         name: req.body.name,
         distance: req.body.distance,
         weight: req.body.weight,
         set: req.body.sets,
         reps: req.body.reps
     }

    found.exercises.push(verifiedBody);
    
    await found.save();

    console.log("saved: ", found);
    
    
    await found.save();
    res.json(found);
    
    } catch (ex) {
        console.log("ex:", ex)
    }
});


router.post("/api/todos", function (req, res) {
    orm.addTodo(req.body, function (results) {
        res.json(results);
    });
});

router.delete("/api/todos/:id", function (req, res) {
    orm.deleteTodo(req.params.id, function (results) {
        res.json(results);
    });
});

router.put("/api/todos", function (req, res) {
    orm.editTodo(req.body, function (results) {
        res.json(results);
    });
});

module.exports = router;