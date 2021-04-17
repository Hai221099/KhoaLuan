import propTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "../../containers/Student/AddStudent";
import DeleteStudent from "../../containers/Student/DeleteStudent";
import EditStudent from "../../containers/Student/EditStudent";
import EducationalProgramDetailButton from "../../components/others/EducationalProgramStudentDetailButton";
import Layout from "../../Layout/Layout";
import "./../educationalProgram.css";
import SearchOnPage from "../../components/otherFunctions/SearchOnPage";

export default function Student(props) {
  const {
    studentList,
    getStudents,
    educationalProgramList,
    getEducationalPrograms,
    getTotalClassCourse,
    totalClassCourse,
  } = props;
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(studentList);
  }, [studentList]);
  useEffect(() => {
    getStudents();
  }, [getStudents]);
  useEffect(() => {
    getEducationalPrograms();
  }, [getEducationalPrograms]);
  useEffect(() => {
    getTotalClassCourse();
  }, [getTotalClassCourse]);
  function myFunction() {
    var a = 100;
    var b = 200;
    for (var i = 0; i < 6; i++) {
      b = (b + 100) * 1.25;
    }
    for (var i = 0; i < 24; i++) {
      a = a * 1.2;
    }
    console.log(b);
    console.log(a);
  }
  myFunction();
  const getKey = useCallback(
    (e) => {
      console.log(e);
      const result = studentList.filter(
        (student) =>
          student.name.toLowerCase().includes(e) || student.name.includes(e)
      );
      setNewList(result);
    },
    [newList]
  );
  return (
    <Layout>
      <div>
        <h1>Danh sách sinh viên</h1>
        <SearchOnPage
          list={studentList}
          getKey={(e) => getKey(e)}
        ></SearchOnPage>
        <AddStudent
          educationalProgramList={educationalProgramList}
          totalClassCourse={totalClassCourse}
        ></AddStudent>
        <br />
        <Table className="List Container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã học viên</th>
              <th>Tên học viên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
            </tr>
          </thead>
          <tbody>
            {newList.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.code}</td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.dateOfBirth}</td>
                  {/* <td>
                    <DeleteStudent id={student.id}></DeleteStudent>
                  </td> */}
                  <td>
                    <EditStudent
                      student={student}
                      educationalProgramList={educationalProgramList}
                      totalClassCourse={totalClassCourse}
                    ></EditStudent>
                  </td>
                  <td>
                    <EducationalProgramDetailButton
                      id={student.id}
                    ></EducationalProgramDetailButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}
