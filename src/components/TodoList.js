import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Todo from './Todo'
import { GridList } from '@material-ui/core';

const styles = ({
  root: {
    flexGrow: 1,
  },
});

const TodoList = ({ todos, toggleTodo, classes }) => (
  <div className={classes.root} style={{ padding: 30 }}>
    <GridList  spacing={8}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </GridList>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    result: PropTypes.object.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoList);
