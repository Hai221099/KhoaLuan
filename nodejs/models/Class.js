module.exports = (sequelize, Sequelize) => {
  const ClassCourse = sequelize.define(
    "class",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return ClassCourse;
};
