import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { Dropdown } from "react-bootstrap";

export default function Setting(props) {
  const logout = () => {
    // localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Tài khoản
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
