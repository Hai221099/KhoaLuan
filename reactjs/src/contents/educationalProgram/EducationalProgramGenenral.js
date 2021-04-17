export default function EducationalProgramGeneral(props) {
  const { educationalProgram } = props;
  return (
    <div>
      <h4>
        Chương trình đào tạo {educationalProgram.name} phiên bản{" "}
        {educationalProgram.version}
      </h4>
      <br />
      <h5>Phần I: Tóm tắt yêu cầu khung chương trình đào tạo</h5>
      <h5>
        Tổng số tín chỉ của chương trình đào tạo {educationalProgram.duration}{" "}
        tín chỉ
      </h5>
      <p>
        (Chưa tính các học phần Giáo dục thể chất, Giáo dục Quốc phòng - An
        ninh)
      </p>
      <h5>
        Khối kiến thức chung: {educationalProgram.generalKnowledgeDuration} tín
        chỉ
      </h5>
      <h5>
        Khối kiến thức theo lĩnh vực:{" "}
        {educationalProgram.fieldedKnowledgeDuration} tín chỉ
      </h5>
      <h5>
        Khối kiến thức theo khối ngành:{" "}
        {educationalProgram.industryBlockKnowledgeDuraion} tín chỉ
      </h5>
      <p>
        + Các học phần bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryBlockKnowledgeDuraion} tín chỉ
      </p>
      <p>
        + Các học phần tự chọn:{" "}
        {educationalProgram.electiveIndustryBlockKnowledgeDuraion}/
        {educationalProgram.electiveIndustryBlockKnowledgeTotalDuraion} tín chỉ
      </p>
      <h5>
        Khối kiến thức theo nhóm ngành:{" "}
        {educationalProgram.industryGroupKnowledgeDuration} tín chỉ
      </h5>
      <p>
        + Các học phần bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryGroupKnowledgeDuration} tín chỉ
      </p>
      <p>
        + Các học phần tự chọn:{" "}
        {educationalProgram.electiveIndustryGroupKnowledgeDuration}/
        {educationalProgram.electiveIndustryGroupKnowledgeTotalDuration} tín chỉ
      </p>
      <h5>
        Khối kiến thức ngành: {educationalProgram.industryKnowledgeDuration} tín
        chỉ
      </h5>
      <p>
        {" "}
        + Các học phần bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryKnowledgeDuration} tín chỉ
      </p>
      <p>
        {" "}
        + Các học phần tự chọn:{" "}
        {educationalProgram.electiveIndustryKnowledgeDuration}/
        {educationalProgram.electiveIndustryKnowledgeTotalDuration} tín chỉ
      </p>
      <p>
        {" "}
        + Các học phần bổ trợ bắt buộc:{" "}
        {educationalProgram.extraCompulsoryIndustryKnowledgeDuration} tín chỉ
      </p>
      <p>
        {" "}
        + Các học phần bổ trợ tự chọn:{" "}
        {educationalProgram.extraElectiveIndustryKnowledgeDuration}/
        {educationalProgram.extraElectiveIndustryKnowledgeTotalDuration} tín chỉ
      </p>
      <p>
        + Khóa luận tốt nghiệp/ các học phần thay thế khóa luận tốt nghiệp:{" "}
        {educationalProgram.graduationalThesisDuration} tín chỉ
      </p>
    </div>
  );
}
