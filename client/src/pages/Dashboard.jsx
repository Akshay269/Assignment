import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { auth, get_courses, get_userdet_by_id } from "../controllers/user";
import Block from "../components/Block";

export default function Dashboard() {
  const navigate = useNavigate();
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  let [name, setName] = useState("");
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
            id: JSON.parse(
              atob(localStorage.getItem("token").split(".")[1])
            ).id,
          };
          get_courses(obj).then((data) => {
            setCourses(data.message);
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
      <h1>Earn free verified certifications in:</h1>
      <div>
        {/* {courses.map((course) => (
          <div key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.duration}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}
