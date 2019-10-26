import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CurseActions from '../actions'
import CourseList from '../components/CourseList'

const mapStateToProps = state => ({courses: state.courses.data})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CurseActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList)
