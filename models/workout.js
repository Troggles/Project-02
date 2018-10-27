module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define("Workout", {
    date_logged: DataTypes.DATE,
    bench_sets: DataTypes.INTEGER,
    bench_reps: DataTypes.INTEGER,
    bench_max_weight: DataTypes.INTEGER,
    squat_sets: DataTypes.INTEGER,
    squat_reps: DataTypes.INTEGER,
    squat_max_weight: DataTypes.INTEGER,
    deadlift_sets: DataTypes.INTEGER,
    deadlift_reps: DataTypes.INTEGER,
    deadlift_max_weight: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    }
  });

  return Workout;
};
