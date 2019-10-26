import React from "react";
import CourseForm from "../containers/CourseForm";

const ManageCoursePage = () => {
  return (
    <>
      <h2>Manage Course</h2>
      {/*<Prompt when={true} message="Are you sure you want to leave?" />*/}
      {/*props.match.params.slug*/}
      <CourseForm />
    </>
  );
}

export default ManageCoursePage;