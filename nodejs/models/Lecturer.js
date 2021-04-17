module.exports = (sequelize, Sequelize) => {
  const Lecturer = sequelize.define(
    "lecturer",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      dateOfBirth: Sequelize.STRING,
      email: Sequelize.STRING,
      // facultyId: Sequelize.STRING,
      gender: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Lecturer;
};
