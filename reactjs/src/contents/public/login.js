import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

async function loginUser(credentials) {
  return fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login(props) {
  const { loginStart, loginSucceed, userInfor, getUser } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const getUsername = (e) => setUsername(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);
  const user = {
    username: username,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser({
      username,
      password,
    });
    getUser(result);

    console.log(result.accessToken);
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="login-title">
          <h3>Đăng nhập</h3>
        </div>
        <br />
        <Form.Group>
          <Form.Label>Tên đăng nhập </Form.Label>
          <Form.Control type="text" onChange={getUsername} />
          <Form.Label>Mật khẩu </Form.Label>
          <Form.Control type="password" onChange={getPassword} />
        </Form.Group>
        <Button className="login-dispatch" onClick={handleSubmit}>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}
