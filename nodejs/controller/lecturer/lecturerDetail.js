const db = require("../../config/db");
const Lecturer = db.lecturerTable;

const lecturerDetail = {};

lecturerDetail.list = async (req, res) => {
  const request = await req.body.id;
  const response = await Lecturer.findOne({
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

module.exports = lecturerDetail;
