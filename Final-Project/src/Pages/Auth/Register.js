import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import { Form, Input, Button, message } from "antd";

const Register = () => {
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleSubmit = () => {
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        console.log(res);
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
        message.success("Selamat Anda Berhasil Membuat Akun");
      })
      .catch((err) => {
        message.error("Data yang diinput harus sesuai");
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "name": {
        setInput({ ...input, name: value });
        break;
      }
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
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 12,
      span: 10,
    },
  };

  return (
    <section>
      <h1 style={{ textAlign: "center", margin: "40px" }}>
        <strong style={{ fontWeight: "bold", fontSize: "40px" }}>
          Daftar Akun
        </strong>
      </h1>
      <div style={{ width: "60%", margin: "0 auto", display: "block", }}>
        <div
          style={{
            marginBottom: "130px",
          }}
        >
          <Form
          style={{display: "flex", flexDirection: "column"}}
            {...layout}
            name="registration"
            onSubmitCapture={handleSubmit}
          >
            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={input.name}
              />
            </Form.Item>

            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={input.email}
              />
            </Form.Item>

            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
