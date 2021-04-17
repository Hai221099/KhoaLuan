const db = require("../../config/db");
const Class = db.classTable;
const Student = db.studentTable;

const classCourse = {};

classCourse.list = async (req, res) => {
  const request = req.body.id;
  const response = await Class.findOne({
    where: {
      id: request,
    },
  });

  res.json(response);
};

classCourse.list2 = async (req, res) => {
  const response = await Class.findAll()
    .then(function (data) {
      const res = { success: true, data: data };
      return res;
    })
    .catch((error) => {
      const res = { success: false, error: error };
      return res;
    });
  res.json(response);
};

module.exports = classCourse;
