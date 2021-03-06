import { Button, Form, Modal } from "react-bootstrap";
import Autocomplete from "react-autocomplete";
import { useState, useCallback, useEffect } from "react";
import "./otherFunctions.css";

function renderSubjectName(state, val) {
  return state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}

export default function Search(props) {
  const {
    listSubjects,
    remainingSubjects,
    addSubjectStart,
    updateSubjectM1,
    updateSubjectM2,
    updateSubjectM3,
    updateSubjectM4,
    updateSubjectM5,
    updateSubjectM6,
    getNewSubjectId,
    newSubjectId,
  } = props;
  const [newId, setNewId] = useState();
  useEffect(() => {
    getNewSubjectId();
  }, [getNewSubjectId]);
  useEffect(() => {
    const idArray = newSubjectId.map((x) => x.id);
    const a = Math.max(...idArray) + 1;
    setNewId(a);
  }, [newSubjectId]);
  const [newSubject, setNewSubject] = useState({
    subjectId: "",
    obligation: "",
    subject: {
      id: "",
      name: "",
      code: "",
      duration: "",
      type: "",
      theoriticalHour: "",
      practicalHour: "",
      selfStudyHour: "",
      prerequisiteCode: "",
    },
  });
  const [IDsubject, setIDsubject] = useState(newSubject.subjectId);
  const [obligationSubject, setObligationSubject] = useState(
    newSubject.obligation
  );
  const [idSubject, setIdSubject] = useState(newSubject.subject.id);
  const [nameSubject, setNameSubject] = useState(newSubject.subject.name);
  const getNameSubject = (e) => setNameSubject(e.target.value);
  const [codeSubject, setCodeSubject] = useState(newSubject.subject.code);
  const getCodeSubject = (e) => setCodeSubject(e.target.value);
  const [durationSubject, setDurationSubject] = useState(
    newSubject.subject.duration
  );
  const getDurationSubject = (e) => setDurationSubject(e.target.value);
  const [typeSubject, setTypeSubject] = useState(newSubject.subject.type);
  const getTypeSubject = (e) => setTypeSubject(e.target.value);
  const [theoriticalHourSubject, setTheoriticalHourSubject] = useState(
    newSubject.subject.theoriticalHour
  );
  const getTheoriticalHourSubject = (e) =>
    setTheoriticalHourSubject(e.target.value);
  const [practicalHourSubject, setPracticalHourSubject] = useState(
    newSubject.subject.practicalHour
  );
  const getPracticalHourSubject = (e) =>
    setPracticalHourSubject(e.target.value);
  const [selfStudyHourSubject, setSelfStudyHourSubject] = useState(
    newSubject.subject.selfStudyHour
  );
  const getSelfStudyHourSubject = (e) =>
    setSelfStudyHourSubject(e.target.value);
  const [prerequisiteCodeSubject, setPrerequisiteCodeSubject] = useState(
    newSubject.subject.prerequisiteCode
  );
  const getPrerequisiteCodeSubject = (e) =>
    setPrerequisiteCodeSubject(e.target.value);

  const [keyWord, setKeyWord] = useState("");
  const getKeyWord = (e) => setKeyWord(e.target.value);
  const getTotalKeyWord = (e) => {
    setKeyWord(e);
    const resultSubject = remainingSubjects.filter((x) => x.subject.code == e);
    resultSubject[0].obligation = true;
    setNewSubject(resultSubject[0]);
    // console.log(resultSubject[0]);
  };
  useEffect(() => {
    setIDsubject(newSubject.subjectId);
    setObligationSubject(newSubject.obligation);
    setIdSubject(newSubject.subject.id);
    setNameSubject(newSubject.subject.name);
    setCodeSubject(newSubject.subject.code);
    setDurationSubject(newSubject.subject.duration);
    setTypeSubject(newSubject.subject.type);
    setTheoriticalHourSubject(newSubject.subject.theoriticalHour);
    setPracticalHourSubject(newSubject.subject.practicalHour);
    setSelfStudyHourSubject(newSubject.subject.selfStudyHour);
    setPrerequisiteCodeSubject(newSubject.subject.prerequisiteCode);
  }, [newSubject]);
  const addSubjectVersion = async () => {
    const newSubjectVersion = {
      id: newId,
      name: nameSubject,
      code: codeSubject,
      duration: durationSubject,
      type: typeSubject,
      theoriticalHour: theoriticalHourSubject,
      practicalHour: practicalHourSubject,
      selfStudyHour: selfStudyHourSubject,
      prerequisiteCode: prerequisiteCodeSubject,
    };
    const newSubjectVersionToDisplay = {
      subjectId: newId,
      obligation: 1,
      subject: {
        id: newId,
        name: nameSubject,
        code: codeSubject,
        duration: durationSubject,
        type: typeSubject,
        theoriticalHour: theoriticalHourSubject,
        practicalHour: practicalHourSubject,
        selfStudyHour: selfStudyHourSubject,
        prerequisiteCode: prerequisiteCodeSubject,
      },
    };
    // console.log(newSubjectVersionToDisplay);
    await addSubjectStart(newSubjectVersion);
    await addSubjectToSelect(newSubjectVersionToDisplay);
    setNewId(newId + 1);
    closeModal();
  };

  const addSubjectToSelect = (e) => {
    switch (e.subject.type) {
      case "Kh???i ki???n th???c chung":
        updateSubjectM1(e);
        break;
      case "Kh???i ki???n th???c theo l??nh v???c":
        updateSubjectM2(e);
        break;
      case "Kh???i ki???n th???c theo kh???i ng??nh":
        updateSubjectM3(e);
        break;
      case "Kh???i ki???n th???c theo nh??m ng??nh":
        updateSubjectM4(e);
        break;
      case "Kh???i ki???n th???c ng??nh":
        updateSubjectM5(e);
        break;
      case "Kh???i ki???n th???c ng??nh b??? tr???":
        updateSubjectM6(e);
        break;
    }
  };
  const addSubject = () => {
    addSubjectToSelect(newSubject);
    // console.log(newSubject);
  };
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Th??m m???i phi??n b???n m??n h???c</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>T??n m??n h???c: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.name}
              onChange={getNameSubject}
            />
            <Form.Label>M?? m??n h???c: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.code}
              onChange={getCodeSubject}
            />
            <Form.Label>S??? t??n ch???: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.duration}
              onChange={getDurationSubject}
            />
            <Form.Label>Nh??m m??n h???c: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.type}
              onChange={getTypeSubject}
            />
            <Form.Label>S??? gi??? h???c l?? thuy???t: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.theoriticalHour}
              onChange={getTheoriticalHourSubject}
            />
            <Form.Label>S??? gi??? h???c th???c h??nh: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.practicalHour}
              onChange={getPracticalHourSubject}
            />
            <Form.Label>S??? gi??? t??? h???c: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.selfStudyHour}
              onChange={getSelfStudyHourSubject}
            />
            <Form.Label>M?? h???c ph???n ti??n quy???t: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.prerequisiteCode}
              onChange={getPrerequisiteCodeSubject}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addSubjectVersion}>
            L??u thay ?????i
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            ????ng
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Form.Label>T??m m??n h???c</Form.Label>
        <div>
          {/* <Form.Control className="searchInput inline"></Form.Control> */}
          <Autocomplete
            value={keyWord}
            items={listSubjects}
            getItemValue={(item) => item.code}
            shouldItemRender={renderSubjectName}
            renderMenu={(item) => <div className="dropdown">{item}</div>}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
                {item.name} - {item.code}
              </div>
            )}
            onChange={getKeyWord}
            onSelect={getTotalKeyWord}
          ></Autocomplete>
          <Button className="inline buttonSearch" onClick={addSubject}>
            Th??m v??o ch????ng tr??nh ????o t???o
          </Button>
          <Button className="inline buttonSearch" onClick={handleShow}>
            Th??m phi??n b???n
          </Button>
        </div>
      </Form>
    </div>
  );
}
