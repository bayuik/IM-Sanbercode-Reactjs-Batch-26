import React, { useContext } from "react";
import { Layout, Image, Menu } from "antd";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import Logo from "./canva.png";
import "../App.css";

const { Header } = Layout;

const Nav = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.clear()
  };

  return (
    <Layout className="layout">
      <Header style={{backgroundColor: "#7C83FD"}}>
        <Image width={180} src={Logo}/>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ float: "right", backgroundColor: "#7C83FD" }}
        >
          <Menu.Item >
            <Link to="/">Home</Link>
          </Menu.Item>
          {user === null && (
                <Menu.Item >
                    <Link to="/login">Login</Link>
                </Menu.Item>
          )}
          {user === null && (
                <Menu.Item >
                    <Link to="/register">Register</Link>
                </Menu.Item>
          )}
          {user && (
                <Menu.Item >
                    <Link to="/movies">Admin</Link>
                </Menu.Item>
          )}
          {user !== null && (
              <>
                <Menu.Item style={{background: "#7C83FD", float: 'left'}}><strong>Hi {user.name}</strong></Menu.Item>
                <Menu.Item><Link to="/change-password">Change Password</Link></Menu.Item>
                <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
              </>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Nav;
