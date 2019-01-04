import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoComponent from '../components/AddTodoComponent'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  onSubmitt: (val1, val2) => dispatch(addTodo(val1, val2))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoComponent)
