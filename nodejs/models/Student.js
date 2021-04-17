module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "student",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: Sequelize.STRING,
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      gender: Sequelize.STRING,
      dateOfBirth: Sequelize.STRING,

      // alo: Sequelize.STRING,
      // faculty_id: Sequelize.STRING,
      // class_course: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Student;
};
