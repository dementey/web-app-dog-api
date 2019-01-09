import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import SimpleAppBar from '../components/SimpleAppBar';
import PagesRouter from '../components/PagesRouter'
import Footer from '../components/Footer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <SimpleAppBar />
          <PagesRouter />
          <Footer />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default (App)
