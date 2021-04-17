import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./class.css";
import EducationalProgramStudentDetailButton from "../../components/others/EducationalProgramStudentDetailButton";

export default function ClassCourse(props) {
  const {
    match,
    lecturer,
    getLecturer,
    getClassCourse,
    classCourse,
    student,
    getStudent,
  } = props;
  // const id = match.location.pathname.slice(7);
  const id = 1;
  useEffect(() => {
    getClassCourse(id);
    getStudent(id);
    getLecturer(id);
  }, [getClassCourse]);

  return (
    <div className="container">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-xs-5">
                <h2>
                  Lớp quản lý: <b>{classCourse.name}</b>
                </h2>
              </div>
            </div>
          </div>
          <br />
          <h2>Cố vấn học tập: {lecturer.name}</h2>
          <br />
          <h2>Danh sách sinh viên</h2>

          <Table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Mã học viên</th>
                <th>Tên học viên</th>
                <th>Giới tính</th>
                <th>Ngày sinh</th>
              </tr>
            </thead>
            <tbody>
              {student.map((student, index) => {
                index = index + 1;
                return (
                  <tr key={student.id}>
                    <th>{index}</th>
                    <th>{student.code}</th>
                    <th>{student.name}</th>
                    <th>{student.gender}</th>
                    <th>{student.dateOfBirth}</th>
                    <th>
                      <EducationalProgramStudentDetailButton
                        id={student.id}
                      ></EducationalProgramStudentDetailButton>
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
