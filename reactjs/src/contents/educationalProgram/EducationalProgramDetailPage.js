import { useEffect, useState } from "react";
// import "./educationalProgramDetail.css";
import Table from "react-bootstrap/Table";
import "./../educationalProgram.css";
import EducationalProgramGeneral from "./EducationalProgramGenenral";

export default function EducationalProgramDetail(props) {
  const {
    // match,
    idEducationalProgram,
    // getSubjectById,
    subject,
    // getEducationalProgramById,
    educationalProgramDetail,
    // getSubjectObligationById,
    // subjectObligation,
  } = props;

  // const id = idEducationalProgram;
  const subjectM1 = subject.filter((x) => x.type === "Khối kiến thức chung");
  const subjectM2 = subject.filter(
    (x) => x.type === "Khối kiến thức theo lĩnh vực"
  );
  // const subjectM3 = subject.filter(
  //   (x) => x.type === "Khối kiến thức theo lĩnh vực"
  // );
  const subjectM4 = subject.filter(
    (x) => x.type === "Khối kiến thức theo khối ngành"
  );
  // const subjectM5 = subject.filter(
  //   (x) => x.type === "Khối kiến thức theo khối ngành"
  // );
  const subjectM6 = subject.filter(
    (x) => x.type === "Khối kiến thức theo nhóm ngành"
  );
  // const subjectM7 = subject.filter(
  //   (x) => x.type === "Khối kiến thức theo nhóm ngành"
  // );
  const subjectM8 = subject.filter((x) => x.type === "Khối kiến thức ngành");
  // const subjectM9 = subject.filter((x) => x.type == "Khối kiến thức ngành");
  const subjectM10 = subject.filter(
    (x) => x.type === "Khối kiến thức ngành bổ trợ"
  );
  // const subjectM11 = subject.filter(
  //   (x) => x.type == "Khối kiến thức ngành bổ trợ"
  // );
  const subjectM12 = subject.filter(
    (x) =>
      x.type == "Khóa luận tốt nghiệp" ||
      x.type == "Các học phần thay thế khóa luận tốt nghiệp"
  );
  // console.log(educationalProgramDetail);
  return (
    <div>
      <br />
      <EducationalProgramGeneral
        educationalProgram={educationalProgramDetail}
      ></EducationalProgramGeneral>
      <br />
      <br />
      <h3>Phần II: Khung chương trình đào tạo:</h3>
      <br />
      <h3>
        Khối kiến thức chung:{" "}
        {educationalProgramDetail.generalKnowledgeDuration} tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khối kiến thức theo lĩnh vực:{" "}
        {educationalProgramDetail.fieldedKnowledgeDuration} tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khối kiến thức theo khối ngành:{" "}
        {educationalProgramDetail.industryBlockKnowledgeDuraion} tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khối kiến thức theo nhóm ngành:{" "}
        {educationalProgramDetail.industryGroupKnowledgeDuration} tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khối kiến thức ngành:{" "}
        {educationalProgramDetail.industryKnowledgeDuration} tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khối kiến thức ngành - bổ trợ:{" "}
        {educationalProgramDetail.extraCompulsoryIndustryKnowledgeDuration +
          educationalProgramDetail.extraElectiveIndustryKnowledgeDuration}{" "}
        tín chỉ
      </h3>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
      <br />
      <h3>
        Khóa luận tốt nghiệp:{" "}
        {educationalProgramDetail.graduationalThesisDuration} tín chỉ
      </h3>
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
            <th>Nhóm môn học</th>
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
                <td>{x.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
