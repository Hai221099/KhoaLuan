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
        S???a th??ng tin
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>S???a ch????ng tr??nh ????o t???o</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>T??n ch????ng tr??nh ????o t???o: </Form.Label>
            <Form.Control
              type="text"
              onChange={getNameEducationalProgram}
              defaultValue={name}
            />
            <Form.Label>M?? ch????ng tr??nh ????o t???o: </Form.Label>
            <Form.Control
              type="text"
              onChange={getCodeEducationalProgram}
              defaultValue={code}
            />
            <Form.Label>Lo???i ch????ng tr??nh ????o t???o: </Form.Label>
            <Form.Control
              type="text"
              onChange={getTypeEducationalProgram}
              defaultValue={type}
            />
            <Form.Label>Phi??n b???n: </Form.Label>
            <Form.Control
              type="text"
              onChange={getVersionEducationalProgram}
              defaultValue={version}
            />
            <Form.Label>S??? t??n ch???: </Form.Label>
            <Form.Control
              type="text"
              onChange={getDurationEducationalProgram}
              defaultValue={duration}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editEducationalProgram}>
            L??u thay ?????i
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            ????ng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
