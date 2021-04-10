const router = require("express").Router();
const { json } = require("express");
const db = require("../models");

router.get("/api/workouts", async function (req, res) {
  const allWorkouts = await db.Workout.find({});

  const lastone = allWorkouts[allWorkouts.length - 1];
  res.json(allWorkouts);
});

router.post("/api/workouts", async function (req, res) {
  // no interesting fields are posted to create a new workout.

  const newWorkout = await db.Workout.create({});
  res.json(newWorkout);
});

router.put("/api/workouts/:id", async function (req, res) {
  try {
    const found = await db.Workout.findById(req.params.id);

    const verifiedBody = {
      etype: req.body.type,
      name: req.body.name,
      distance: req.body.distance,
      weight: req.body.weight,
      sets: req.body.sets,
      reps: req.body.reps,
      duration: req.body.duration,
    };

    const expectedResistenceFields = [
      "type",
      "name",
      "weight",
      "sets",
      "reps",
      "duration",
    ];
    const expectedCardioFields = ["type", "name", "distance", "duration"];

    const expectedFields =
      req.body.type === "cardio"
        ? expectedCardioFields
        : expectedResistenceFields;
    const bodyKeys = Object.keys(req.body);

    for (let i = 0; i < bodyKeys; ++i) {
      const bodyKey = bodyKeys[i];

      if (expectedFields.findIndex(bodyKey) == -1) {
        console.error(
          "unrecognised field posted to workout - exercise doesn't have a field of " +
            bodyKey
        );
      }
    }

    for (let i = 0; i < expectedFields.length; ++i) {
      const expectedField = expectedFields[i];

      if (bodyKeys.findIndex((key) => expectedField === key) == -1) {
        console.error("unsupplied field in the put body: " + expectedField);
      }
    }

    found.exercises.push(verifiedBody);

    await found.save();

    res.json(found);
  } catch (ex) {
    console.log("ex:", ex);
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
