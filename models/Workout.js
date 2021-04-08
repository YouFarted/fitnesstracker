const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
  },

  exercises: [{
      etype: String,
      name: String,
      distance: Number,
      duration: Number,
      weight: Number,
      sets: Number,
      reps: Number      
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {
    Workout: Workout,
    Schema: workoutSchema
}