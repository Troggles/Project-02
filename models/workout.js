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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Workout.associate = models => {
    Workout.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Workout;
};
