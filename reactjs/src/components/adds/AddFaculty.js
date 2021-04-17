import { useState, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddLecturer(props) {
  const { addFaculty } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameFaculty, setNameFaculty] = useState();
  const [codeFaculty, setCodeFaculty] = useState();
  const getNameFaculty = (e) => setNameFaculty(e.target.value);
  const getCodeFaculty = (e) => setCodeFaculty(e.target.value);

  const newFaculty = {
    name: nameFaculty,
    code: codeFaculty,
  };

  const createNewLecturer = () => {
    addFaculty(newFaculty);
    console.log(newFaculty);
    closeModal();
  };

  return (
    <div>
      <Button className="addLecturer" variant="success" onClick={handleShow}>
        Thêm mới khoa
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới khoa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên khoa: </Form.Label>
            <Form.Control type="text" onChange={getNameFaculty} />
            <Form.Label>Mã khoa: </Form.Label>
            <Form.Control type="text" onChange={getCodeFaculty} />
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
