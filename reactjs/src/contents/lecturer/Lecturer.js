import propTypes from "prop-types";
import { useEffect, useCallback, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../Layout/Layout";
import AddLecturer from "../../containers/Lecturer/AddLecturer";
import DeleteLecturer from "../../containers/Lecturer/DeleteLecturer";
import EditLecturer from "../../containers/Lecturer/EditLecturer";
import ClassCourseDetailButton from "../../components/others/ClassCourseDetailButton";
import SearchOnPage from "../../components/otherFunctions/SearchOnPage";

export default function Lecturer(props) {
  const {
    lecturerList,
    getLecturers,
    getTotalClassCourse,
    totalClassCourse,
  } = props;
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(lecturerList);
  }, [lecturerList]);
  useEffect(() => {
    getLecturers();
  }, [getLecturers]);
  useEffect(() => {
    getTotalClassCourse();
  }, [getTotalClassCourse]);
  // console.log(totalClassCourse);
  const getKey = useCallback(
    (e) => {
      console.log(e);
      const result = lecturerList.filter(
        (lecturer) =>
          lecturer.name.toLowerCase().includes(e) || lecturer.name.includes(e)
      );
      setNewList(result);
    },
    [newList]
  );
  return (
    <Layout>
      <div>
        <h1>Danh sách cố vấn học tập</h1>
        <SearchOnPage
          list={lecturerList}
          getKey={(e) => getKey(e)}
        ></SearchOnPage>
        <AddLecturer totalClassCourse={totalClassCourse}></AddLecturer>
        <br />
        <Table className="List Container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên cố vấn học tập</th>
              <th>Email</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
            </tr>
          </thead>
          <tbody>
            {newList.map((lecturer) => {
              return (
                <tr key={lecturer.id}>
                  <td>{lecturer.id}</td>
                  <td>{lecturer.name}</td>
                  <td>{lecturer.email}</td>
                  <td>{lecturer.gender}</td>
                  <td>{lecturer.dateOfBirth}</td>
                  <td>{lecturer.class_course}</td>
                  {/* <td>
                    <DeleteLecturer id={lecturer.id}></DeleteLecturer>
                  </td> */}
                  <td>
                    <EditLecturer
                      lecturer={lecturer}
                      totalClassCourse={totalClassCourse}
                    ></EditLecturer>
                  </td>
                  <td>
                    <ClassCourseDetailButton
                      id={lecturer.classId}
                    ></ClassCourseDetailButton>
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
