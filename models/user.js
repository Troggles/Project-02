module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_weight: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT
  });

  User.associate = models => {
    User.hasMany(models.Workout, {
      foreignKey: "userId",
      onDelete: "cascade"
    });

    User.hasMany(models.Stats, {
      foreignKey: "userId",
      onDelete: "cascade"
    });
  };

  return User;
};
