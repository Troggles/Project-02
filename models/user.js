module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_weight: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT
  });

  User.associate = (models) => {
    User.hasMany(models.Workout, {
      onDelete: "cascade"
    });
  };
  
  return User;
};
