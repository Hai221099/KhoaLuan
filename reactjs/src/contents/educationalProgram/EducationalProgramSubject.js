import Table from "react-bootstrap/Table";
import "../educationalProgram.css";

export default function EducationalProgramSubject(props) {
  const { subject, educationalProgram } = props;

  // const id = idEducationalProgram;
  const subjectM1 = subject.filter((x) => x.type === "Khối kiến thức chung");
  const subjectM2 = subject.filter(
    (x) => x.type === "Khối kiến thức theo lĩnh vực"
  );
  // const subjectM3 = subject.filter(
  //   (x) => x.type === "Khối kiến thức theo lĩnh vực"
  // );
  const subjectM4 = subject.filter(
    (x) => x.type === "Khối kiến thức theo khối ngành bắt buộc"
  );
  const subjectM5 = subject.filter(
    (x) => x.type === "Khối kiến thức theo khối ngành tự chọn"
  );
  const subjectM6 = subject.filter(
    (x) => x.type === "Khối kiến thức theo nhóm ngành bắt buộc"
  );
  const subjectM7 = subject.filter(
    (x) => x.type === "Khối kiến thức theo nhóm ngành tự chọn"
  );
  const subjectM8 = subject.filter(
    (x) => x.type === "Khối kiến thức ngành bắt buộc"
  );
  const subjectM9 = subject.filter(
    (x) => x.type == "Khối kiến thức ngành tự chọn"
  );
  const subjectM10 = subject.filter(
    (x) => x.type === "Khối kiến thức bổ trợ bắt buộc"
  );
  const subjectM11 = subject.filter(
    (x) => x.type == "Khối kiến thức bổ trợ tự chọn"
  );
  const subjectM12 = subject.filter((x) => x.type == "Khóa luận tốt nghiệp");
  // console.log(educationalProgramDetail);
  return (
    <div>
      <br />
      <h5>Phần II: Khung chương trình đào tạo:</h5>
      <br />
      <h5>
        Khối kiến thức chung: {educationalProgram.generalKnowledgeDuration} tín
        chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM1.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức theo lĩnh vực:{" "}
        {educationalProgram.fieldedKnowledgeDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM2.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức theo khối ngành bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryBlockKnowledgeDuraion} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM4.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức theo khối ngành tự chọn:{" "}
        {educationalProgram.electiveIndustryBlockKnowledgeDuraion}/
        {educationalProgram.electiveIndustryBlockKnowledgeTotalDuraion} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM5.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức theo nhóm ngành bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryGroupKnowledgeDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM6.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức theo nhóm ngành tự chọn:{" "}
        {educationalProgram.electiveIndustryGroupKnowledgeDuration}/
        {educationalProgram.electiveIndustryGroupKnowledgeTotalDuration} tín chỉ{" "}
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM7.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức ngành bắt buộc:{" "}
        {educationalProgram.compulsoryIndustryKnowledgeDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM8.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức ngành tự chọn:{" "}
        {educationalProgram.electiveIndustryKnowledgeDuration}/
        {educationalProgram.electiveIndustryKnowledgeTotalDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM9.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức ngành - bổ trợ (bắt buộc):{" "}
        {educationalProgram.extraCompulsoryIndustryKnowledgeDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM10.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khối kiến thức ngành - bổ trợ (tự chọn):{" "}
        {educationalProgram.extraElectiveIndustryKnowledgeDuration}/
        {educationalProgram.extraElectiveIndustryKnowledgeTotalDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM11.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <h5>
        Khóa luận tốt nghiệp/ các học phần thay thế khóa luận tốt nghiệp:{" "}
        {educationalProgram.graduationalThesisDuration} tín chỉ
      </h5>
      <Table className="List Container sizeTable" align="center">
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Mã học phần</th>
            <th>Học phần</th>
            <th>Số tín chỉ</th>
            <th>Số giờ học lý thuyết</th>
            <th>Số giờ học thực hành</th>
            <th>Số giờ tự học</th>
            <th>Mã học phần tiên quyết</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {subjectM12.map((x, index) => {
            index = index + 1;
            return (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.code}</td>
                <td>{x.name}</td>
                <td>{x.duration}</td>
                <td>{x.theoriticalHour}</td>
                <td>{x.practicalHour}</td>
                <td>{x.selfstudyHour}</td>
                <td>{x.prerequisiteCode}</td>
                <td
                  className={
                    x.status == "ĐÃ HỌC"
                      ? "colorGreen"
                      : x.status == "ĐANG HỌC"
                      ? "colorBlack"
                      : "colorRed"
                  }
                >
                  {x.status}
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
