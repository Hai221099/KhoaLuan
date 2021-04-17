import { instance } from "./index";

export const getLecturerClassCourseFactory = () => {
  const getLecturer = async (a) => {
    const response = await instance().post("/classCourse/lecturer", { id: a });
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getLecturer;
};

export const getStudentClassCourseFactory = () => {
  const getStudent = async (a) => {
    const response = await instance().post("/classCourse/student", { id: a });
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getStudent;
};

export const getClassCourseFactory = () => {
  const getClassCourse = async (a) => {
    const response = await instance().post("/class", {
      id: a,
    });
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getClassCourse;
};

export const getTotalClassCourseFactory = () => {
  const getClassCourse = async () => {
    const response = await instance().post("/classes");
    if (response.status !== 200) {
    }
    return response.data;
  };
  return getClassCourse;
};
