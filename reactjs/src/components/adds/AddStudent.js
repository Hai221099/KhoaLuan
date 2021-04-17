import { useState, useCallback, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import propTypes from "prop-types";

AddStudent.propTypes = {
  addStudentStart: propTypes.func,
};

export default function AddStudent(props) {
  const { addStudentStart } = props;
  const { educationalProgramList, totalClassCourse } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameStudent, setNameStudent] = useState();
  const [codeStudent, setCodeStudent] = useState();
  const [genderStudent, setGenderStudent] = useState();
  const [dateOfBirthStudent, setDateOfBirthStudent] = useState();
  const [educationalProgramID, setEducationalProgramID] = useState();
  const [classId, setClassId] = useState();
  const getNameStudent = (e) => setNameStudent(e.target.value);
  const getCodeStudent = (e) => setCodeStudent(e.target.value);
  const getGenderStudent = (e) => setGenderStudent(e.target.value);
  const getDateOfBirthStudent = (e) => setDateOfBirthStudent(e.target.value);
  const getEducationalProgramID = (e) =>
    setEducationalProgramID(e.target.value);
  const getClassId = (e) => setClassId(e.target.value);

  const newStudent = {
    name: nameStudent,
    code: codeStudent,
    dateOfBirth: dateOfBirthStudent,
    gender: genderStudent,
    educationalProgramId: educationalProgramID,
    classId: classId,
  };

  const createNewStudent = () => {
    addStudentStart(newStudent);
    closeModal();
  };

  return (
    <div>
      <Button className="addStudent" variant="success" onClick={handleShow}>
        Thêm mới học viên
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới học viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Họ tên: </Form.Label>
            <Form.Control type="text" onChange={getNameStudent} />
            <Form.Label>Mã học viên: </Form.Label>
            <Form.Control type="text" onChange={getCodeStudent} />
            <Form.Label>Giới tính: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getGenderStudent}
            >
              <option>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <Form.Label>Ngày sinh: </Form.Label>
            <Form.Control type="text" onChange={getDateOfBirthStudent} />
            <Form.Label>Chương trình đào tạo: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getEducationalProgramID}
            >
              <option>Chọn chương trình đào tạo</option>
              {educationalProgramList.map((educationalProgram) => {
                return (
                  <option
                    key={educationalProgram.id}
                    value={educationalProgram.id}
                  >
                    {educationalProgram.name} - {educationalProgram.version}
                  </option>
                );
              })}
            </select>
            <Form.Label>Lớp - khóa học: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getClassId}
            >
              <option>Chọn lớp - khóa học</option>
              {totalClassCourse.map((classCourse) => {
                return (
                  <option key={classCourse.id} value={classCourse.id}>
                    {classCourse.name}
                  </option>
                );
              })}
            </select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createNewStudent}>
            Lưu thay đổi
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
