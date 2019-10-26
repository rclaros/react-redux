import {
  LOAD_PROFESSORS
} from '../constants/ActionTypes'

const initialState = []

export default function courses(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFESSORS:
      return action.professors;

    default:
      return state
  }
}