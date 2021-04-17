import { useState, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddLecturer(props) {
  const { addLecturerStart } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameLecturer, setNameLecturer] = useState();
  const [emailLecturer, setEmailLecturer] = useState();
  const [dateOfBirthLecturer, setDateOfBirthLecturer] = useState();
  const [genderLecturer, setGenderLecturer] = useState();
  const [class_course, setClass_Course] = useState();

  const getNameLecturer = (e) => setNameLecturer(e.target.value);
  const getEmailLecturer = (e) => setEmailLecturer(e.target.value);
  const getDateOfBirthLecturer = (e) => setDateOfBirthLecturer(e.target.value);
  const getGenderLecturer = (e) => setGenderLecturer(e.target.value);
  const getClass_Course = (e) => setClass_Course(e.target.value);

  const newLecturer = {
    name: nameLecturer,
    email: emailLecturer,
    class_course: class_course,
    gender: genderLecturer,
    dateOfBirth: dateOfBirthLecturer,
  };

  const createNewLecturer = () => {
    addLecturerStart(newLecturer);
    closeModal();
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="success" onClick={handleShow}>
        Thêm mới cố vấn học tập
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới cố vấn học tập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Họ tên: </Form.Label>
            <Form.Control type="text" onChange={getNameLecturer} />
            <Form.Label>Email: </Form.Label>
            <Form.Control type="text" onChange={getEmailLecturer} />
            <Form.Label>Ngày sinh: </Form.Label>
            <Form.Control type="text" onChange={getDateOfBirthLecturer} />
            <Form.Label>Giới tính: </Form.Label>
            <select
              className="browser-default custom-select"
              onChange={getGenderLecturer}
            >
              <option>Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <Form.Label>Lớp khóa học: </Form.Label>
            <Form.Control type="text" onChange={getClass_Course} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createNewLecturer}>
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
