
import { combineReducers } from 'redux'
import courses from './courses'
import professors from './professors'

const rootReducer = combineReducers({
  courses,
  professors
})

export default rootReducer