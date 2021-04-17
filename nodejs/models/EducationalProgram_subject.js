module.exports = (sequelize, Sequelize) => {
  const EducationalProgram_subject = sequelize.define(
    "educationalProgram_subject",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      educationalProgramId: Sequelize.INTEGER,
      subjectId: Sequelize.INTEGER,
      obligation: Sequelize.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );

  return EducationalProgram_subject;
};
