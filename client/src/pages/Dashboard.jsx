import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { auth, get_courses } from "../controllers/user";
import Course from "../components/Course";
import "../styles/course.css";

export default function Dashboard() {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  let [courses, setCourses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let obj = {
        token: localStorage.getItem("token"),
      };
      auth(obj).then((data) => {
        if (data.tag) {
          setIsUserLoggedIn(true);
          let obj = {
            id: JSON.parse(atob(localStorage.getItem("token").split(".")[1]))
              .id,
          };
          get_courses(obj).then((data) => {
            console.log(data);
            setCourses(data);
          });
        } else {
          setIsUserLoggedIn(false);
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      {isUserLoggedIn ? (
        <div className="dashboard-container">
          <h1 className="dashboard-title"> Welcome to freeCodeCamp.org </h1>
          <p className="dashboard-text">
            "I am not young enough to know everything."
            <p>-Oscar Wilde</p>
          </p>
          <div className="courses-container">
            {courses
              ? courses.map((course) => {
                  return (
                    <Course title={course.title} duration={course.duration} />
                  );
                })
              : ""}
          </div>
        </div>
      ) : (
        <div className="login-message">Please log in to view courses.</div>
      )}
    </>
  );
}
