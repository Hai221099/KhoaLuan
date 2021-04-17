module.exports = (sequelize, Sequelize) => {
  const EducationalProgram = sequelize.define(
    "educational_program",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      // code: Sequelize.STRING,
      type: Sequelize.STRING,
      version: Sequelize.STRING,
      duration: Sequelize.INTEGER,
      reference: Sequelize.STRING,

      generalKnowledgeDuration: Sequelize.INTEGER,
      fieldedKnowledgeDuration: Sequelize.INTEGER,
      industryBlockKnowledgeDuraion: Sequelize.INTEGER,
      compulsoryIndustryBlockKnowledgeDuraion: Sequelize.INTEGER,
      electiveIndustryBlockKnowledgeDuraion: Sequelize.INTEGER,
      electiveIndustryBlockKnowledgeTotalDuraion: Sequelize.INTEGER,
      industryGroupKnowledgeDuration: Sequelize.INTEGER,
      compulsoryIndustryGroupKnowledgeDuration: Sequelize.INTEGER,
      electiveIndustryGroupKnowledgeDuration: Sequelize.INTEGER,
      electiveIndustryGroupKnowledgeTotalDuration: Sequelize.INTEGER,
      industryKnowledgeDuration: Sequelize.INTEGER,
      compulsoryIndustryKnowledgeDuration: Sequelize.INTEGER,
      electiveIndustryKnowledgeDuration: Sequelize.INTEGER,
      electiveIndustryKnowledgeTotalDuration: Sequelize.INTEGER,
      extraCompulsoryIndustryKnowledgeDuration: Sequelize.INTEGER,
      extraElectiveIndustryKnowledgeDuration: Sequelize.INTEGER,
      extraElectiveIndustryKnowledgeTotalDuration: Sequelize.INTEGER,
      graduationalThesisDuration: Sequelize.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return EducationalProgram;
};
