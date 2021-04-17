import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ClassCourseDetailButton from "../../components/others/ClassCourseDetailButton";
// import "./class.css";

export default function ClassCourse(props) {
  const { match, getFacultyById, faculty, getClassById, classList } = props;
  const id = match.location.pathname.slice(15);
  useEffect(() => {
    getFacultyById(id);
  }, [getFacultyById]);
  useEffect(() => {
    getClassById(faculty.id);
  }, [faculty]);

  return (
    <div className="container">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-xs-5">
                <h2>
                  Khoa: <b>{faculty.name}</b>
                </h2>
              </div>
            </div>
          </div>
          <br />
          <h2>Danh sách lớp học</h2>

          <Table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Tên lớp học</th>
              </tr>
            </thead>
            <tbody>
              {classList.map((classCourse, index) => {
                index = index + 1;
                return (
                  <tr key={classCourse.id}>
                    <th>{index}</th>
                    <th>{classCourse.name}</th>
                    <th>
                      <ClassCourseDetailButton
                        id={classCourse.id}
                      ></ClassCourseDetailButton>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
