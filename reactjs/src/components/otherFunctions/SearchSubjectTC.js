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
    updateSubjectM2TC,
    updateSubjectM3TC,
    updateSubjectM4TC,
    updateSubjectM5TC,
    updateSubjectM6TC,
    updateSubjectM7,
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
    if (resultSubject[0]) resultSubject[0].obligation = 0;
    setNewSubject(resultSubject[0]);
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
      obligation: 0,
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
      case "Khối kiến thức theo lĩnh vực":
        updateSubjectM2TC(e);
        break;
      case "Khối kiến thức theo khối ngành":
        updateSubjectM3TC(e);
        break;
      case "Khối kiến thức theo nhóm ngành":
        updateSubjectM4TC(e);
        break;
      case "Khối kiến thức ngành":
        updateSubjectM5TC(e);
        break;
      case "Khối kiến thức ngành bổ trợ":
        updateSubjectM6TC(e);
        break;
      case "Khóa luận tốt nghiệp":
        updateSubjectM7(e);
        break;
    }
  };
  const addSubject = () => {
    addSubjectToSelect(newSubject);
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
          <Modal.Title>Thêm mới phiên bản môn học</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Tên môn học: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.name}
              onChange={getNameSubject}
            />
            <Form.Label>Mã môn học: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.code}
              onChange={getCodeSubject}
            />
            <Form.Label>Số tín chỉ: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.duration}
              onChange={getDurationSubject}
            />
            <Form.Label>Nhóm môn học: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.type}
              onChange={getTypeSubject}
            />
            <Form.Label>Số giờ học lý thuyết: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.theoriticalHour}
              onChange={getTheoriticalHourSubject}
            />
            <Form.Label>Số giờ học thực hành: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.practicalHour}
              onChange={getPracticalHourSubject}
            />
            <Form.Label>Số giờ tự học: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.selfStudyHour}
              onChange={getSelfStudyHourSubject}
            />
            <Form.Label>Mã học phần tiên quyết: </Form.Label>
            <Form.Control
              type="text"
              defaultValue={newSubject.subject.prerequisiteCode}
              onChange={getPrerequisiteCodeSubject}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addSubjectVersion}>
            Lưu thay đổi
          </Button>
          <Button variant="secondary" onClick={closeModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Form.Label>Tìm môn học</Form.Label>
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
            Thêm vào chương trình đào tạo
          </Button>
          <Button className="inline buttonSearch" onClick={handleShow}>
            Thêm phiên bản
          </Button>
        </div>
      </Form>
    </div>
  );
}
