import React from "react";
import { Layout } from "antd";

import { SmileTwoTone, GithubOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const footer = () => {
  return (
    <Footer
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: '30px',
        justifyContent: "space-between",
        backgroundColor: "#7C83FD",
        color: "white",
        textAlign: "center",
        width: "100%",
        height: "8%",
      }}
    >
      <a target="blank" href="https://github.com/bayuik/">
        <GithubOutlined style={{fontSize: '30px', color: "#fff"}} />
      </a>
      <p>
        <strong>
          Created With <SmileTwoTone /> in Bojonegoro - &copy; 2021
        </strong>
      </p>
    </Footer>
  );
};

export default footer;
