import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CurseActions from '../actions'
import CourseForm from '../components/CourseForm'

const mapStateToProps = state => ({
  editorData: state.courses.editorData,
  editionError: state.courses.editionError,
  professors: state.professors,
  errors:{}
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CurseActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseForm)
