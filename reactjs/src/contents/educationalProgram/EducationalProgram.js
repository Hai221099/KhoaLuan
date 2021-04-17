import propTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../Layout/sidebar.css";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./../educationalProgram.css";
import { Dropdown } from "react-bootstrap";
// import Pagination from "../components/otherFunctions/Pagination";
import AddNewVersionEducationalProgram from "../../components/adds/AddNewVersionEducationalProgram";
// import Test from "../components/others/TestDropDown";
import SearchOnPage from "../../components/otherFunctions/SearchOnPage";
import Setting from "../public/setting";

export default function EducationalProgramPage(props) {
  const { educationalProgramList, getEducationalPrograms } = props;
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(
      educationalProgramList.filter(
        (educationalProgram) => educationalProgram.version == 2015
      )
    );
  }, [educationalProgramList]);
  useEffect(() => {
    getEducationalPrograms();
  }, [getEducationalPrograms]);

  // console.log(educationalProgramList);
  const educationalProgramList2 = educationalProgramList.filter(
    (educationalProgram) => educationalProgram.version == 2015
  );

  const test = (e) => {
    console.log(e.target.value);
    window.location.href = `educationalProgram/${e.target.value}`;
  };
  const getKey = useCallback(
    (e) => {
      console.log(e);
      const result = educationalProgramList2.filter(
        (educationalProgram) =>
          educationalProgram.name.toLowerCase().includes(e) ||
          educationalProgram.name.includes(e)
      );
      setNewList(result);
    },
    [newList]
  );
  return (
    <Layout>
      <div>
        <Setting></Setting>
        <h1>Danh sách chương trình đào tạo</h1>
        <br />
        <SearchOnPage
          list={educationalProgramList2}
          getKey={(e) => getKey(e)}
        ></SearchOnPage>
        <br />
        <Table className="List Container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chương trình</th>
              {/* <th>Mã chương trình</th> */}
              <th>Phân loại</th>
              {/* <th>Phiên bản</th> */}

              <th>Thông tin chi tiết</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {newList.map((educationalProgram) => {
              const educationalProgramList3 = educationalProgramList.filter(
                (x) => x.name == educationalProgram.name
              );
              return (
                <tr key={educationalProgram.id}>
                  <td>{educationalProgram.id}</td>
                  <td>{educationalProgram.name}</td>
                  {/* <td>{educationalProgram.code}</td> */}
                  <td>{educationalProgram.type}</td>
                  {/* <td>{educationalProgram.version}</td> */}
                  {/* <td>{educationalProgram.duration}</td> */}
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Chọn phiên bản
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {educationalProgramList3.map((x) => {
                          return (
                            <Dropdown.Item
                              key={x.id}
                              href={`/admin/educationalProgram/${x.id}`}
                              // to={`/admin/educationalProgram/${x.id}`}
                            >
                              {/* <Link to={`educationalProgram/${x.id}`}> */}
                              Phiên bản{x.version}
                              {/* </Link> */}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <AddNewVersionEducationalProgram
                      id={educationalProgram.id}
                    ></AddNewVersionEducationalProgram>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <Pagination total={17}></Pagination> */}
      </div>
    </Layout>
  );
}
