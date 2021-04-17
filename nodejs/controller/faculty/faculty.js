const db = require("../../config/db");
const Faculty = db.falcutyTable;
const ClassCourse = db.classTable;

const faculty = {};

faculty.list = async (req, res) => {
  const response = await Faculty.findAll()
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

faculty.list2 = async (req, res) => {
  const request = await req.body.id;
  const response = await Faculty.findOne({
    where: {
      id: request,
    },
    include: { model: ClassCourse },
  })
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

faculty.list3 = async (req, res) => {
  const request = await req.body.id;
  const response = await ClassCourse.findAll({
    where: {
      facultyId: request,
    },
  })
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

faculty.create = async (req, res) => {
  try {
    const request = req.body;
    const response = await Faculty.create(request)
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

faculty.update = async (req, res) => {
  const request = {
    name: req.body.name,
    code: req.body.code,
  };
  try {
    const response = await Faculty.update(request, {
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

module.exports = faculty;
