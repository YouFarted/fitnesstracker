const router = require("express").Router();
const { json } = require("express");
const db = require("../models");

router.get("/api/workouts", async function (req, res) {
    const allWorkouts = await db.Workout.find({});

    const lastone = allWorkouts[allWorkouts.length-1];
    console.log("!!!!!!!!!!!!! cool:", lastone);
    res.json(allWorkouts);
    /*
    orm.getTodos(function (results) {
        res.json(results);
    }); */
    
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