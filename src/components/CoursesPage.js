import React from "react";
import CurseList from "../containers/CurseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  return (
    <><h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CurseList /> 
    </>
  );
}

export default CoursesPage;