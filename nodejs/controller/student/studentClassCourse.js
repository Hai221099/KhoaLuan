const db = require("../../config/db");
const Student = db.studentTable;

const studentClassCourse = {};

studentClassCourse.list = async (req, res) => {
  const request = await req.body.id;
  const response = await Student.findAll({
    where: {
      classId: request,
    },
  })
    .then(function (data) {
      const res = { success: true, data: data };
      return res;
    })
    .catch((error) => {
      const res = { success: false, error: request };
      return res;
    });
  res.json(response);
};

module.exports = studentClassCourse;
