module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    current_weight: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT,
    b3_total: DataTypes.INTEGER
  });

  return User;
};
