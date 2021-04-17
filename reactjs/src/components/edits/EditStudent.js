import { useState, useCallback, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import propTypes from "prop-types";

EditStudent.propTypes = {
  editStudentStart: propTypes.func,
};

export default function EditStudent(props) {
  const { student, educationalProgramList, totalClassCourse } = props;

  const { editStudentStart } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameStudent, setNameStudent] = useState(student.name);
  const [codeStudent, setCodeStudent] = useState(student.code);
  const [genderStudent, setGenderStudent] = useState(student.gender);
  const [dateOfBirthStudent, setDateOfBirthStudent] = useState(
    student.dateOfBirth
  );
  const [educationalProgramID, setEducationalProgramID] = useState(
    student.educationalProgramId
  );
  const [classId, setClassId] = useState(student.classId);
  const getNameStudent = (e) => setNameStudent(e.target.value);
  const getCodeStudent = (e) => setCodeStudent(e.target.value);
  const getGenderStudent = (e) => setGenderStudent(e.target.value);
  const getDateOfBirthStudent = (e) => setDateOfBirthStudent(e.target.value);
  const getEducationalProgramID = (e) =>
    setEducationalProgramID(e.target.value);
  const getClassID = (e) => setClassId(e.target.value);

  // const testData = () => console.log(nameEducationalProgram , codeEducationalProgram , typeEducationalProgram , versionEducationalProgram , durationEducationalProgram  );
  const newStudent = {
    id: student.id,
    name: nameStudent,
    code: codeStudent,
    gender: genderStudent,
    dateOfBirth: dateOfBirthStudent,
    educationalProgramId: educationalProgramID,
    classId: classId,
  };

  const editEducationalProgram = () => {
    editStudentStart(newStudent);
    closeModal();
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="primary" onClick={handleShow}>
        Sửa thông tin
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin học viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Họ tên: </Form.Label>
            <Form.Control
              type="text"
              onChange={getNameStudent}
              defaultValue={student.name}
            />
            <Form.Label>Mã học viên: </Form.Label>
            <Form.Control
              type="text"
              onChange={getCodeStudent}
              defaultValue={student.code}
            />
            <Form.Label>Giới tính: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getGenderStudent}
              defaultValue={student.gender}
            >
              <option>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <Form.Label>Ngày sinh: </Form.Label>
            <Form.Control
              type="text"
              onChange={getDateOfBirthStudent}
              defaultValue={student.dateOfBirth}
            />
            <Form.Label>Chương trình đào tạo: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getEducationalProgramID}
              defaultValue={student.educationalProgramId}
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
              onChange={getClassID}
              defaultValue={student.classId}
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
          <Button variant="primary" onClick={editEducationalProgram}>
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
