import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

const ChangePassword = () => {
  let history = useHistory();
  const [user] = useContext(UserContext);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleSubmit = () => {
    if (input.new_password !== input.new_confirm_password) {
      message.info("Password baru tidak match!");
    } else {
      axios
        .post(
          "https://backendexample.sanbersy.com/api/change-password",
          {
            current_password: input.current_password,
            new_password: input.new_password,
            new_confirm_password: input.new_confirm_password,
          },
          { headers: { Authorization: `Bearer ${user.token}` } }
        )
        .then((res) => {
          message.success(res.data);
          history.push("/");
        })
        .catch((err) => {
          alert(err);
          message.error("Password yang diinput harus sesuai dan benar");
        });
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    switch (name) {
      case "current_password": {
        setInput({ ...input, current_password: value });
        break;
      }
      case "new_password": {
        setInput({ ...input, new_password: value });
        break;
      }
      case "new_confirm_password": {
        setInput({ ...input, new_confirm_password: value });
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
      offset: 4,
      span: 10,
    },
  };

  return (
    <section>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        <strong style={{ fontWeight: "bold", fontSize: "30px" }}>
          Change Password
        </strong>
      </h1>
      <div style={{ width: "50%", margin: "0 auto", display: "block", textAlign: "center" }}>
        <div
          style={{
            padding: "20px",
            marginBottom: "90px",
          }}
        >
          <Form {...layout} name="registration" onSubmitCapture={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <Form.Item label="Nama Pengguna" style={{justifyContent: "space-evenly"}}>
              <Input type="text" value={user.name} disabled />
            </Form.Item>
            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Password Lama"
              name="current password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                type="password"
                name="current_password"
                onChange={handleChange}
                value={input.current_password}
              />
            </Form.Item>

            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Password Baru"
              name="new password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                type="password"
                name="new_password"
                onChange={handleChange}
                value={input.new_password}
              />
            </Form.Item>

            <Form.Item style={{justifyContent: "space-evenly"}}
              label="Konfirmasi Password Baru"
              name="new confirm password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                type="password"
                name="new_confirm_password"
                onChange={handleChange}
                value={input.new_confirm_password}
              />
            </Form.Item>
            <Form.Item {...tailLayout} style={{justifyContent: "space-evenly"}}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
