module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define("Stats", {
    date_stats: DataTypes.DATE,
    new_weight: DataTypes.FLOAT,
    new_body_fat: DataTypes.FLOAT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Stats;
};
