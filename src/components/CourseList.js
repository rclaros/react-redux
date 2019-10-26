import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as courseApi from "../api/courseApi";

function CourseList({ courses, actions }) {
  const handleDeleteCourse = function(id){
    courseApi.deleteCourse(id).then(() => {
      actions.deleteCourse(id);
    });
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Professor</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) handleDeleteCourse(course.id) } }
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.professorName}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      professorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;