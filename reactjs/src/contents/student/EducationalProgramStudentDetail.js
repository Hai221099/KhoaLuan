import { useEffect } from "react";
// import "./educationalProgramDetail.css";
import EducationalProgramDetailPage from "../../contents/educationalProgram/EducationalProgramDetailPage";
// import EducationalProgramDetailPage from "../../";
import { fakeData } from "./fakeData";
import EducationalProgramGeneral from "./../../contents/educationalProgram/EducationalProgramGenenral";
import EducationalProgramSubject from "../../contents/educationalProgram/EducationalProgramSubject";

export default function EducationalProgramDetail(props) {
  const {
    match,
    getHV,
    studentDetail,
    getEducationalProgramById,
    educationalProgramDetail,
    getSubjectById,
    subject,
  } = props;
  // const id = match.location.pathname.slice(15);
  const id = 1;
  useEffect(() => {
    getHV(id);
  }, [getHV]);

  useEffect(() => {
    if (studentDetail.educationalProgramId != null) {
      getSubjectById(studentDetail.educationalProgramId);
      getEducationalProgramById(studentDetail.educationalProgramId);
    }
  }, [studentDetail]);
  const array = fakeData.filter((x) => x.idSV == studentDetail.id);
  console.log(array);
  return (
    <div>
      <br />
      <h5>Họ tên: {studentDetail.name}</h5>
      <h5>Mã số sinh viên: {studentDetail.code}</h5>
      <br /> <br />
      <EducationalProgramGeneral
        educationalProgram={educationalProgramDetail}
      ></EducationalProgramGeneral>
      <EducationalProgramSubject
        subject={array}
        educationalProgram={educationalProgramDetail}
      ></EducationalProgramSubject>
    </div>
  );
}
