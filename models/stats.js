module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define("Stats", {
    new_weight: DataTypes.FLOAT,
    new_body_fat: DataTypes.FLOAT,
    new_b3_total: DataTypes.INTEGER
  });

  Stats.associate = models => {
    Stats.belongsTo(models.User);
  };

  return Stats;
};
