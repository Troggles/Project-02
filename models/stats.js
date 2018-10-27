module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define("Stats", {
    date_stats: DataTypes.DATEONLY,
    new_weight: DataTypes.FLOAT,
    new_body_fat: DataTypes.FLOAT,
    new_b3_total: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Stats.associate = models => {
    Stats.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Stats;
};
