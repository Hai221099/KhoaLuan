// const { educationalProgramTable } = require("../config/db");
const db = require("../../config/db");
const EducationalProgram = db.educationalProgramTable;

const educationalProgramDetail = {};

educationalProgramDetail.list = async (req, res) => {
  const request = await req.body.id;
  const response = await EducationalProgram.findOne({
    where: {
      id: request,
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

module.exports = educationalProgramDetail;
