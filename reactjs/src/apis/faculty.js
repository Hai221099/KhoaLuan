import { instance } from "./index";

export const getFacultyFactory = () => {
  const getFaculties = async () => {
    const response = await instance().get("/faculty");

    if (response.status !== 200) {
      // ...
    }
    return response.data;
  };
  return getFaculties;
};

export const getFacultyByIdFactory = () => {
  const getFacultyById = async (a) => {
    const response = await instance().post("/faculty/byId", { id: a });

    if (response.status !== 200) {
      // ...
    }
    return response.data;
  };
  return getFacultyById;
};

export const getClassListFactory = () => {
  const getClassList = async (a) => {
    const response = await instance().post("/faculty/classList", { id: a });

    if (response.status !== 200) {
      // ...
    }
    return response.data;
  };
  return getClassList;
};

export const addFacultyFactory = () => {
  const addFaculty = async (a) => {
    const response = await instance().post("/faculty/create", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return addFaculty;
};

export const editFacultyFactory = () => {
  const editFaculty = async (a) => {
    const response = await instance().put("/faculty/update", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return editFaculty;
};
