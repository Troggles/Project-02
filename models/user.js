module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_weight: DataTypes.FLOAT,
    body_fat: DataType.FLOAT
  });
  return User;
};
