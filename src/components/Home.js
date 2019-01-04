import React, { Fragment } from 'react'
import AddTodo from '../containers/AddTodoLink'
import VisibleTodoList from '../containers/VisibleTodoList'
import ListAllBreeds from './ListAllBreeds'
const Home = () => (
  <Fragment>
    <AddTodo />
    <VisibleTodoList />
    <ListAllBreeds />
  </Fragment>
)

export default Home
