import { useState, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";
// import propTypes from "prop-types";

// AddEducationalProgram.propTypes = {
//   addEducationalProgramStart: propTypes.func,
// };

export default function AddEducationalProgram(props) {
  const { addEducationalProgramStart } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);
  const [nameEducationalProgram, setNameEducationalProgram] = useState();
  const [codeEducationalProgram, setCodeEducationalProgram] = useState();
  const [typeEducationalProgram, setTypeEducationalProgram] = useState();
  const [versionEducationalProgram, setVersionEducationalProgram] = useState();
  const [
    durationEducationalProgram,
    setDurationEducationalProgram,
  ] = useState();
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

  const testData = () =>
    console.log(
      nameEducationalProgram,
      codeEducationalProgram,
      typeEducationalProgram,
      versionEducationalProgram,
      durationEducationalProgram
    );
  const newEducationalProgram = {
    name: nameEducationalProgram,
    code: codeEducationalProgram,
    type: typeEducationalProgram,
    version: versionEducationalProgram,
    duration: durationEducationalProgram,
  };

  const createNewEducationalProgram = () => {
    addEducationalProgramStart(newEducationalProgram);
  };

  return (
    <div>
      <Button className="ButtonAdd" variant="success" onClick={handleShow}>
        Thêm mới chương trình đào tạo
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới chương trình đào tạo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên chương trình đào tạo: </Form.Label>
            <Form.Control type="text" onChange={getNameEducationalProgram} />
            <Form.Label>Mã chương trình đào tạo: </Form.Label>
            <Form.Control type="text" onChange={getCodeEducationalProgram} />
            <Form.Label>Loại chương trình đào tạo: </Form.Label>
            <Form.Control type="text" onChange={getTypeEducationalProgram} />
            <Form.Label>Phiên bản: </Form.Label>
            <Form.Control type="text" onChange={getVersionEducationalProgram} />
            <Form.Label>Số tín chỉ: </Form.Label>
            <Form.Control
              type="text"
              onChange={getDurationEducationalProgram}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createNewEducationalProgram}>
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
