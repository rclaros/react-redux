import fetch from 'cross-fetch'

import * as types from '../constants/ActionTypes'

export const addCourse = course => ({ type: types.ADD_COURSE, course })
export const saveCourseEditorData = editorData => ({ type: types.SAVE_COURSE_EDITOR_DATA, editorData })
export const setCourseEditionError = editionError => ({ type: types.SET_COURSE_EDITION_ERROR, editionError })
export const deleteCourse = id => ({ type: types.DELETE_COURSE, id })
export const loadCourses = (courses) => ({ type: types.LOAD_COURSES, courses })
export const loadProfessors = (professors) => ({ type: types.LOAD_PROFESSORS, professors })

/**
 * Get server data courses and professors
 */
export function fetchServerData() {
  return function (dispatch) {
    // request courses
    return fetch(process.env.REACT_APP_API_URL + "/courses/")
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred loading courses', error)
      )
      .then(rawCurses => {
        // request professors
        return fetch(process.env.REACT_APP_API_URL + "/professors/")
          .then(
            response => response.json(),
            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895
            error => console.log('An error occurred loading courses', error)
          )
          .then(professors => {
            let courses = [];
            if (professors.length > 0) {
              rawCurses.map(item => {
                let new_item = Object.assign({}, item);
                professors.map(element => {
                  if (item.professorId === element.id) {
                    new_item.professorName = element.name;
                  }
                });
                courses.push(new_item);
              });
              // Informa la carga correcta de la data
              dispatch(loadCourses(courses))
              dispatch(loadProfessors(professors))
            }
          }
          )
      }
      )
  }
}