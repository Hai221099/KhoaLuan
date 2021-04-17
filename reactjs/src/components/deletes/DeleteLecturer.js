import { useState, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import propTypes from "prop-types";

DeleteLecturer.propTypes = {
  deleteLecturerStart: propTypes.func,
};

export default function DeleteLecturer(props) {
  const { deleteLecturerStart, id } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  const deleteLecturer = () => {
    deleteLecturerStart(id);
    closeModal();
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="danger" onClick={handleShow}>
        Xoá
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa cố vấn học tập</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa cố vấn học tập này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deleteLecturer}>
            Xác nhận
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
