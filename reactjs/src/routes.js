// import Layout from '../src/Layout/educationalProgram';
import EducationalProgram from "../src/containers/EducationalProgram/EducationalProgramPageC";
import Student from "../src/containers/Student/StudentPageC";
import EducationalProgramStudentDetail from "../src/containers/EducationalProgramDetail/EducationalProgramStudentDetailPageC";
import Lecturer from "./containers/Lecturer/LecturerPageC";
import ClassCourseDetail from "./containers/ClassCourseDetail/ClassCourseDetailPageC";
// import EducationalProgramDetail from "./containers/EducationalProgramDetail/EducationalProgramDetailPageC";
import EducationalProgramDetail from "./containers/EducationalProgramDetail/EducationalProgramDetailPageC";
import AddNewVersionEducationalProgram from "./containers/EducationalProgramDetail/AddNewVersionEducationalProgram";
import Faculty from "./containers/Faculty/FacultyPageC";
import FacultyDetail from "./containers/Faculty/FacultyDetail";
import Login from "./containers/User/Login";
import Background from "./contents/public/background";
import Err from "./contents/public/403";

export const routesAdmin = [
  {
    path: "/admin/educationalProgram",
    exact: true,
    components: (match) => <EducationalProgram match={match} />,
    role: ["admin"],
  },
  {
    path: "/",
    exact: true,
    components: (match) => <EducationalProgram match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin",
    exact: true,
    components: (match) => <EducationalProgram match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/student",
    exact: true,
    components: (match) => <Student match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/student/",
    exact: false,
    components: (match) => <EducationalProgramStudentDetail match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/lecturer",
    exact: true,
    components: (match) => <Lecturer match={match} />,
    role: ["admin"],
  },
  {
    path: "/class/",
    exact: false,
    components: (match) => <ClassCourseDetail match={match} />,
    role: ["admin", "lecturer"],
  },
  {
    path: "/admin/educationalProgram/",
    exact: false,
    components: (match) => <EducationalProgramDetail match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/educationalProgramCreate/",
    exact: false,
    components: (match) => <AddNewVersionEducationalProgram match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/faculty",
    exact: true,
    components: (match) => <Faculty match={match} />,
    role: ["admin"],
  },
  {
    path: "/admin/faculty/",
    exact: false,
    components: (match) => <FacultyDetail match={match} />,
    role: ["admin"],
  },
  {
    path: "/student",
    exact: false,
    components: (match) => <EducationalProgramStudentDetail match={match} />,
    role: ["student"],
  },
  {
    path: "/403",
    exact: true,
    components: (match) => <Err match={match} />,
    role: "",
  },
];

export const routesStudent = [];
