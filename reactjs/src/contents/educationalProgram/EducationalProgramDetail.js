import { useEffect } from "react";
import EducationalProgramDetailPage from "./EducationalProgramDetailPage";

export default function EducationalProgramDetail(props) {
  const {
    match,
    getSubjectById,
    subject,
    educationalProgramDetail,
    getEducationalProgramById,
    getSubjectObligationById,
    subjectObligation,
  } = props;
  const id = match.location.pathname.slice(26);

  console.log(match.location.pathname);
  useEffect(() => {
    getEducationalProgramById(id);
  }, [getEducationalProgramById]);
  useEffect(() => {
    getSubjectById(educationalProgramDetail.id);
    getSubjectObligationById(educationalProgramDetail.id);
  }, [educationalProgramDetail]);

  console.log(subjectObligation);
  return (
    <div>
      <EducationalProgramDetailPage
        subject={subject}
        educationalProgramDetail={educationalProgramDetail}
      ></EducationalProgramDetailPage>
    </div>
  );
}
