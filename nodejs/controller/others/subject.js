// const { educationalProgram_subject } = require("../config/db");
const db = require("../../config/db");
const Subject = db.subjectTable;
const SubjectId = db.educationalProgramSubjectTable;
const EducationalProgram = db.educationalProgramTable;

const subject = {};

subject.list = async (req, res) => {
  const request = req.body.id;
  const response1 = await SubjectId.findAll({
    attributes: ["subjectId"],
    where: {
      educationalProgramId: request,
    },
  });

  const response2 = await Promise.all(
    response1.map(
      async (x) =>
        await Subject.findOne({
          where: {
            id: x.dataValues.subjectId,
          },
        })
    )
  );
  res.json(response2);
};

subject.list3 = async (req, res) => {
  const request = req.body.id;
  const response1 = await SubjectId.findAll({
    attributes: ["subjectId", "obligation"],
    // raw: true,
    where: {
      educationalProgramId: request,
    },
    include: { model: Subject },
  });
  // console.log(SubjectId);
  res.json(response1);
};

subject.list2 = async (req, res) => {
  const response = await Subject.findAll()
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

subject.list4 = async (req, res) => {
  const response1 = await SubjectId.findAll({
    attributes: ["subjectId", "obligation"],
    include: { model: Subject },
  });
  // console.log(SubjectId);
  res.json(response1);
};

subject.list5 = async (req, res) => {
  const response1 = await Subject.findAll({
    // raw: true,
    include: { model: SubjectId },
  });
  // console.log(SubjectId);
  res.json(response1);
};

subject.list6 = async (req, res) => {
  const response1 = await Subject.findAll({
    attributes: ["id"],
  });
  // console.log(SubjectId);
  res.json(response1);
};

subject.create = async (req, res) => {
  try {
    const request = req.body;
    const response = await Subject.create(request)
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

subject.create2 = async (req, res) => {
  try {
    const request = req.body;
    const response = await SubjectId.create(request)
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

module.exports = subject;
