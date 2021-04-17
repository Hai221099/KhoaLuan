import Layout from "../../Layout/Layout";
import { useEffect, useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import ClassListButton from "../../components/others/ClassListButton";
import AddFaculty from "../../containers/Faculty/AddFaculty";
import EditFaculty from "../../containers/Faculty/EditFaculty";
import SearchOnPage from "../../components/otherFunctions/SearchOnPage";

export default function Faculty(props) {
  const { getFaculties, faculty } = props;
  useEffect(() => {
    getFaculties();
  }, [getFaculties]);
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(faculty);
  }, [faculty]);
  const getKey = useCallback(
    (e) => {
      console.log(e);
      const result = faculty.filter(
        (faculty) =>
          faculty.name.toLowerCase().includes(e) || faculty.name.includes(e)
      );
      setNewList(result);
    },
    [newList]
  );
  // const a = () => {
  //   var b = 50;
  //   var c = 50;
  //   for (var i = 0; i < 17; i++) {
  //     b = (b + 60) * 1.3;
  //   }
  //   console.log(b);
  //   for (var i = 0; i < 30; i++) {
  //     c *= 1.2;
  //   }
  //   console.log(c);
  // };
  // a();
  return (
    <Layout>
      <h1>Danh sách khoa</h1>
      <SearchOnPage list={faculty} getKey={(e) => getKey(e)}></SearchOnPage>
      <AddFaculty></AddFaculty>
      <Table className="List Container">
        <thead>
          <tr>
            {/* <th>Số thứ tự</th> */}
            <th>ID</th>
            <th>Mã khoa</th>
            <th>Tên khoa</th>
          </tr>
        </thead>
        <tbody>
          {newList.map((faculty, index) => {
            index = index + 1;
            return (
              <tr key={faculty.id}>
                {/* <td>{index}</td> */}
                <td>{faculty.id}</td>
                <td>{faculty.code}</td>
                <td>{faculty.name}</td>
                <td>
                  <EditFaculty faculty={faculty}></EditFaculty>
                </td>
                <td>
                  <ClassListButton id={faculty.id}></ClassListButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
}
