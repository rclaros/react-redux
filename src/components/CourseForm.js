import React from "react";
import TextInput from "./common/TextInput";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

class CourseForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({target}) {
    this.props.actions.saveCourseEditorData({
      ...this.props.editorData,
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const me = this, props = me.props;
    if (!me.formIsValid()) {
      return;
    }
    courseApi.saveCourse(props.editorData).then(savedCourse=>{
      props.professors.forEach(element => {
        if (savedCourse.professorId === element.id) {
          savedCourse.professorName = element.name;
        }
      });
      props.actions.addCourse(savedCourse);
      //props.history.push("/courses");
      toast.success("Course saved.");
    },
    error=>{
      console.log('ocurrio un error al guardar el curso');
    })
    
  }
  formIsValid() {
    const {editorData} = this.props;
    const _errors = {};
    if (!editorData.title) _errors.title = "Title is required";
    if (!editorData.professorId) _errors.professorId = "professor ID is required";
    if (!editorData.category) _errors.category = "Category is required";
    this.props.actions.setCourseEditionError(_errors);
    return Object.keys(_errors).length === 0;
  }
  render() {
    const { professors, editorData, editionError } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          id="title"
          name="title"
          label="Title"
          onChange={this.handleChange}
          value={editorData.title}
          error={editionError.title}
        />
        <div className="form-group">
          <label htmlFor="author">Professor</label>
          <div className="field">
            <select
              id="professor"
              name="professorId"
              onChange={this.handleChange}
              className="form-control"
              value={editorData.professorId || ""}
            >
              {professors.map((professor, key) => {
                return (
                  <option key={key} value={professor.id}>{professor.name}</option>
                );
              })}
            </select>
          </div>
          {editionError.professorId && (
            <div className="alert alert-danger">{editionError.professorId}</div>
          )}
        </div>

        <TextInput
          id="category"
          name="category"
          label="Category"
          onChange={this.handleChange}
          value={editorData.category}
          error={editionError.category}
        />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    );
  }
}

export default CourseForm;