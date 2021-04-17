import { instance } from "./index";

export const getHVFactory = () => {
  const getHV = async (a) => {
    const response = await instance().post(
      "/educationalProgramDetail/student",
      { id: a }
    );
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getHV;
};

export const getEducationalProgramByIdFactory = () => {
  const getEducationalProgramById = async (a) => {
    const response = await instance().post(
      "/educationalProgramDetail/educationalProgram",
      { id: a }
    );
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getEducationalProgramById;
};

export const getSubjectByIdFactory = () => {
  const getSubjectById = async (a) => {
    const response = await instance().post(
      "/educationalProgramDetail/subject",
      { id: a }
    );
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjectById;
};

export const getSubjectObligationByIdFactory = () => {
  const getSubjectById = async (a) => {
    const response = await instance().post("subject/obligation", { id: a });
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjectById;
};

export const getTotalSubjectObligationFactory = () => {
  const getSubjectById = async () => {
    const response = await instance().post("totalSubjects/obligation");
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjectById;
};

export const getSubjectSubjectIdFactory = () => {
  const getSubjectById = async () => {
    const response = await instance().post("subject/subjectId");
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjectById;
};

export const getSubjectsFactory = () => {
  const getSubjects = async () => {
    const response = await instance().get("/subject");
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjects;
};

export const getNewIdSubjectFactory = () => {
  const getSubjects = async () => {
    const response = await instance().get("/subjectId");
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getSubjects;
};

export const addSubjectFactory = () => {
  const addSubject = async (a) => {
    const response = await instance().post("/subject/create", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return addSubject;
};

export const addSubjectSubjectIdFactory = () => {
  const addSubject = async (a) => {
    const response = await instance().post("/subjectId/create", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return addSubject;
};
