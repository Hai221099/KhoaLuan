const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});
let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// declaring tables
db.educationalProgramSubjectTable = require("../models/EducationalProgram_subject")(
  sequelize,
  Sequelize
);
db.educationalProgramTable = require("../models/EducationalProgram")(
  sequelize,
  Sequelize
);
db.userTable = require("../models/User")(sequelize, Sequelize);
db.lecturerTable = require("../models/Lecturer")(sequelize, Sequelize);
db.studentTable = require("../models/Student")(sequelize, Sequelize);
// db.student_subject = require('../models/Student_subject')(sequelize, Sequelize);
db.subjectTable = require("../models/Subject")(sequelize, Sequelize);
db.classTable = require("../models/Class")(sequelize, Sequelize);
db.falcutyTable = require("../models/Faculty")(sequelize, Sequelize);
// linking tables

db.educationalProgramTable.hasMany(db.studentTable);
db.studentTable.belongsTo(db.educationalProgramTable);

db.falcutyTable.hasMany(db.classTable);
db.classTable.belongsTo(db.falcutyTable);

db.classTable.hasMany(db.studentTable);
db.studentTable.belongsTo(db.classTable);

db.classTable.hasOne(db.lecturerTable);
db.lecturerTable.belongsTo(db.classTable);

db.subjectTable.hasMany(db.educationalProgramSubjectTable);
db.educationalProgramSubjectTable.belongsTo(db.subjectTable);

db.educationalProgramTable.hasMany(db.educationalProgramSubjectTable);
db.educationalProgramSubjectTable.belongsTo(db.educationalProgramTable);

// db.subjectTable.belongsToMany(db.educationalProgramTable, {
//   through: db.educationalProgramSubjectTable,
//   foreignKey: "subjectId",
// });
// db.educationalProgramTable.belongsToMany(db.subjectTable, {
//   through: db.educationalProgramSubjectTable,
//   foreignKey: "educationalProgramId",
// });

// db.educationalProgramSubjectTable.belongsTo(db.subjectTable);
// db.subjectTable.hasMany(db.educationalProgramSubjectTable);

module.exports = db;
