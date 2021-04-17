import { useState, useCallback, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function EditLecturer(props) {
  const { editLecturerStart, lecturer, totalClassCourse } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameLecturer, setNameLecturer] = useState(lecturer.name);
  const [emailLecturer, setEmailLecturer] = useState(lecturer.email);
  const [dateOfBirthLecturer, setDateOfBirthLecturer] = useState(
    lecturer.dateOfBirth
  );
  const [genderLecturer, setGenderLecturer] = useState(lecturer.gender);
  const [class_course, setClass_Course] = useState(lecturer.class_course);

  const getNameLecturer = (e) => setNameLecturer(e.target.value);
  const getEmailLecturer = (e) => setEmailLecturer(e.target.value);
  const getGenderLecturer = (e) => setGenderLecturer(e.target.value);
  const getDateOfBirthLecturer = (e) => setDateOfBirthLecturer(e.target.value);
  const getClass_Course = (e) => setClass_Course(e.target.value);

  const newLecturer = {
    id: lecturer.id,
    name: nameLecturer,
    email: emailLecturer,
    gender: genderLecturer,
    dateOfBirth: dateOfBirthLecturer,
    classId: class_course,
  };

  const editLecturer = () => {
    editLecturerStart(newLecturer);
    console.log(newLecturer);
    closeModal();
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="primary" onClick={handleShow}>
        Sửa thông tin
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin cố vấn học tập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Họ tên: </Form.Label>
            <Form.Control
              type="text"
              onChange={getNameLecturer}
              defaultValue={lecturer.name}
            />
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              onChange={getEmailLecturer}
              defaultValue={lecturer.email}
            />
            <Form.Label>Ngày sinh: </Form.Label>
            <Form.Control
              type="text"
              onChange={getDateOfBirthLecturer}
              defaultValue={lecturer.dateOfBirth}
            />
            <Form.Label>Giới tính: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getGenderLecturer}
              defaultValue={lecturer.gender}
            >
              <option>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <Form.Label>Lớp - khóa học: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getClass_Course}
              defaultValue={lecturer.classId}
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
          <Button variant="primary" onClick={editLecturer}>
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
