import { useState, useCallback, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import propTypes from "prop-types";

EditEducationalProgram.propTypes = {
  editEducationalProgramStart: propTypes.func,
};

export default function EditEducationalProgram(props) {
  const { id, name, code, type, version, duration } = props;

  const { editEducationalProgramStart } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameEducationalProgram, setNameEducationalProgram] = useState(name);
  const [codeEducationalProgram, setCodeEducationalProgram] = useState(code);
  const [typeEducationalProgram, setTypeEducationalProgram] = useState(type);
  const [versionEducationalProgram, setVersionEducationalProgram] = useState(
    version
  );
  const [durationEducationalProgram, setDurationEducationalProgram] = useState(
    duration
  );
  const getNameEducationalProgram = (e) =>
    setNameEducationalProgram(e.target.value);
  const getCodeEducationalProgram = (e) =>
    setCodeEducationalProgram(e.target.value);
  const getTypeEducationalProgram = (e) =>
    setTypeEducationalProgram(e.target.value);
  const getVersionEducationalProgram = (e) =>
    setVersionEducationalProgram(e.target.value);
  const getDurationEducationalProgram = (e) =>
    setDurationEducationalProgram(e.target.value);

  // const testData = () => console.log(nameEducationalProgram , codeEducationalProgram , typeEducationalProgram , versionEducationalProgram , durationEducationalProgram  );
  const newEducationalProgram = {
    id: id,
    name: nameEducationalProgram,
    code: codeEducationalProgram,
    type: typeEducationalProgram,
    version: versionEducationalProgram,
    duration: durationEducationalProgram,
  };

  const editEducationalProgram = () => {
    editEducationalProgramStart(newEducationalProgram);
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="primary" onClick={handleShow}>
        Sửa thông tin
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa chương trình đào tạo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên chương trình đào tạo: </Form.Label>
            <Form.Control
              type="text"
              onChange={getNameEducationalProgram}
              defaultValue={name}
            />
            <Form.Label>Mã chương trình đào tạo: </Form.Label>
            <Form.Control
              type="text"
              onChange={getCodeEducationalProgram}
              defaultValue={code}
            />
            <Form.Label>Loại chương trình đào tạo: </Form.Label>
            <Form.Control
              type="text"
              onChange={getTypeEducationalProgram}
              defaultValue={type}
            />
            <Form.Label>Phiên bản: </Form.Label>
            <Form.Control
              type="text"
              onChange={getVersionEducationalProgram}
              defaultValue={version}
            />
            <Form.Label>Số tín chỉ: </Form.Label>
            <Form.Control
              type="text"
              onChange={getDurationEducationalProgram}
              defaultValue={duration}
            />
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
