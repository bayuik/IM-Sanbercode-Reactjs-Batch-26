import React from "react";
import Main from "./Layout/Main";
import "antd/dist/antd.css";
import "./App.css";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
