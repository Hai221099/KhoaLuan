import { instance } from "./index";
// import authHeader from "./auth-header";

export const getEducationalProgramFactory = () => {
  const getEducationalPrograms = async () => {
    const response = await instance().get("/educationalProgram");

    if (response.status !== 200) {
      // ...
    }
    return response.data;
  };
  return getEducationalPrograms;
};

export const addEducationalProgramFactory = () => {
  const addEducationalProgram = async (a) => {
    const response = await instance().post("/educationalProgram/create", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return addEducationalProgram;
};

export const deleteEducationalProgramFactory = () => {
  const deleteEducationalProgram = async (a) => {
    const response = await instance().delete("/educationalProgram/delete", {
      data: { id: a },
    });
    if (response.status !== 200) {
      // ...
    }
  };
  return deleteEducationalProgram;
};

export const editEducationalProgramFactory = () => {
  const editEducationalProgram = async (a) => {
    const response = await instance().put("/educationalProgram/update", a);
    if (response.status !== 201) {
      // ...
    }
  };
  return editEducationalProgram;
};
