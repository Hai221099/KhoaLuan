import { useState, useCallback, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function EditLecturer(props) {
  const { faculty, editFacultyStart } = props;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameFaculty, setNameFaculty] = useState(faculty.name);
  const [codeFaculty, setCodeFaculty] = useState(faculty.code);
  const getNameFaculty = (e) => setNameFaculty(e.target.value);
  const getCodeFaculty = (e) => setCodeFaculty(e.target.value);

  const newFaculty = {
    id: faculty.id,
    name: nameFaculty,
    code: codeFaculty,
  };

  const editFaculty = () => {
    editFacultyStart(newFaculty);
    console.log(newFaculty);
    closeModal();
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="primary" onClick={handleShow}>
        Sửa thông tin
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin khoa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên khoa: </Form.Label>
            <Form.Control
              type="text"
              onChange={getNameFaculty}
              defaultValue={faculty.name}
            />
            <Form.Label>Mã khoa: </Form.Label>
            <Form.Control
              type="text"
              onChange={getCodeFaculty}
              defaultValue={faculty.code}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editFaculty}>
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
