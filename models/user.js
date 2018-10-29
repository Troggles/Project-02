module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user_id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    current_weight: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT,
    b3_total: DataTypes.INTEGER
  });

  return User;
};
