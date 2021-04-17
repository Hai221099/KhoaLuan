module.exports = (sequelize, Sequelize) => {

    const Student_subject = sequelize.define('student_subject', {
      id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mark: Sequelize.DOUBLE
    },
    {
      timestamps: false
    });
  
    return Student_subject;
  }