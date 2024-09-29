import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import CourseInfo from "./Components/CourseInfo/CourseInfo";

function App() {
  return (
    <div className="container-fluid">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <img src={logo} className="text-center bg-info p-3 logo"></img>
        <h1 style={{ marginTop: 20 }}>Online Courses</h1>
      </div>

      {/* <h1 className="text-center bg-info p-3">Online Courses</h1> */}
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;
