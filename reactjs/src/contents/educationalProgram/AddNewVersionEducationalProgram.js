import { useEffect, useState, useCallback, refs } from "react";
import { Button, Form, Col, FormCheck, Row } from "react-bootstrap";
import "./../addNewVersionEducationalProgram.css";
// import Search from "../containers/EducationalProgramDetail/Search";
import Search from "../../containers/EducationalProgramDetail/Search";
import SearchTC from "../../containers/EducationalProgramDetail/SearchTC";

export default function ClassCourse(props) {
  const {
    match,
    getSubjectById,
    subject,
    getEducationalProgramById,
    educationalProgramDetail,
    getSubjects,
    totalSubjects,
    getEducationalPrograms,
    educationalProgram,
    getSubjectObligationById,
    subjectObligation,
    getTotalSubjectObligation,
    totalSubjectObligation,
    addEducationalProgramStart,
    getSubjectSubjectId,
    subjectSubjectId,
    addSubjectSubjectIdStart,
  } = props;
  const id = match.location.pathname.slice(32);
  console.log(id);
  useEffect(() => {
    getEducationalPrograms();
  }, [getEducationalPrograms]);
  useEffect(() => {
    getSubjectById(id);
    getEducationalProgramById(id);
    getSubjectObligationById(id);
    getTotalSubjectObligation();
  }, [getSubjectById]);
  useEffect(() => {
    getSubjects();
  }, [getSubjects]);
  const [countTotalSubjects, setCountTotalSubjects] = useState();
  useEffect(() => {
    setCountTotalSubjects(totalSubjects);
  }, [totalSubjects]);
  const [check, setCheck] = useState(1);
  const [versionEducationalProgram, setVersionEducationalProgram] = useState(
    ""
  );
  const [durationEducationalProgram, setDurationEducationalProgram] = useState(
    ""
  );
  const [
    referenceEducationalProgram,
    setReferenceEducationalProgram,
  ] = useState("");
  const getVersionEducationalProgram = (e) =>
    setVersionEducationalProgram(e.target.value);
  const getDurationEducationalProgram = (e) =>
    setDurationEducationalProgram(e.target.value);
  const getReferenceEducationalProgram = (e) =>
    setReferenceEducationalProgram(e.target.value);

  // khai bao chuong trinh dao tao moi
  const [nameEducationalProgram, setNameEducationalProgram] = useState();
  const [typeEducationalProgram, setTypeEducationalProgram] = useState();
  useEffect(() => {
    setNameEducationalProgram(educationalProgramDetail.name);
    setTypeEducationalProgram(educationalProgramDetail.type);
  }, [educationalProgramDetail]);
  const subjectM1 = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức chung" && x.obligation == 1
  );
  // subjectObligation.forEach((a) => console.log(a.subject.id));
  const [newSubjectM1, setNewSubjectM1] = useState([]);
  const subjectM2 = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức theo lĩnh vực" && x.obligation == 1
  );
  const [newSubjectM2, setNewSubjectM2] = useState([]);
  const subjectM2TC = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức theo lĩnh vực" && x.obligation == 0
  );
  const [newSubjectM2TC, setNewSubjectM2TC] = useState([]);
  const subjectM3 = subjectObligation.filter(
    (x) =>
      x.subject.type == "Khối kiến thức theo khối ngành" && x.obligation == 1
  );
  const [newSubjectM3, setNewSubjectM3] = useState([]);
  const subjectM3TC = subjectObligation.filter(
    (x) =>
      x.subject.type == "Khối kiến thức theo khối ngành" && x.obligation == 0
  );
  const [newSubjectM3TC, setNewSubjectM3TC] = useState([]);
  const subjectM4 = subjectObligation.filter(
    (x) =>
      x.subject.type == "Khối kiến thức theo nhóm ngành" && x.obligation == 1
  );
  const [newSubjectM4, setNewSubjectM4] = useState([]);
  const subjectM4TC = subjectObligation.filter(
    (x) =>
      x.subject.type == "Khối kiến thức theo nhóm ngành" && x.obligation == 0
  );
  const [newSubjectM4TC, setNewSubjectM4TC] = useState([]);
  const subjectM5 = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành" && x.obligation == 1
  );
  const [newSubjectM5, setNewSubjectM5] = useState([]);
  const subjectM5TC = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành" && x.obligation == 0
  );
  const [newSubjectM5TC, setNewSubjectM5TC] = useState([]);
  const subjectM6 = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành bổ trợ" && x.obligation == 1
  );
  const [newSubjectM6, setNewSubjectM6] = useState([]);
  const subjectM6TC = subjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành bổ trợ" && x.obligation == 0
  );
  const [newSubjectM6TC, setNewSubjectM6TC] = useState([]);
  const subjectM7 = subjectObligation.filter(
    (x) => x.subject.type == "Khóa luận tốt nghiệp"
  );
  const [newSubjectM7, setNewSubjectM7] = useState([]);
  const totalSubjectsM1 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức chung"
  );
  const listSubjectsM1 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức chung"
  );
  const totalSubjectsM2 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức theo lĩnh vực"
  );
  const listSubjectsM2 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức theo lĩnh vực"
  );
  const totalSubjectsM3 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức theo khối ngành"
  );
  const listSubjectsM3 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức theo khối ngành"
  );
  const totalSubjectsM4 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức theo nhóm ngành"
  );
  const listSubjectsM4 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức theo nhóm ngành"
  );
  const totalSubjectsM5 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành"
  );
  const listSubjectsM5 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức ngành"
  );
  const totalSubjectsM6 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khối kiến thức ngành bổ trợ"
  );
  const listSubjectsM6 = totalSubjects.filter(
    (x) => x.type == "Khối kiến thức ngành bổ trợ"
  );
  const totalSubjectsM7 = totalSubjectObligation.filter(
    (x) => x.subject.type == "Khóa luận tốt nghiệp"
  );
  const listSubjectsM7 = totalSubjects.filter(
    (x) => x.type == "Khóa luận tốt nghiệp"
  );
  useEffect(() => {
    setNewSubjectM1(subjectM1);
    setNewSubjectM2(subjectM2);
    setNewSubjectM2TC(subjectM2TC);
    setNewSubjectM3(subjectM3);
    setNewSubjectM3TC(subjectM3TC);
    setNewSubjectM4(subjectM4);
    setNewSubjectM4TC(subjectM4TC);
    setNewSubjectM5(subjectM5);
    setNewSubjectM5TC(subjectM5TC);
    setNewSubjectM6(subjectM6);
    setNewSubjectM6TC(subjectM6TC);
    setNewSubjectM7(subjectM7);
  }, [subjectObligation]);
  const updateSubjectM1 = useCallback((x) => {
    subjectObligation.push(x);
    const subjectM11 = subjectObligation.filter(
      (a) => a.subject.type == "Khối kiến thức chung" && a.obligation == 1
    );
    setNewSubjectM1(subjectM11);
    getSubjects();
  });
  const updateSubjectM2 = useCallback((x) => {
    subjectObligation.push(x);
    // setCountTotalSubjects(countTotalSubjects.push(x.subject));
    const subjectM22 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo lĩnh vực" && a.obligation == 1
    );
    setNewSubjectM2(subjectM22);
    getSubjects();
  });
  const updateSubjectM2TC = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM22 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo lĩnh vực" && a.obligation == 0
    );
    setNewSubjectM2TC(subjectM22);
    getSubjects();
  });
  const updateSubjectM3 = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM33 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo khối ngành" && a.obligation == 1
    );
    setNewSubjectM3(subjectM33);
    getSubjects();
  });
  const updateSubjectM3TC = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM33 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo khối ngành" && a.obligation == 0
    );
    setNewSubjectM3TC(subjectM33);
    getSubjects();
  });
  const updateSubjectM4 = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM44 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo nhóm ngành" && a.obligation == 1
    );
    setNewSubjectM4(subjectM44);
    getSubjects();
  });
  const updateSubjectM4TC = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM44 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức theo nhóm ngành" && a.obligation == 0
    );
    setNewSubjectM4TC(subjectM44);
    getSubjects();
  });
  const updateSubjectM5 = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM55 = subjectObligation.filter(
      (a) => a.subject.type == "Khối kiến thức ngành" && a.obligation == 1
    );
    setNewSubjectM5(subjectM55);
    getSubjects();
  });
  const updateSubjectM5TC = useCallback((x) => {
    subjectObligation.push(x);

    const subjectM55 = subjectObligation.filter(
      (a) => a.subject.type == "Khối kiến thức ngành" && a.obligation == 0
    );
    setNewSubjectM5TC(subjectM55);
    getSubjects();
  });
  const updateSubjectM6 = useCallback((x) => {
    subjectObligation.push(x);
    const subjectM66 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức ngành bổ trợ" && a.obligation == 1
    );
    setNewSubjectM6(subjectM66);
    getSubjects();
  });
  const updateSubjectM6TC = useCallback((x) => {
    subjectObligation.push(x);
    const subjectM66 = subjectObligation.filter(
      (a) =>
        a.subject.type == "Khối kiến thức ngành bổ trợ" && a.obligation == 0
    );
    setNewSubjectM6TC(subjectM66);
    getSubjects();
  });
  const updateSubjectM7 = useCallback((x) => {
    subjectObligation.push(x);
    const subjectM77 = subjectObligation.filter(
      (a) => a.subject.type == "Khóa luận tốt nghiệp"
    );
    setNewSubjectM7(subjectM77);
    getSubjects();
  });

  // Khối kiến thức chung
  const [generalKnowledgeDuration, setGeneralKnowledgeDuration] = useState(0);
  // khối kiến thức theo lĩnh vực
  const [fieldedKnowledgeDuration, setFieldedKnowledgeDuration] = useState(0);
  // khối kiến thức theo khối ngành
  const [
    industryBlockKnowledgeDuraion,
    setIndustryBlockKnowledgeDuraion,
  ] = useState(0);
  const [
    compulsoryIndustryBlockKnowledgeDuraion,
    setCompulsoryIndustryBlockKnowledgeDuraion,
  ] = useState(0);
  const [
    electiveIndustryBlockKnowledgeDuraion,
    setElectiveIndustryBlockKnowledgeDuraion,
  ] = useState(0);
  const [
    electiveIndustryBlockKnowledgeTotalDuraion,
    setElectiveIndustryBlockKnowledgeTotalDuraion,
  ] = useState(0);
  // khối kiến thức theo nhóm ngành
  const [
    industryGroupKnowledgeDuration,
    setIndustryGroupKnowledgeDuration,
  ] = useState(0);
  const [
    compulsoryIndustryGroupKnowledgeDuration,
    setCompulsoryIndustryGroupKnowledgeDuration,
  ] = useState(0);
  const [
    electiveIndustryGroupKnowledgeDuration,
    setElectiveIndustryGroupKnowledgeDuration,
  ] = useState(0);
  const [
    electiveIndustryGroupKnowledgeTotalDuration,
    setElectiveIndustryGroupKnowledgeTotalDuration,
  ] = useState(0);
  // khối kiến thức ngành
  const [industryKnowledgeDuration, setIndustryKnowledgeDuration] = useState(0);
  const [
    compulsoryIndustryKnowledgeDuration,
    setCompulsoryIndustryKnowledgeDuration,
  ] = useState(0);
  const [
    electiveIndustryKnowledgeDuration,
    setElectiveIndustryKnowledgeDuration,
  ] = useState(0);
  const [
    electiveIndustryKnowledgeTotalDuration,
    setElectiveIndustryKnowledgeTotalDuration,
  ] = useState(0);
  // khối kiến thức ngành bổ trợ
  const [
    extraCompulsoryIndustryKnowledgeDuration,
    setExtraCompulsoryIndustryKnowledgeDuration,
  ] = useState(0);
  const [
    extraElectiveIndustryKnowledgeDuration,
    setExtraElectiveIndustryKnowledgeDuration,
  ] = useState(0);
  const [
    extraElectiveIndustryKnowledgeTotalDuration,
    setExtraElectiveIndustryKnowledgeTotalDuration,
  ] = useState(0);
  // khóa luận tốt nghiệp
  const [graduationalThesisDuration, setGraduationalThesisDuration] = useState(
    0
  );
  const getElectiveIndustryBlockKnowledgeDuraion = (e) =>
    setElectiveIndustryBlockKnowledgeDuraion(e.target.value);
  const getElectiveIndustryGroupKnowledgeDuration = (e) =>
    setElectiveIndustryGroupKnowledgeDuration(e.target.value);
  const getElectiveIndustryKnowledgeDuration = (e) =>
    setElectiveIndustryKnowledgeDuration(e.target.value);
  const getExtraElectiveIndustryKnowledgeDuration = (e) =>
    setExtraElectiveIndustryKnowledgeDuration(e.target.value);
  const idArray = educationalProgram.map((x) => x.id);
  const newId = Math.max(...idArray) + 1;
  const newEducationalProgram = {
    id: newId,
    name: nameEducationalProgram,
    type: typeEducationalProgram,
    version: versionEducationalProgram,
    duration: durationEducationalProgram,
    reference: referenceEducationalProgram,
  };
  const testDuration = {
    generalKnowledgeDuration: generalKnowledgeDuration,
    fieldedKnowledgeDuration: fieldedKnowledgeDuration,
    industryBlockKnowledgeDuraion:
      compulsoryIndustryBlockKnowledgeDuraion +
      electiveIndustryBlockKnowledgeDuraion,
    compulsoryIndustryBlockKnowledgeDuraion: compulsoryIndustryBlockKnowledgeDuraion,
    electiveIndustryBlockKnowledgeDuraion: electiveIndustryBlockKnowledgeDuraion,
    electiveIndustryBlockKnowledgeTotalDuraion: electiveIndustryBlockKnowledgeTotalDuraion,
    industryGroupKnowledgeDuration:
      compulsoryIndustryGroupKnowledgeDuration +
      electiveIndustryGroupKnowledgeDuration,
    compulsoryIndustryGroupKnowledgeDuration: compulsoryIndustryGroupKnowledgeDuration,
    electiveIndustryGroupKnowledgeDuration: electiveIndustryGroupKnowledgeDuration,
    electiveIndustryGroupKnowledgeTotalDuration: electiveIndustryGroupKnowledgeTotalDuration,
    industryKnowledgeDuration:
      compulsoryIndustryKnowledgeDuration +
      electiveIndustryKnowledgeDuration +
      extraCompulsoryIndustryKnowledgeDuration +
      extraElectiveIndustryKnowledgeDuration +
      graduationalThesisDuration,
    compulsoryIndustryKnowledgeDuration: compulsoryIndustryKnowledgeDuration,
    electiveIndustryKnowledgeDuration: electiveIndustryKnowledgeDuration,
    electiveIndustryKnowledgeTotalDuration: electiveIndustryKnowledgeTotalDuration,
    extraCompulsoryIndustryKnowledgeDuration: extraCompulsoryIndustryKnowledgeDuration,
    extraElectiveIndustryKnowledgeDuration: extraElectiveIndustryKnowledgeDuration,
    extraElectiveIndustryKnowledgeTotalDuration: extraElectiveIndustryKnowledgeTotalDuration,
    graduationalThesisDuration: graduationalThesisDuration,
  };
  var [listIdSubject1, setListIdSubject1] = useState([]);
  var [listIdSubject2, setListIdSubject2] = useState([]);
  const createNewVersionEducationalProgram = () => {
    const educationalProgramSubject1 = listIdSubject1.map((x) => ({
      educationalProgramId: `${newId}`,
      subjectId: `${x}`,
      obligation: 1,
    }));
    const educationalProgramSubject2 = listIdSubject2.map((x) => ({
      educationalProgramId: `${newId}`,
      subjectId: `${x}`,
      obligation: 0,
    }));

    if (
      newEducationalProgram.version != "" ||
      newEducationalProgram.duration != ""
    ) {
      // addEducationalProgramStart(newEducationalProgram);
      console.log(newEducationalProgram);
      educationalProgramSubject1.forEach((x) => {
        // addSubjectSubjectIdStart(x);
        console.log(x);
        // console.log("next: ");
      });
      educationalProgramSubject2.forEach((x) => {
        // addSubjectSubjectIdStart(x);
        console.log(x);
        // console.log("next: ");
      });
      alert("add new version educational program successfull");
    } else {
      alert("add new version educational program failed");
    }

    console.log(educationalProgramSubject1);
    console.log(educationalProgramSubject2);
  };
  const [m1Total, setM1Total] = useState(0);
  const [m2Total, setM2Total] = useState(0);
  const [m2TCTotal, setM2TCTotal] = useState(0);
  const [m3Total, setM3Total] = useState(0);
  const [m3TCTotal, setM3TCTotal] = useState(0);
  const [m4Total, setM4Total] = useState(0);
  const [m4TCTotal, setM4TCTotal] = useState(0);
  const [m5Total, setM5Total] = useState(0);
  const [m5TCTotal, setM5TCTotal] = useState(0);
  const [m6Total, setM6Total] = useState(0);
  const [m6TCTotal, setM6TCTotal] = useState(0);
  const [m7Total, setM7Total] = useState(0);

  const getCheck1 = async (e) => {
    await getSubjects();
    if (e.target.checked) {
      setListIdSubject1((oldArray) => [...oldArray, e.target.value]);
      const clickedSubject = totalSubjects.filter(
        (x) => x.id == e.target.value
      );
      // console.log(totalSubjects);
      // console.log(clickedSubject);
      switch (clickedSubject[0].type) {
        case "Khối kiến thức chung":
          setM1Total(m1Total + clickedSubject[0].duration);
          setGeneralKnowledgeDuration(m1Total + clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo lĩnh vực":
          setM2Total(m2Total + clickedSubject[0].duration);
          setFieldedKnowledgeDuration(m2Total + clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo khối ngành":
          setM3Total(m3Total + clickedSubject[0].duration);
          setCompulsoryIndustryBlockKnowledgeDuraion(
            m3Total + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức theo nhóm ngành":
          setM4Total(m4Total + clickedSubject[0].duration);
          setCompulsoryIndustryGroupKnowledgeDuration(
            m4Total + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành":
          setM5Total(m5Total + clickedSubject[0].duration);
          setCompulsoryIndustryKnowledgeDuration(
            m5Total + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành bổ trợ":
          setM6Total(m6Total + clickedSubject[0].duration);
          setExtraCompulsoryIndustryKnowledgeDuration(
            m6Total + clickedSubject[0].duration
          );
          break;
      }
    } else {
      setListIdSubject1(listIdSubject1.filter((x) => x != e.target.value));
      const clickedSubject = totalSubjects.filter(
        (x) => x.id == e.target.value
      );

      switch (clickedSubject[0].type) {
        case "Khối kiến thức chung":
          setM1Total(m1Total - clickedSubject[0].duration);
          setGeneralKnowledgeDuration(m1Total - clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo lĩnh vực":
          setM2Total(m2Total - clickedSubject[0].duration);
          setFieldedKnowledgeDuration(m2Total - clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo khối ngành":
          setM3Total(m3Total - clickedSubject[0].duration);
          setCompulsoryIndustryBlockKnowledgeDuraion(
            m3Total - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức theo nhóm ngành":
          setM4Total(m4Total - clickedSubject[0].duration);
          setCompulsoryIndustryGroupKnowledgeDuration(
            m4Total - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành":
          setM5Total(m5Total - clickedSubject[0].duration);
          setCompulsoryIndustryKnowledgeDuration(
            m5Total - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành bổ trợ":
          setM6Total(m6Total - clickedSubject[0].duration);
          setExtraCompulsoryIndustryKnowledgeDuration(
            m6Total - clickedSubject[0].duration
          );
          break;
      }
    }
  };
  const getCheck2 = async (e) => {
    await getSubjects();
    if (e.target.checked) {
      setListIdSubject2((oldArray) => [...oldArray, e.target.value]);
      const clickedSubject = totalSubjects.filter(
        (x) => x.id == e.target.value
      );
      switch (clickedSubject[0].type) {
        case "Khóa luận tốt nghiệp":
          setM7Total(m7Total + clickedSubject[0].duration);
          setGraduationalThesisDuration(m7Total + clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo lĩnh vực":
          setM2TCTotal(m2TCTotal + clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo khối ngành":
          setM3TCTotal(m3TCTotal + clickedSubject[0].duration);
          setElectiveIndustryBlockKnowledgeTotalDuraion(
            m3TCTotal + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức theo nhóm ngành":
          setM4TCTotal(m4TCTotal + clickedSubject[0].duration);
          setElectiveIndustryGroupKnowledgeTotalDuration(
            m4TCTotal + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành":
          setM5TCTotal(m5TCTotal + clickedSubject[0].duration);
          setElectiveIndustryKnowledgeTotalDuration(
            m5TCTotal + clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành bổ trợ":
          setM6TCTotal(m6TCTotal + clickedSubject[0].duration);
          setExtraElectiveIndustryKnowledgeTotalDuration(
            m6TCTotal + clickedSubject[0].duration
          );
          break;
      }
    } else {
      setListIdSubject2(listIdSubject2.filter((x) => x != e.target.value));
      const clickedSubject = totalSubjects.filter(
        (x) => x.id == e.target.value
      );
      console.log(countTotalSubjects);
      console.log(clickedSubject);
      switch (clickedSubject[0].type) {
        case "Khóa luận tốt nghiệp":
          setM7Total(m7Total - clickedSubject[0].duration);
          setGraduationalThesisDuration(m7Total - clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo lĩnh vực":
          setM2TCTotal(m2TCTotal - clickedSubject[0].duration);
          break;
        case "Khối kiến thức theo khối ngành":
          setM3TCTotal(m3TCTotal - clickedSubject[0].duration);
          setElectiveIndustryBlockKnowledgeTotalDuraion(
            m3TCTotal - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức theo nhóm ngành":
          setM4TCTotal(m4TCTotal - clickedSubject[0].duration);
          setElectiveIndustryGroupKnowledgeTotalDuration(
            m4TCTotal - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành":
          setM5TCTotal(m5TCTotal - clickedSubject[0].duration);
          setElectiveIndustryKnowledgeTotalDuration(
            m5TCTotal - clickedSubject[0].duration
          );
          break;
        case "Khối kiến thức ngành bổ trợ":
          setM6TCTotal(m6TCTotal - clickedSubject[0].duration);
          setExtraElectiveIndustryKnowledgeTotalDuration(
            m6TCTotal - clickedSubject[0].duration
          );
          break;
      }
    }
  };

  return (
    <div>
      <h1>
        Thêm phiên bản cho chương trình đào tạo {educationalProgramDetail.name}
      </h1>
      <Form>
        <Form.Row className="educationalProgramInput">
          <Col>
            <Form.Label>Phiên bản</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập phiên bản"
              onChange={getVersionEducationalProgram}
            />
          </Col>
          <Col>
            <Form.Label>Số tín chỉ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số tín chỉ"
              onChange={getDurationEducationalProgram}
            />
          </Col>
        </Form.Row>
        <Form.Row className="educationalProgramInput">
          <Form.Label>Quyết định phê duyệt</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập nội dung"
            onChange={getReferenceEducationalProgram}
          />
        </Form.Row>
      </Form>
      <hr />
      <h3>Khối kiến thức chung: {m1Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM1.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input
                  onChange={getCheck1}
                  // onChange={getC(s.subject.duration)}
                  value={s.subject.id}
                  // defaultChecked={true}
                />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM1={updateSubjectM1}
        remainingSubjects={totalSubjectsM1}
        listSubjects={listSubjectsM1}
      ></Search>
      <hr />
      <h3>Khối kiến thức theo lĩnh vực bắt buộc: {m2Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM2.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input
                  onChange={getCheck1}
                  value={s.subject.id}
                  // defaultChecked={true}
                />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM2={updateSubjectM2}
        remainingSubjects={totalSubjectsM2}
        listSubjects={listSubjectsM2}
      ></Search>
      <hr />
      <h3>Khối kiến thức theo lĩnh vực tự chọn: {m2TCTotal} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM2TC.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Col className="durationInAdd">
        <Form.Label>Số tín chỉ cần học</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập số tín chỉ"
          // onChange={getDurationEducationalProgram}
        />
      </Col>
      <SearchTC
        updateSubjectM2TC={updateSubjectM2TC}
        remainingSubjects={totalSubjectsM2}
        listSubjects={listSubjectsM2}
      ></SearchTC>
      <hr />
      <h3>Khối kiến thức theo khối ngành bắt buộc: {m3Total} tín chỉ </h3>
      <Form>
        <FormCheck>
          {newSubjectM3.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input
                  onChange={getCheck1}
                  value={s.subject.id}
                  // defaultChecked={true}
                />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM3={updateSubjectM3}
        remainingSubjects={totalSubjectsM3}
        listSubjects={listSubjectsM3}
      ></Search>
      <hr />
      <h3>Khối kiến thức theo khối ngành tự chọn: {m3TCTotal} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM3TC.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Col className="durationInAdd">
        <Form.Label>Số tín chỉ cần học</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập số tín chỉ"
          onChange={getElectiveIndustryBlockKnowledgeDuraion}
        />
      </Col>
      <SearchTC
        updateSubjectM3TC={updateSubjectM3TC}
        remainingSubjects={totalSubjectsM3}
        listSubjects={listSubjectsM3}
      ></SearchTC>
      <hr />
      <h3>Khối kiến thức nhóm ngành bắt buộc: {m4Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM4.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input
                  onChange={getCheck1}
                  value={s.subject.id}
                  // defaultChecked={true}
                />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM4={updateSubjectM4}
        remainingSubjects={totalSubjectsM4}
        listSubjects={listSubjectsM4}
      ></Search>
      <hr />
      <h3>Khối kiến thức nhóm ngành tự chọn: {m4TCTotal} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM4TC.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Col className="durationInAdd">
        <Form.Label>Số tín chỉ cần học</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập số tín chỉ"
          onChange={getElectiveIndustryGroupKnowledgeDuration}
        />
      </Col>
      <SearchTC
        updateSubjectM4TC={updateSubjectM4TC}
        remainingSubjects={totalSubjectsM4}
        listSubjects={listSubjectsM4}
      ></SearchTC>
      <hr />
      <h3>Khối kiến thức ngành bắt buộc: {m5Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM5.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck1} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM5={updateSubjectM5}
        remainingSubjects={totalSubjectsM5}
        listSubjects={listSubjectsM5}
      ></Search>
      <hr />
      <h3>Khối kiến thức ngành tự chọn: {m5TCTotal} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM5TC.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Col className="durationInAdd">
        <Form.Label>Số tín chỉ cần học</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập số tín chỉ"
          onChange={getElectiveIndustryKnowledgeDuration}
        />
      </Col>
      <SearchTC
        updateSubjectM5TC={updateSubjectM5TC}
        remainingSubjects={totalSubjectsM5}
        listSubjects={listSubjectsM5}
      ></SearchTC>
      <hr />
      <h3>Khối kiến thức ngành bổ trợ bắt buộc: {m6Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM6.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck1} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Search
        updateSubjectM6={updateSubjectM6}
        remainingSubjects={totalSubjectsM6}
        listSubjects={listSubjectsM6}
      ></Search>
      <hr />
      <h3>Khối kiến thức ngành bổ trợ tự chọn: {m6TCTotal} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM6TC.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <Col className="durationInAdd">
        <Form.Label>Số tín chỉ cần học</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập số tín chỉ"
          onChange={getExtraElectiveIndustryKnowledgeDuration}
        />
      </Col>
      <SearchTC
        updateSubjectM6TC={updateSubjectM6TC}
        remainingSubjects={totalSubjectsM6}
        listSubjects={listSubjectsM6}
      ></SearchTC>
      <hr />
      <h3>Khóa luận tốt nghiệp: {m7Total} tín chỉ</h3>
      <Form>
        <FormCheck>
          {newSubjectM7.map((s) => {
            return (
              <div key={s.subject.id}>
                <FormCheck.Input onChange={getCheck2} value={s.subject.id} />
                <FormCheck.Label>
                  {s.subject.name} - {s.subject.code}
                </FormCheck.Label>
              </div>
            );
          })}
        </FormCheck>
      </Form>
      <SearchTC
        updateSubjectM7={updateSubjectM7}
        remainingSubjects={totalSubjectsM7}
        listSubjects={listSubjectsM7}
      ></SearchTC>
      <hr />
      <Button
        className="ButtonAdd"
        variant="success"
        onClick={createNewVersionEducationalProgram}
      >
        Thêm mới phiên bản
      </Button>
      <br />
      <br /> <br />
    </div>
  );
}
