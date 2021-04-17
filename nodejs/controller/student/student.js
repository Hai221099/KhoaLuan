const db = require("../../config/db");
const Student = db.studentTable;

const student = {};

student.list = async (req, res) => {
  const response = await Student.findAll()
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

student.create = async (req, res) => {
  try {
    const request = req.body;
    const response = await Student.create(request)
      .then(function (data) {
        res.send({ success: true, data: data });
      })
      .catch((error) => {
        res.status(400).send({ message: error });
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

student.delete = async (req, res) => {
  try {
    const request = req.body.id;
    const response = await Student.destroy({
      where: {
        id: request,
      },
    })
      .then(function (data) {
        res.send({ success: true, data: data });
      })
      .catch((error) => {
        res.status(400).send({ message: error });
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

student.update = async (req, res) => {
  const request = {
    name: req.body.name,
    code: req.body.code,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    educationalProgramId: req.body.educationalProgramId,
    classId: req.body.classId,
  };
  try {
    const response = await Student.update(request, {
      where: { id: req.body.id },
    })
      .then(function (data) {
        res.send({ success: true, data: data });
      })
      .catch((error) => {
        res.status(400).send({ message: error });
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = student;
