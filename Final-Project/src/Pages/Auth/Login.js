import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

const Login = () => {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
        message.success("Akun Anda Behasil Login");
        history.push("/");
      })
      .catch((err) => {
        message.error("Email atau Password Anda Salah, Coba Lagi!");
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "email": {
        setInput({ ...input, email: value });
        break;
      }
      case "password": {
        setInput({ ...input, password: value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 5,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 3,
      span: 10,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        <strong style={{ fontWeight: "bold", fontSize: "40px" }}>LOGIN</strong>
      </h1>
      <div style={{marginTop: "100px", marginBottom: "100px"}}>
        <Form
          style={{ display: "flex", flexDirection: "column", width: "50%", margin: "0 auto"}}
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onSubmitCapture={handleSubmit}
        >
          <Form.Item
          style={{justifyContent: "space-evenly"}}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input type="email" name="email" onChange={handleChange} value={input.email} style={{ width: "200px" }} />
          </Form.Item>

          <Form.Item
                    style={{justifyContent: "space-evenly"}}
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password type="password" name="password" onChange={handleChange} value={input.password} style={{ width: "200px"}} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button style={{marginLeft: "220px"}} type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
