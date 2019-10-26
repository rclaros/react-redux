import {
  ADD_COURSE,
  DELETE_COURSE,
  LOAD_COURSES,
  SET_COURSE_EDITION_ERROR,
  SAVE_COURSE_EDITOR_DATA
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  courseDefaults: {
    id: null,
    slug: "",
    title: "",
    professorId: null,
    category: ""
  },
  editionError: {},
  editorData: {}
}

export default function courses(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        data: [...state.data, action.course]
      };

    case DELETE_COURSE:
      return {
        ...state,
        data: state.data.filter(course =>
          course.id !== action.id
        )
      };
    case SET_COURSE_EDITION_ERROR:
      return {
        ...state,
        editionError: action.editionError
      };
      case SAVE_COURSE_EDITOR_DATA:
        console.log('save call');
          return {
            ...state,
            editorData: action.editorData
          };
    case LOAD_COURSES:
      return {
        ...state,
        data: action.courses
      };

    default:
      return state
  }
}