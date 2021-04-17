import { instance } from "./index";

export const getLecturerFactory = () => {
  const getLecturers = async () => {
    const response = await instance().get("/lecturer");

    if (response.status !== 200) {
      // ...
    }
    return response.data;
  };
  return getLecturers;
};

export const addLecturerFactory = () => {
  const addLecturer = async (a) => {
    const response = await instance().post("/lecturer/create", a);
    if (response.status !== 200) {
      // ...
    }
  };
  return addLecturer;
};

export const deleteLecturerFactory = () => {
  const deleteLecturer = async (a) => {
    const response = await instance().delete("/lecturer/delete", {
      data: { id: a },
    });
    if (response.status !== 200) {
      // ...
    }
  };
  return deleteLecturer;
};

export const editLecturerFactory = () => {
  const editLecturer = async (a) => {
    const response = await instance().put("/lecturer/update", a);
    if (response.status !== 201) {
      // ...
    }
  };
  return editLecturer;
};
