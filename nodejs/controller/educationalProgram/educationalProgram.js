// const { educationalProgramTable } = require("../config/db");
const db = require("../../config/db");
const EducationalProgram = db.educationalProgramTable;

const educationalProgram = {};

educationalProgram.list = async (req, res) => {
  const response = await EducationalProgram.findAll()
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

educationalProgram.create = async (req, res) => {
  try {
    const request = req.body;
    const response = await EducationalProgram.create(request)
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

educationalProgram.delete = async (req, res) => {
  try {
    const request = req.body.id;
    const response = await EducationalProgram.destroy({
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

educationalProgram.update = async (req, res) => {
  const request = {
    name: req.body.name,
    code: req.body.code,
    type: req.body.type,
    version: req.body.version,
    duration: req.body.duration,
  };
  try {
    const response = await EducationalProgram.update(request, {
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

module.exports = educationalProgram;
