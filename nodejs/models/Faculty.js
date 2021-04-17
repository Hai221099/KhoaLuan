module.exports = (sequelize, Sequelize) => {
  const Faculty = sequelize.define(
    "faculty",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: Sequelize.STRING,
      code: Sequelize.STRING,
      name: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Faculty;
};
