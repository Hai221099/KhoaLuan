const db = require("../../config/db");
const Lecturer = db.lecturerTable;

const lecturer = {};

lecturer.list = async (req, res) => {
  const response = await Lecturer.findAll()
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

lecturer.create = async (req, res) => {
  try {
    const request = req.body;
    const response = await Lecturer.create(request)
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

lecturer.delete = async (req, res) => {
  try {
    const request = req.body.id;
    const response = await Lecturer.destroy({
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

lecturer.update = async (req, res) => {
  const request = {
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    classId: req.body.classId,
  };
  try {
    const response = await Lecturer.update(request, {
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

module.exports = lecturer;
